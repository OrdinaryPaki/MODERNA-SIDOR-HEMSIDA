import "server-only";
import { createHash } from "node:crypto";
import type { ContactRequest } from "../contact-request";

export type ContactDelivery = { status: "accepted" | "unavailable" | "failed" };

export async function deliverContactNotification(request: ContactRequest, recipient: string): Promise<ContactDelivery> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { status: "unavailable" };
  const payload = {
    from: `Moderna Sidor <${recipient}>`,
    to: [recipient],
    reply_to: request.email,
    subject: "Ny förfrågan från Moderna Sidors webbplats",
    text: `Namn: ${request.name}\nE-post: ${request.email}\n\n${request.projectInformation}`,
  };
  // A retry keeps its key across servers; edits create a distinct delivery.
  const digest = createHash("sha256").update(JSON.stringify(payload)).digest("hex");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `contact/${request.requestId}/${digest}`,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!response.ok) return { status: "failed" };
    const result: unknown = await response.json();
    return result && typeof result === "object" && "id" in result && typeof result.id === "string" && result.id
      ? { status: "accepted" } : { status: "failed" };
  } catch {
    return { status: "failed" };
  }
}
