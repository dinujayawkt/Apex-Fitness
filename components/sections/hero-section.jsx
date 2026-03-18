"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimateInView from "../ui/animate-in-view";
import CountUp from "../ui/count-up";

const heroMetrics = [
  { value: 12, suffix: "K+", label: "Active Members" },
  { value: 48, suffix: "+", label: "Expert Trainers" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 5, suffix: "★", label: "Average Review" },
];

const heroSlides = [
  {
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lead: "Be Fit",
    accent: "Be Stronger",
    blurb: "Unleash your potential with focused training and elite coaching.",
    badge: "Strength Track",
  },
  {
    image:
      "https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lead: "Train Hard",
    accent: "Move Better",
    blurb: "Build athletic power with precision programming and recovery sessions.",
    badge: "Athletic Mode",
  },
  {
    image:
      "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lead: "Stay Focused",
    accent: "Stay Consistent",
    blurb: "Transform your routine into measurable progress week by week.",
    badge: "Performance Lab",
  },
  {
    image:
      "https://images.pexels.com/photos/6740050/pexels-photo-6740050.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lead: "Lift Smart",
    accent: "Recover Faster",
    blurb: "Train with intent and bounce back stronger using guided protocols.",
    badge: "Recovery Ready",
  },
];

export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeSlide = heroSlides[slideIndex];

  return (
    <section className="hero bg-(--bg)" id="top">
      <div className="hero-slide-wrap" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero-slide ${index === slideIndex ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="container relative grid flex-1 items-center gap-[clamp(1.4rem,4vw,4rem)] pb-4 md:grid-cols-[1.1fr_1fr]">
        <div className="max-w-[62ch]">
          <AnimateInView delay={0.02} y={16}>
            <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-(--gold)">
              Est. 2026 · Premium Fitness · {activeSlide.badge}
            </p>
          </AnimateInView>
          <div className="min-h-[15.6rem] max-[900px]:min-h-[14.2rem] max-[700px]:min-h-[13.4rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`hero-copy-${slideIndex}`}
                initial={{ opacity: 0, x: 46 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -46 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <h1 className="m-0 text-[clamp(2.1rem,7.2vw,5.2rem)] leading-[0.92] uppercase text-[color-mix(in_srgb,var(--mist)_96%,transparent)] [font-family:var(--font-heading),Impact,sans-serif] [text-shadow:0_5px_22px_rgba(0,0,0,0.55)] max-[700px]:text-[clamp(1.9rem,12.8vw,3.6rem)]">
                  <span className="block">{activeSlide.lead}</span>
                  <span className="block whitespace-nowrap text-(--gold-soft) max-[700px]:whitespace-normal">
                    {activeSlide.accent}
                  </span>
                </h1>
                <p className="mt-4 mb-0 max-w-[58ch] leading-[1.8] text-[color-mix(in_srgb,var(--mist)_88%,transparent)] [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]">
                  {activeSlide.blurb} Elite training systems built for real-world results and
                  consistent momentum.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-2 flex flex-wrap gap-[0.8rem]">
            <a href="#plans" className="btn btn--solid">
              Start Training
            </a>
            <a
              href="#services"
              className="btn btn--ghost border-(--gold) text-(--gold-soft) shadow-[0_0_0_1px_color-mix(in_srgb,var(--gold)_28%,transparent)]"
              style={{
                backgroundColor: "color-mix(in srgb, var(--black) 58%, transparent)",
                borderColor: "var(--gold)",
              }}
            >
              Discover More
            </a>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.badge}
              type="button"
              onClick={() => setSlideIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === slideIndex
                  ? "w-8 bg-(--gold)"
                  : "w-2.5 bg-[color-mix(in_srgb,var(--mist)_60%,transparent)]"
              }`}
              aria-label={`Show hero slide ${index + 1}`}
              aria-current={index === slideIndex ? "true" : undefined}
            />
          ))}
        </div>
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
            <p className="mt-1 mb-0 text-[0.7rem] uppercase tracking-[0.15em] text-[color-mix(in_srgb,var(--mist)_82%,transparent)]">
              {metric.label}
            </p>
          </AnimateInView>
        ))}
      </div>

    </section>
  );
}
