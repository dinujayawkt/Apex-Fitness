"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const activeTheme = resolvedTheme || theme || "light";
  const isDark = activeTheme === "dark";

  return (
    <button
      type="button"
      className="relative inline-flex min-h-[2.5rem] appearance-none cursor-pointer items-center gap-[0.55rem] rounded-full border-0 bg-[#f3f3f3] px-[0.42rem] py-[0.28rem] text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-[#0a0a0a] shadow-none outline-none ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 dark:bg-[color-mix(in_srgb,var(--black)_24%,transparent)] dark:text-[color-mix(in_srgb,var(--mist)_92%,transparent)]"
      style={{
        border: isDark ? "1px solid #2f3138" : "none",
        outline: "none",
        boxShadow: "none",
        appearance: "none",
        WebkitAppearance: "none",
      }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="relative h-[1.62rem] w-[3.34rem] rounded-full bg-[#d7d7d7] dark:bg-[#ebe2e2]">
        <motion.span
          className="absolute top-[1px] left-[1px] grid h-[1.5rem] w-[1.5rem] place-items-center rounded-full bg-[#dcdcdc] text-(--black) dark:bg-[#d1caca]"
          animate={{ x: isDark ? 0 : 28 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        >
          {isDark ? <Moon size={12} /> : <Sun size={12} />}
        </motion.span>
      </span>
      <span
        className="pr-[0.35rem] max-[700px]:hidden"
        style={{
          color: isDark ? "rgb(223 223 221 / 0.92)" : "#000000",
          opacity: 1,
        }}
      >
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
