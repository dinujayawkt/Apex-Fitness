import AnimateInView from "../ui/animate-in-view";

export default function HeroSection() {
  return (
    <section className="hero bg-(--bg)" id="top">
      <div className="container relative grid flex-1 items-center gap-[clamp(1.4rem,4vw,4rem)] pb-4 md:grid-cols-[1.1fr_1fr]">
        <AnimateInView>
          <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-(--gold)">
            Est. 2026 · Premium Fitness
          </p>
          <h1 className="m-0 text-[clamp(2.6rem,9vw,7rem)] leading-[0.88] uppercase [font-family:var(--font-heading),Impact,sans-serif] max-[700px]:text-[clamp(2.4rem,16vw,4.2rem)]">
            Push <span className="text-(--gold)">Your</span> Limits
          </h1>
          <p className="my-4 mb-[1.8rem] max-w-[58ch] leading-[1.8] text-(--muted)">
            Elite training, expert coaching, and a high-energy community designed to help
            you move better, get stronger, and stay consistent.
          </p>
          <div className="flex flex-wrap gap-[0.8rem]">
            <a href="#plans" className="btn btn--solid">
              Start Training
            </a>
            <a href="#services" className="btn btn--ghost">
              Discover More
            </a>
          </div>
        </AnimateInView>

        <AnimateInView delay={0.15} className="justify-self-stretch md:justify-self-end" y={40}>
          <div className="radar-card">
            <span>Fitness Performance Circle</span>
          </div>
        </AnimateInView>
      </div>

      <div className="container relative mt-auto grid grid-cols-2 border-y border-(--line) md:grid-cols-4">
        <article className="border-r border-(--line) px-4 py-[1.4rem]">
          <h3 className="m-0 text-[clamp(1.6rem,2vw,2rem)] text-(--gold) [font-family:var(--font-heading),Impact,sans-serif]">
            12K+
          </h3>
          <p className="mt-1 mb-0 text-[0.7rem] uppercase tracking-[0.15em] text-(--muted)">
            Active Members
          </p>
        </article>
        <article className="px-4 py-[1.4rem] max-md:border-r max-md:border-(--line) md:border-r md:border-(--line)">
          <h3 className="m-0 text-[clamp(1.6rem,2vw,2rem)] text-(--gold) [font-family:var(--font-heading),Impact,sans-serif]">
            48+
          </h3>
          <p className="mt-1 mb-0 text-[0.7rem] uppercase tracking-[0.15em] text-(--muted)">
            Expert Trainers
          </p>
        </article>
        <article className="border-r border-(--line) px-4 py-[1.4rem] md:border-r md:border-(--line)">
          <h3 className="m-0 text-[clamp(1.6rem,2vw,2rem)] text-(--gold) [font-family:var(--font-heading),Impact,sans-serif]">
            99%
          </h3>
          <p className="mt-1 mb-0 text-[0.7rem] uppercase tracking-[0.15em] text-(--muted)">
            Satisfaction Rate
          </p>
        </article>
        <article className="px-4 py-[1.4rem]">
          <h3 className="m-0 text-[clamp(1.6rem,2vw,2rem)] text-(--gold) [font-family:var(--font-heading),Impact,sans-serif]">
            5★
          </h3>
          <p className="mt-1 mb-0 text-[0.7rem] uppercase tracking-[0.15em] text-(--muted)">
            Average Review
          </p>
        </article>
      </div>
    </section>
  );
}
