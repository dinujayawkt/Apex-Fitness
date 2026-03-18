"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const activeTheme = resolvedTheme || theme || "dark";
  const isDark = activeTheme === "dark";

  return (
    <button
      type="button"
      className="inline-flex min-h-[2.35rem] cursor-pointer items-center justify-center gap-[0.45rem] rounded-full border border-(--line) bg-transparent px-[0.8rem] py-[0.35rem] text-[0.7rem] uppercase tracking-[0.08em] text-(--text)"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="max-[700px]:hidden">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
