export type ContactRequest = {
  name: string;
  email: string;
  projectInformation: string;
  requestId: string;
  website: string;
};
export type ContactRequestResult = {
  status: "sent" | "invalid" | "unavailable" | "failed";
  message: string;
};

export async function requestProjectContact(request: ContactRequest): Promise<ContactRequestResult> {
  const failure: ContactRequestResult = { status: "failed", message: "Det gick inte att bekräfta att meddelandet skickades. Försök igen eller använd e-postlänken." };
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
      signal: AbortSignal.timeout(15000),
    });
    const result: unknown = await response.json();
    if (!result || typeof result !== "object" || !("status" in result) || !("message" in result)
      || typeof result.message !== "string"
      || !["sent", "invalid", "unavailable", "failed"].includes(String(result.status))) return failure;
    if (result.status === "sent" && !response.ok) return failure;
    return result as ContactRequestResult;
  } catch {
    return failure;
  }
}
