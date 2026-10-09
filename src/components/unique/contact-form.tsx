"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { requestProjectContact } from "@/lib/contact-request";
import { contactEmail } from "@/data/unique-contact";
import styles from "./contact.module.css";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const sending = useRef(false);
  const requestId = useRef<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setPending(true);
    setMessage("");
    const element = event.currentTarget;
    const form = new FormData(element);
    requestId.current ??= crypto.randomUUID();
    try {
      const result = await requestProjectContact({
        name: String(form.get("Name") ?? ""),
        email: String(form.get("Email") ?? ""),
        projectInformation: String(form.get("Message") ?? ""),
        website: String(form.get("Website") ?? ""),
        requestId: requestId.current,
      });
      setMessage(result.message);
      if (result.status === "sent") { element.reset(); requestId.current = null; }
    } finally {
      sending.current = false;
      setPending(false);
    }
  }

  return <form className={styles.form} method="post" action="/api/contact" onSubmit={handleSubmit} aria-busy={pending}>
    <p className={styles.formNotice}>Du kan också mejla oss direkt på <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
    <div className={styles.spamTrap} aria-hidden="true"><label>Webbplats<input name="Website" type="text" tabIndex={-1} autoComplete="off" /></label></div>
    <div className={styles.fields}>
      <input aria-label="Namn" autoComplete="name" type="text" name="Name" placeholder="Namn *" required maxLength={200} disabled={pending} />
      <input aria-label="E-post" autoComplete="email" type="email" name="Email" placeholder="E-post *" required maxLength={254} disabled={pending} />
    </div>
    <textarea aria-label="Berätta om ert behov" name="Message" placeholder="Berätta om ert behov *" required maxLength={10000} disabled={pending} />
    <p className={styles.formNotice}>Läs hur vi hanterar dina uppgifter i vår <Link href="/privacy">integritetspolicy</Link>.</p>
    <button type="submit" className={styles.submit} disabled={pending}>
      <span>{pending ? "Skickar…" : "Skicka meddelande"}</span>
      <span aria-hidden="true"><svg width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 11h18v18m-25.456 7.456L37 11" /></svg></span>
    </button>
    <p className={styles.submitMessage} role="status" aria-live="polite">{message}</p>
  </form>;
}
