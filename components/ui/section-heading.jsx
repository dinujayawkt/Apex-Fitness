import AnimateInView from "./animate-in-view";

export default function SectionHeading({ eyebrow, title, align = "left" }) {
  const alignmentClass = align === "center" ? "text-center" : "text-left";

  return (
    <AnimateInView className={alignmentClass}>
      <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-(--gold)">
        {eyebrow}
      </p>
      <h2 className="m-0 text-[clamp(2rem,4.6vw,3.4rem)] leading-none uppercase [font-family:var(--font-heading),Impact,sans-serif]">
        {title}
      </h2>
    </AnimateInView>
  );
}
