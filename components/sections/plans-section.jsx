"use client";

import { Check, ChevronLeft, ChevronRight, Diamond } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import SectionHeading from "../ui/section-heading";
import AnimateInView from "../ui/animate-in-view";
import { planItems } from "../../data/home-data";

const getWrappedDistance = (index, activeIndex, length) => {
  const direct = index - activeIndex;
  const forwardWrap = direct + length;
  const backwardWrap = direct - length;

  return [direct, forwardWrap, backwardWrap].reduce((closest, current) => {
    return Math.abs(current) < Math.abs(closest) ? current : closest;
  }, direct);
};

const getCardPositionClass = (distance, isDark) => {
  if (distance === 0) {
    return "left-1/2 z-20 w-[84%] -translate-x-1/2 scale-100 opacity-100 md:w-[65%] lg:w-[44%]";
  }

  if (distance === 1) {
    return `left-[82%] z-10 w-[68%] -translate-x-1/2 scale-[0.86] ${isDark ? "opacity-[0.28]" : "opacity-[0.9]"} md:left-[78%] md:w-[48%] lg:left-[75%] lg:w-[31%]`;
  }

  if (distance === -1) {
    return `left-[18%] z-10 w-[68%] -translate-x-1/2 scale-[0.86] ${isDark ? "opacity-[0.28]" : "opacity-[0.9]"} md:left-[22%] md:w-[48%] lg:left-[25%] lg:w-[31%]`;
  }

  if (distance === 2) {
    return `left-[106%] z-0 w-[62%] -translate-x-1/2 scale-[0.82] ${isDark ? "opacity-[0.2]" : "opacity-[0.7]"} md:left-[102%] md:w-[42%] lg:left-[98%] lg:w-[28%]`;
  }

  if (distance === -2) {
    return `left-[-6%] z-0 w-[62%] -translate-x-1/2 scale-[0.82] ${isDark ? "opacity-[0.2]" : "opacity-[0.7]"} md:left-[-2%] md:w-[42%] lg:left-[2%] lg:w-[28%]`;
  }

  return "pointer-events-none left-1/2 z-0 w-[42%] -translate-x-1/2 scale-[0.7] opacity-0";
};

export default function PlansSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const touchStartX = useRef(null);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + planItems.length) % planItems.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % planItems.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;

    if (Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section id="plans" className="section bg-(--bg)">
      <div className="container">
        <SectionHeading eyebrow="Membership Plans" title="Choose Your Level" align="center" />
        <AnimateInView className="mt-8" y={20}>
          <div className="relative overflow-hidden p-1 sm:p-2">
            <button
              type="button"
              className="absolute top-1/2 left-2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-(--line) bg-[color-mix(in_srgb,var(--panel)_85%,transparent)] transition-colors hover:border-(--gold) hover:text-(--gold)"
              onClick={goPrev}
              aria-label="View previous plan"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className="absolute top-1/2 right-2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-(--line) bg-[color-mix(in_srgb,var(--panel)_85%,transparent)] transition-colors hover:border-(--gold) hover:text-(--gold)"
              onClick={goNext}
              aria-label="View next plan"
            >
              <ChevronRight size={18} />
            </button>

            <div
              className="relative mx-auto h-[36rem] w-[min(980px,calc(100%-5.5rem))] overflow-hidden md:h-[38rem]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {planItems.map((plan, index) => {
                const distance = getWrappedDistance(index, activeIndex, planItems.length);
                const positionClass = getCardPositionClass(distance, isDark);
                const isActiveCard = distance === 0;

                return (
                  <article
                    key={plan.name}
                    className={`absolute top-3 grid content-start gap-[1.02rem] overflow-hidden rounded-[1rem] border bg-[linear-gradient(180deg,#191a1f,#13141a)] p-[1.15rem] text-[#e2e6ee] shadow-[0_14px_28px_color-mix(in_srgb,var(--black)_24%,transparent)] transition-all duration-[450ms] ease-out sm:p-[1.4rem] ${positionClass} ${
                      plan.highlight
                        ? "border-[color-mix(in_srgb,var(--gold)_90%,transparent)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--gold)_58%,transparent),0_16px_34px_color-mix(in_srgb,var(--gold)_20%,transparent)]"
                        : ""
                    }`}
                    style={{
                      borderColor: plan.highlight
                        ? "color-mix(in srgb, var(--gold) 90%, transparent)"
                        : "color-mix(in srgb, var(--gold) 50%, #2b2e37 50%)",
                    }}
                    onClick={() => setActiveIndex(index)}
                    aria-current={distance === 0 ? "true" : undefined}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        className={`m-0 text-[0.98rem] font-semibold ${
                          isActiveCard ? "text-(--gold)" : "text-white"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <span className="grid h-7 w-7 place-items-center rounded-full border border-[color-mix(in_srgb,var(--gold)_52%,transparent)] bg-transparent text-(--gold)">
                        <Diamond size={11} />
                      </span>
                    </div>
                    <p className="m-0 text-[3rem] leading-[1.05] [font-family:var(--font-heading),Impact,sans-serif] text-white">
                      {plan.price}
                    </p>
                    <p className="m-0 text-[0.95rem] text-[#c8cfdb]">
                      {plan.period.replace("/", "").trim()}
                    </p>
                    {isActiveCard ? (
                      <>
                        <p className="m-0 text-[0.94rem] leading-[1.6] text-[#cfd5df]">
                          {plan.description}
                        </p>
                        <div className="h-px w-full bg-[color-mix(in_srgb,var(--mist)_26%,transparent)]" />
                        <ul className="m-0 grid list-none gap-[0.52rem] p-0">
                          {plan.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-[0.9rem] leading-[1.5] text-[#d8dde6]"
                            >
                              <Check size={13} className="mt-[0.14rem] shrink-0 text-(--gold)" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#contact"
                          className="mt-[0.25rem] inline-flex min-h-[2.7rem] w-full items-center justify-center rounded-[0.45rem] border border-(--gold) bg-transparent px-[1rem] text-[1.04rem] font-semibold text-(--gold) transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--gold)_12%,transparent)]"
                        >
                          Get membership
                        </a>
                      </>
                    ) : (
                      <>
                        <div className="h-px w-full bg-[color-mix(in_srgb,var(--mist)_16%,transparent)]" />
                        <div className="h-[7.8rem] overflow-hidden">
                          <p className="m-0 text-[0.86rem] leading-[1.55] text-[#d8dde6]">
                            {plan.description}
                          </p>
                        </div>
                      </>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {planItems.map((plan, index) => (
                <button
                  key={plan.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-(--gold)" : "w-2.5 bg-(--line)"
                  }`}
                  aria-label={`Show ${plan.name} plan`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
