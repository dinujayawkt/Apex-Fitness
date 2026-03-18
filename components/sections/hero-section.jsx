import AnimateInView from "../ui/animate-in-view";
import CountUp from "../ui/count-up";

const heroMetrics = [
  { value: 12, suffix: "K+", label: "Active Members" },
  { value: 48, suffix: "+", label: "Expert Trainers" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 5, suffix: "★", label: "Average Review" },
];

export default function HeroSection() {
  return (
    <section className="hero bg-(--bg)" id="top">
      <div className="container relative grid flex-1 items-center gap-[clamp(1.4rem,4vw,4rem)] pb-4 md:grid-cols-[1.1fr_1fr]">
        <AnimateInView>
          <AnimateInView delay={0.02} y={16}>
            <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-(--gold)">
              Est. 2026 · Premium Fitness
            </p>
          </AnimateInView>
          <AnimateInView delay={0.08} y={20}>
            <h1 className="m-0 text-[clamp(2.6rem,9vw,7rem)] leading-[0.88] uppercase [font-family:var(--font-heading),Impact,sans-serif] max-[700px]:text-[clamp(2.4rem,16vw,4.2rem)]">
              Push <span className="text-(--gold)">Your</span> Limits
            </h1>
          </AnimateInView>
          <AnimateInView delay={0.16} y={18}>
            <p className="my-4 mb-[1.8rem] max-w-[58ch] leading-[1.8] text-(--muted)">
              Elite training, expert coaching, and a high-energy community designed to help
              you move better, get stronger, and stay consistent.
            </p>
          </AnimateInView>
          <AnimateInView delay={0.24} y={14}>
            <div className="flex flex-wrap gap-[0.8rem]">
              <a href="#plans" className="btn btn--solid">
                Start Training
              </a>
              <a href="#services" className="btn btn--ghost">
                Discover More
              </a>
            </div>
          </AnimateInView>
        </AnimateInView>

        <AnimateInView delay={0.15} className="justify-self-stretch md:justify-self-end" y={40}>
          <div className="radar-card">
            <span>Fitness Performance Circle</span>
          </div>
        </AnimateInView>
      </div>

      <div className="container relative mt-auto grid grid-cols-2 border-y border-(--line) md:grid-cols-4">
        {heroMetrics.map((metric, index) => (
          <AnimateInView
            key={metric.label}
            delay={0.05 * index}
            className={`${index === 0 || index === 2 ? "border-r border-(--line)" : ""} px-4 py-[1.4rem] ${index === 1 ? "max-md:border-r max-md:border-(--line) md:border-r md:border-(--line)" : ""}`}
            y={18}
          >
            <h3 className="m-0 text-[clamp(1.6rem,2vw,2rem)] text-(--gold) [font-family:var(--font-heading),Impact,sans-serif]">
              <CountUp to={metric.value} suffix={metric.suffix} />
            </h3>
            <p className="mt-1 mb-0 text-[0.7rem] uppercase tracking-[0.15em] text-(--muted)">
              {metric.label}
            </p>
          </AnimateInView>
        ))}
      </div>
    </section>
  );
}
