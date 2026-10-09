import Link from "next/link";

export function Button({ href, children, variant = "outline", className = "" }: { href: string; children: React.ReactNode; variant?: "outline" | "solid" | "white" | "text"; className?: string }) {
  return <Link href={href} className={`button button--${variant} ${className}`}><span className="button-label">{children}</span>{variant === "text" && <span className="button-arrow" aria-hidden="true"><svg width="32" height="32" viewBox="0 0 48 48" fill="none"><path d="M19 11h18v18m-25.456 7.456L37 11" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>}</Link>;
}
