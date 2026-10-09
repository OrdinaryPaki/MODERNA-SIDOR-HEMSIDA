import type { ContactRequest } from "./contact-request";

export function validateContactRequest(value: unknown): ContactRequest | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Record<string, unknown>;
  if (["name", "email", "projectInformation", "requestId", "website"].some(key => typeof input[key] !== "string")) return null;
  const { name, email, projectInformation, requestId, website } = input as ContactRequest;
  if (!name.trim() || name.length > 200 || ["\r", "\n", "\x00"].some(character => name.includes(character))
    || email.length > 254 || !/^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/.test(email.trim())
    || !projectInformation.trim() || projectInformation.length > 10000 || projectInformation.includes("\x00")
    || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)
    || website !== "") return null;
  return { name: name.trim(), email: email.trim(), projectInformation: projectInformation.trim(), requestId, website };
}
