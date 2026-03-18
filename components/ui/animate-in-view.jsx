"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimateInView({
  children,
  delay = 0,
  y = 24,
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
