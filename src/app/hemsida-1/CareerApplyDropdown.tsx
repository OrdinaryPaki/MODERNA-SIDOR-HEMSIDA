import type { CSSProperties } from "react";
import Link from "next/link";
import { navHref } from "./navigation";

type CareerApplyDropdownProps = {
  role: string;
  className?: string;
  style?: CSSProperties;
};

export function CareerApplyDropdown({ role, className, style }: CareerApplyDropdownProps) {
  const href = `${navHref.contact}?roll=${encodeURIComponent(role)}`;

  return (
    <Link
      aria-label={`Ansök till ${role}`}
      className={className}
      href={href}
      style={style}
    >
        <span aria-hidden="true">✦</span>
        <span>Ansök</span>
    </Link>
  );
}
