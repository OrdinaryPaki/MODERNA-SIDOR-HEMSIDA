import { contactEmail } from "@/data/unique-contact";
import { site } from "@/lib/seo";
import { deliverContactNotification } from "@/lib/adapters/contact-mail";
import { validateContactRequest } from "@/lib/contact-validation";
import { readBoundedJson } from "@/lib/read-bounded-json";
import type { ContactRequestResult } from "@/lib/contact-request";

export const runtime = "nodejs";

function reply(status: ContactRequestResult["status"], message: string, code: number) {
  return Response.json({ status, message }, { status: code, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const allowed = new Set([site.url, `https://www.${new URL(site.url).hostname}`]);
  if (process.env.NODE_ENV === "development") {
    const port = new URL(request.url).port;
    for (const host of ["localhost", "127.0.0.1"]) allowed.add(`http://${host}${port ? `:${port}` : ""}`);
  }
  if (!origin || !allowed.has(origin)) return reply("invalid", "Ladda om sidan och försök igen.", 403);
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return reply("invalid", "Använd kontaktformuläret eller mejla oss direkt.", 415);
  }
  let input: unknown;
  try { input = await readBoundedJson(request, 65536); }
  catch (error) { return reply("invalid", "Meddelandet kunde inte läsas. Kontrollera uppgifterna och försök igen.", error instanceof RangeError ? 413 : 400); }
  const contact = validateContactRequest(input);
  if (!contact) return reply("invalid", "Kontrollera namn, e-postadress och meddelande och försök igen.", 400);
  const delivery = await deliverContactNotification(contact, contactEmail);
  if (delivery.status === "accepted") return reply("sent", "Tack! Vi har tagit emot ditt meddelande och återkommer till dig.", 200);
  return reply(delivery.status, `Det gick inte att skicka just nu. Försök igen eller mejla ${contactEmail}.`, delivery.status === "unavailable" ? 503 : 502);
}
