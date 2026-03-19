"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  Dumbbell,
  Flame,
  Salad,
  HeartPulse,
  Activity,
  Scale,
  ChevronRight,
} from "lucide-react";
import AnimateInView from "../ui/animate-in-view";
import { serviceItems } from "../../data/home-data";

const serviceIcons = [Dumbbell, Flame, Salad, Activity, HeartPulse, Scale];

export default function ServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const selectedService = serviceItems[selectedIndex] ?? serviceItems[0];
  const SelectedIcon = serviceIcons[selectedIndex % serviceIcons.length];

  return (
    <section id="services" className="section bg-white dark:bg-[#0a0a0a]">
      <div className="container">
        <AnimateInView className="text-center">
          <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-(--gold)">
            Fitness and Gym Services
          </p>
          <h2 className="m-0 text-[clamp(2rem,4.6vw,3.4rem)] leading-none text-(--text) uppercase [font-family:var(--font-heading),Impact,sans-serif] dark:text-white">
            Our Professional Gym Services
          </h2>
        </AnimateInView>

        <AnimateInView delay={0.08} className="mx-auto mt-5 max-w-[72ch] text-center" y={18}>
          <p
            className={`m-0 text-[1rem] leading-[1.9] ${
              isDark
                ? "text-[color-mix(in_srgb,var(--mist)_72%,transparent)]"
                : "text-[color-mix(in_srgb,var(--text)_88%,transparent)]"
            }`}
          >
            Select any service from the list. The preview updates instantly with service
            information and a relevant image so members can quickly understand what is included.
          </p>
        </AnimateInView>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimateInView className="relative min-h-[22rem] sm:min-h-[25rem]" y={20}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${selectedService.title}`}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute left-0 top-[0.2rem] h-[17.5rem] w-[44%] overflow-hidden rounded-[0.15rem] sm:h-[20.5rem] lg:h-[21rem]"
                style={{
                  backgroundImage: `linear-gradient(140deg, rgba(10, 10, 10, 0.38), rgba(10, 10, 10, 0.55)), url(${selectedService.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.article
                key={`card-${selectedService.title}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.36, ease: "easeOut" }}
                className="absolute left-[28%] top-[1.6rem] z-10 w-[72%] p-[1.15rem] text-[#f2f4f8] shadow-[0_15px_40px_rgba(0,0,0,0.28)] sm:top-[2.1rem] sm:p-[1.4rem]"
                style={{
                  background: "color-mix(in srgb, var(--charcoal) 78%, #4a4a4a 22%)",
                  clipPath: "polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%)",
                }}
              >
                <span className="grid h-[2.3rem] w-[2.3rem] place-items-center rounded-[0.35rem] bg-(--gold) text-black">
                  <SelectedIcon size={16} />
                </span>
                <h3
                  className="mb-0 mt-[0.85rem] text-[1.25rem] font-bold leading-[1.2] sm:text-[1.45rem]"
                  style={{ color: "#f4f7fc" }}
                >
                  {selectedService.title}
                </h3>
                <p
                  className="mb-0 mt-[0.62rem] text-[0.9rem] leading-[1.65] font-semibold sm:text-[0.95rem]"
                  style={{ color: "#dbe2ee" }}
                >
                  {selectedService.description}
                </p>
                <a
                  href="#contact"
                  className="mt-[0.95rem] inline-flex min-h-[2rem] items-center gap-1 border-none bg-(--gold) px-[0.95rem] text-[0.63rem] font-semibold uppercase tracking-[0.12em] text-black"
                >
                  View Service <ArrowUpRight size={12} />
                </a>
              </motion.article>
            </AnimatePresence>
          </AnimateInView>

          <AnimateInView className={isDark ? "text-white" : "text-black"} delay={0.08} y={20}>
            {serviceItems.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              const isActive = index === selectedIndex;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`group flex w-full items-center justify-between gap-3 border-b px-[0.15rem] py-[0.82rem] text-left transition-colors duration-200 ${
                    isActive
                      ? "border-[color-mix(in_srgb,var(--gold)_58%,transparent)]"
                      : "border-(--line)"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`grid h-[1.6rem] w-[1.6rem] place-items-center rounded-[0.25rem] border ${
                        isActive
                          ? "border-[color-mix(in_srgb,var(--gold)_68%,transparent)] bg-[color-mix(in_srgb,var(--gold)_14%,transparent)] text-(--gold)"
                          : isDark
                            ? "border-[color-mix(in_srgb,var(--mist)_28%,transparent)] text-[color-mix(in_srgb,var(--mist)_66%,transparent)]"
                            : "border-[color-mix(in_srgb,var(--text)_28%,transparent)] text-[color-mix(in_srgb,var(--text)_88%,transparent)]"
                      }`}
                    >
                      <Icon size={13} />
                    </span>
                    <span
                      className={`text-[0.84rem] tracking-[0.02em] sm:text-[0.9rem] ${
                        isActive
                          ? "font-semibold text-(--gold)"
                          : isDark
                            ? "font-medium text-[color-mix(in_srgb,var(--mist)_82%,transparent)]"
                            : "font-semibold text-[color-mix(in_srgb,var(--text)_90%,transparent)]"
                      }`}
                    >
                      {service.title}
                    </span>
                  </span>
                  <ChevronRight
                    size={14}
                    className={`shrink-0 transition-transform duration-200 ${
                      isActive
                        ? "translate-x-[2px] text-(--gold)"
                        : isDark
                          ? "text-[color-mix(in_srgb,var(--mist)_52%,transparent)] group-hover:translate-x-[2px]"
                          : "text-[color-mix(in_srgb,var(--text)_82%,transparent)] group-hover:translate-x-[2px]"
                    }`}
                  />
                </button>
              );
            })}

            <a
              href="#contact"
              className="mt-[0.9rem] inline-flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--text)_72%,transparent)] transition-colors hover:text-(--gold) dark:text-[color-mix(in_srgb,var(--mist)_72%,transparent)]"
            >
              View All Services <ArrowUpRight size={14} />
            </a>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
