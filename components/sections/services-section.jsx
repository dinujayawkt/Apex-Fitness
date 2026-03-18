import { Dumbbell, Flame, Salad, HeartPulse, Activity, Scale } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import AnimateInView from "../ui/animate-in-view";
import { serviceItems } from "../../data/home-data";

const serviceIcons = [Dumbbell, Flame, Salad, Activity, HeartPulse, Scale];

export default function ServicesSection() {
  return (
    <section id="services" className="section bg-(--bg)">
      <div className="container">
        <SectionHeading eyebrow="What We Offer" title="Our Services" />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <AnimateInView key={service.title} delay={0.07 * index}>
                <article
                  className="border p-[1.1rem]"
                  style={{
                    borderColor: "var(--line)",
                    background: "color-mix(in srgb, var(--panel) 45%, transparent)",
                  }}
                >
                  <Icon size={18} style={{ color: "var(--gold)" }} />
                  <h3 className="my-[0.7rem] mb-[0.45rem] text-base uppercase tracking-[0.05em]">
                    {service.title}
                  </h3>
                  <p className="m-0 text-[0.93rem] leading-[1.7]" style={{ color: "var(--muted)" }}>
                    {service.description}
                  </p>
                </article>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
