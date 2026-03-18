"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import AnimateInView from "../ui/animate-in-view";

const highlights = [
  {
    title: "More Than 15 Years of Experience",
    description:
      "Our coaches build structured programs for strength, endurance, and body transformation. Every member receives practical progression guidance, measurable milestone tracking, and weekly adjustments based on performance feedback. We focus on sustainable habits so results continue long after the first phase.",
    images: [
      "https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    title: "Authorized Instructors",
    description:
      "Certified professionals monitor movement quality, technique, and load progression so your sessions stay efficient, safe, and performance-driven. Every coach follows standard assessment protocols and corrective methods to reduce injury risk while improving execution quality.",
    images: [
      "https://images.pexels.com/photos/6456141/pexels-photo-6456141.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7674486/pexels-photo-7674486.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    title: "Outstanding Member Results",
    description:
      "From fat-loss and performance gains to mobility improvement, our members follow practical systems that consistently deliver visible results. Progress is reviewed through body metrics, strength checkpoints, and mobility benchmarks to keep every plan objective and transparent.",
    images: [
      "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6550827/pexels-photo-6550827.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
];

export default function AboutSection() {
  const [activeHighlight, setActiveHighlight] = useState(null);
  const [swapImageOrder, setSwapImageOrder] = useState(false);
  const boxesRef = useRef(null);

  const activeImages = highlights[activeHighlight]?.images ?? highlights[0].images;
  const firstImage = swapImageOrder ? activeImages[1] : activeImages[0];
  const secondImage = swapImageOrder ? activeImages[0] : activeImages[1];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSwapImageOrder((prev) => !prev);
    }, 6000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeHighlight]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!boxesRef.current) {
        return;
      }

      if (!boxesRef.current.contains(event.target)) {
        setActiveHighlight(null);
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
    <section id="about" className="section bg-(--bg)">
      <div className="container grid items-center gap-[clamp(1.6rem,5vw,4rem)] lg:grid-cols-[1fr_1.08fr]">
        <AnimateInView className="w-full" delay={0.08}>
          <div className="relative mx-auto h-[25rem] w-[min(36rem,100%)] sm:h-[29rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`about-first-${firstImage}`}
                initial={{ opacity: 0, x: -10, scale: 1.03 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 1.02 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 h-[82%] w-[58%] rounded-[0.45rem] bg-cover bg-center shadow-[0_18px_30px_color-mix(in_srgb,var(--black)_32%,transparent)]"
                style={{ backgroundImage: `url(${firstImage})` }}
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={`about-second-${secondImage}`}
                initial={{ opacity: 0, x: 10, scale: 1.03 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -8, scale: 1.02 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-[17%] h-[76%] w-[58%] rounded-[0.45rem] bg-cover bg-center shadow-[0_18px_30px_color-mix(in_srgb,var(--black)_32%,transparent)]"
                style={{ backgroundImage: `url(${secondImage})` }}
              />
            </AnimatePresence>
          </div>
        </AnimateInView>

        <div>
          <AnimateInView delay={0.02}>
            <p className="m-0 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-(--gold)">
              About Us
            </p>
            <h2 className="mt-3 mb-2 text-[clamp(1.95rem,5vw,3.2rem)] leading-[1.07] font-medium">
              We Have a <span className="text-(--gold)">Great Deal</span> of Experience With
              Fitness
            </h2>
            <p className="m-0 max-w-[65ch] text-[0.98rem] font-medium leading-[1.8] text-[color-mix(in_srgb,var(--text)_76%,transparent)] dark:text-(--muted)">
              A lot of people gain from customized exercise regimens designed by personal
              trainers or fitness experts to target particular body objectives, such as weight
              loss, muscle building, or enhanced sports performance.
            </p>
          </AnimateInView>

          <ul ref={boxesRef} className="mt-6 grid grid-cols-1 gap-[0.65rem]">
            {highlights.map((item, index) => (
              <AnimateInView key={item.title} delay={0.06 * index}>
                <li>
                  <button
                    type="button"
                    className={`w-full border px-3 py-[0.68rem] text-left transition-all duration-300 ${
                      activeHighlight === index
                        ? "border-(--gold) bg-transparent"
                        : "border-(--line) bg-[color-mix(in_srgb,var(--panel)_46%,transparent)]"
                    }`}
                    onClick={() =>
                      setActiveHighlight((prev) => (prev === index ? null : index))
                    }
                    aria-expanded={activeHighlight === index}
                  >
                    <span className="flex items-center justify-between gap-3 text-[0.82rem] font-semibold uppercase tracking-[0.07em] text-[color-mix(in_srgb,var(--text)_84%,transparent)] dark:text-(--text)">
                      {`0${index + 1}. ${item.title}`}
                      <ChevronRight
                        size={16}
                        className={`shrink-0 text-(--gold) transition-transform duration-300 ${
                          activeHighlight === index ? "rotate-90" : ""
                        }`}
                      />
                    </span>
                    <AnimatePresence initial={false}>
                      {activeHighlight === index ? (
                        <motion.span
                          key={`about-content-${index}`}
                          initial={{ height: 0, opacity: 0, y: -6 }}
                          animate={{ height: "auto", opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -6 }}
                          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                          className="mt-2 grid overflow-hidden text-[0.95rem] font-medium leading-[1.75] text-[color-mix(in_srgb,var(--text)_74%,transparent)] dark:text-(--muted)"
                        >
                          {item.description}
                        </motion.span>
                      ) : null}
                    </AnimatePresence>
                  </button>
                </li>
              </AnimateInView>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
