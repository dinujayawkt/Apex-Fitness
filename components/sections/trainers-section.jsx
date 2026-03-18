import SectionHeading from "../ui/section-heading";
import AnimateInView from "../ui/animate-in-view";
import { trainerItems } from "../../data/home-data";

const trainerToneClasses = [
  "bg-gradient-to-br from-[#362c15] to-[#1d1d1d]",
  "bg-gradient-to-br from-[#38271a] to-[#232126]",
  "bg-gradient-to-br from-[#092f18] to-[#11311f]",
  "bg-gradient-to-br from-[#4c3605] to-[#242424]",
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="section bg-(--bg)">
      <div className="container">
        <SectionHeading eyebrow="Expert Coaches" title="Meet The Team" />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trainerItems.map((trainer, index) => (
            <AnimateInView key={trainer.name} delay={0.08 * index}>
              <article className="border border-(--line) bg-[color-mix(in_srgb,var(--panel)_45%,transparent)]">
                <div className={`min-h-64 ${trainerToneClasses[index % 4]}`} />
                <div className="p-[0.95rem]">
                  <h3 className="m-0 text-[0.95rem] uppercase tracking-[0.05em]">{trainer.name}</h3>
                  <p className="mt-[0.4rem] mb-0 text-[0.84rem] text-(--muted)">{trainer.role}</p>
                </div>
              </article>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
