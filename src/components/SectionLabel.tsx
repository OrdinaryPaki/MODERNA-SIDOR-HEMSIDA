export default function SectionLabel({ children }: { children: string }) {
  return (
    <span className="block font-mono text-[20px] leading-[26px] tracking-[-0.4px] text-foreground/70">
      {children}
    </span>
  );
}
