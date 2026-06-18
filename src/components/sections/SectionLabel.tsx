export default function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`w-fit font-mono text-base font-medium leading-[1.3] tracking-[-0.02em] sm:text-[20px] ${
        dark ? "text-[#f0f5f9]" : "text-[#1f75b2]"
      }`}
    >
      {children}
    </p>
  );
}
