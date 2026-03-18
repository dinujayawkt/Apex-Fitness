"use client";

import Image from "next/image";
import { ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimateInView from "../ui/animate-in-view";
import { trainerItems } from "../../data/home-data";

const trainerDetails = [
  "Former national weightlifting champion with 12 years of coaching elite athletes to competition level.",
  "Certified HIIT specialist and marathon runner with a passion for high-performance functional fitness.",
  "Registered dietitian with expertise in sports nutrition and evidence-based body transformation protocols.",
  "500hr certified yoga teacher integrating mindfulness, mobility, and breathwork for peak wellness.",
];

export default function TrainersSection() {
  const [activeTrainer, setActiveTrainer] = useState(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!cardsRef.current) {
        return;
      }

      if (!cardsRef.current.contains(event.target)) {
        setActiveTrainer(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <section id="trainers" className="section bg-[#14181f] dark:bg-[#0a0a0a]">
      <div className="container">
        <AnimateInView className="text-center" delay={0.03}>
          <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-(--gold)">
            Our Trainers
          </p>
          <h2 className="m-0 text-[clamp(2rem,4.8vw,3.4rem)] leading-none text-white uppercase [font-family:var(--font-heading),Impact,sans-serif]">
            Meet Our Proficient Trainer
          </h2>
        </AnimateInView>

        <div ref={cardsRef} className="mt-12 grid gap-9 sm:grid-cols-2 xl:grid-cols-4">
          {trainerItems.map((trainer, index) => {
            const isActive = activeTrainer === index;

            return (
              <AnimateInView key={trainer.name} delay={0.05 * index}>
                <article className="overflow-hidden border border-[color-mix(in_srgb,var(--gold)_24%,transparent)] bg-[linear-gradient(180deg,#141820,#12151b)] transition-transform duration-300 hover:-translate-y-[4px]">
                  <button
                    type="button"
                    onClick={() => setActiveTrainer((prev) => (prev === index ? null : index))}
                    className="group block w-full text-left"
                    aria-expanded={isActive}
                  >
                    <div className="relative h-[21rem] overflow-hidden">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_srgb,var(--black)_70%,transparent),transparent_58%)]" />
                      <div className="absolute inset-x-0 bottom-0 border-t border-[color-mix(in_srgb,var(--gold)_20%,transparent)] bg-[color-mix(in_srgb,var(--black)_58%,transparent)] px-[1.05rem] py-[0.95rem]">
                        <h3 className="m-0 text-[1.01rem] font-semibold uppercase tracking-[0.06em] text-white">
                          {trainer.name}
                        </h3>
                        <p className="m-0 mt-1 text-[0.77rem] font-medium uppercase tracking-[0.16em] text-(--gold)">
                          {trainer.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-[color-mix(in_srgb,var(--gold)_20%,transparent)] px-[1.05rem] py-[0.78rem]">
                      <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[color-mix(in_srgb,var(--mist)_84%,transparent)]">
                        View Profile
                      </span>
                      <ChevronRight
                        size={16}
                        className={`text-(--gold) transition-transform duration-300 ${
                          isActive ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid overflow-hidden border-t border-[color-mix(in_srgb,var(--gold)_20%,transparent)] bg-[color-mix(in_srgb,var(--black)_52%,transparent)] px-[1.05rem] text-[0.93rem] leading-[1.75] text-[color-mix(in_srgb,var(--mist)_84%,transparent)] transition-all duration-300 ${
                      isActive ? "max-h-64 py-[1rem] opacity-100" : "max-h-0 py-0 opacity-0"
                    }`}
                  >
                    <p className="m-0">{trainerDetails[index]}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-[color-mix(in_srgb,var(--mist)_26%,transparent)] text-[color-mix(in_srgb,var(--mist)_76%,transparent)] transition-colors hover:text-(--gold)">
                        <Facebook size={14} />
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-[color-mix(in_srgb,var(--mist)_26%,transparent)] text-[color-mix(in_srgb,var(--mist)_76%,transparent)] transition-colors hover:text-(--gold)">
                        <Instagram size={14} />
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-[color-mix(in_srgb,var(--mist)_26%,transparent)] text-[color-mix(in_srgb,var(--mist)_76%,transparent)] transition-colors hover:text-(--gold)">
                        <Twitter size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
