import SectionHeading from "../ui/section-heading";
import AnimateInView from "../ui/animate-in-view";
import { planItems } from "../../data/home-data";

export default function PlansSection() {
  return (
    <section id="plans" className="section bg-(--bg)">
      <div className="container">
        <SectionHeading eyebrow="Membership Plans" title="Choose Your Level" align="center" />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {planItems.map((plan, index) => (
            <AnimateInView key={plan.name} delay={0.08 * index}>
              <article
                className={`grid content-start gap-[0.95rem] border border-(--line) bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] p-[1.35rem] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_color-mix(in_srgb,var(--gold)_18%,transparent)] ${
                  plan.highlight
                    ? "border-(--gold) shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--gold)_65%,transparent)]"
                    : ""
                }`}
              >
                {plan.highlight ? (
                  <p className="m-0 justify-self-start bg-(--gold) px-[0.55rem] py-[0.25rem] text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#090909]">
                    Most Popular
                  </p>
                ) : null}
                <h3 className="m-0 text-[1.1rem] uppercase tracking-[0.06em]">{plan.name}</h3>
                <p className="m-0 text-[2.1rem] [font-family:var(--font-heading),Impact,sans-serif]">
                  {plan.price} <span className="text-[0.95rem] text-(--muted)">{plan.period}</span>
                </p>
                <ul className="m-0 grid list-none gap-[0.52rem] p-0">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-[0.91rem] text-(--muted)">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button type="button" className="btn btn--solid">
                  Get Started
                </button>
              </article>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
