"use client";

import { useId, useState } from "react";
import type { CSSProperties } from "react";

type CareerApplyDropdownProps = {
  role: string;
  className?: string;
  style?: CSSProperties;
};

export function CareerApplyDropdown({ role, className, style }: CareerApplyDropdownProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={className} data-open={open ? "true" : "false"} style={style}>
      <button
        aria-controls={id}
        aria-expanded={open}
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        <span aria-hidden="true">✦</span>
        <span>Ansök</span>
      </button>
      {open ? (
        <form className="careerApplyDropdown" id={id} onSubmit={(event) => event.preventDefault()}>
          <p>{role}</p>
          <label>
            Namn
            <input name="name" placeholder="Ditt namn" type="text" />
          </label>
          <label>
            E-post
            <input name="email" placeholder="namn@bolag.se" type="email" />
          </label>
          <label>
            Telefon eller profil
            <input name="contact" placeholder="Telefon, LinkedIn eller portfolio" type="text" />
          </label>
          <label>
            Kort om dig
            <textarea name="message" placeholder="Berätta kort vad du vill bidra med" rows={3} />
          </label>
          <button type="submit">Skicka ansökan</button>
        </form>
      ) : null}
    </div>
  );
}
