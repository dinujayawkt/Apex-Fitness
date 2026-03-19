"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeToggle from "../ui/theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Plans", href: "#plans" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { resolvedTheme, theme } = useTheme();
  const activeTheme = resolvedTheme || theme || "light";
  const isDark = activeTheme === "dark";
  const isPastFirstSection = activeSection !== "top";

  useEffect(() => {
    const updateActiveSection = () => {
      const sectionIds = ["top", ...navItems.map((item) => item.href.replace("#", ""))];
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section) => section !== null)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      if (!sections.length) {
        return;
      }

      const headerHeightRaw = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
        .trim();
      const headerHeight = Number.parseFloat(headerHeightRaw || "80") || 80;
      const marker = window.scrollY + headerHeight + 120;

      let nextActive = "top";
      sections.forEach((section) => {
        if (marker >= section.offsetTop - 1) {
          nextActive = section.id;
        }
      });

      setActiveSection(nextActive);
    };

    updateActiveSection();

    let rafId = null;
    const onScroll = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        updateActiveSection();
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const scrollToSection = (event, href) => {
    event.preventDefault();
    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    setActiveSection(sectionId);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    const topSection = document.getElementById("top");

    if (topSection) {
      topSection.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#top");
    }
  };

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isPastFirstSection
          ? isDark
            ? "bg-[#121212]/30 backdrop-blur-md border-b border-[color-mix(in_srgb,var(--mist)_18%,transparent)] shadow-[0_10px_30px_rgba(0,0,0,0.24)]"
            : "bg-white/30 backdrop-blur-md border-b border-[color-mix(in_srgb,var(--text)_12%,transparent)] shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
          : isDark
          ? "bg-[#121212]"
          : "bg-white"
      }`}
    >
      <div className="container flex min-h-20 items-center justify-between gap-3 max-[700px]:min-h-[4.4rem]">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2"
          aria-label="Apex Fitness home"
          onClick={handleLogoClick}
        >
          <Image
            src="/bodybuilding-emblem-and-gym-logo-design-template-free-vector%203.png"
            alt="Apex Fitness logo"
            width={56}
            height={56}
            className="h-[3.45rem] w-[3.45rem] object-contain max-[700px]:h-[2.85rem] max-[700px]:w-[2.85rem]"
            priority
          />
          <span className="min-w-0">
            <strong className="block truncate text-[0.92rem] font-bold tracking-[0.12em] text-(--gold) max-[420px]:text-[0.78rem]">APEX FITNESS</strong>
            <small
              className={`block text-[0.66rem] font-semibold tracking-[0.16em] max-[420px]:hidden ${
                isDark
                  ? "text-[color-mix(in_srgb,var(--mist)_70%,transparent)]"
                  : "text-[color-mix(in_srgb,var(--text)_46%,transparent)]"
              }`}
            >
              SPORTS CENTER
            </small>
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:mx-1 lg:flex xl:mx-12 xl:gap-14" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => scrollToSection(event, item.href)}
              className={`group relative text-[0.82rem] font-semibold uppercase tracking-[0.11em] transition-all duration-200 ${
                activeSection === item.href.replace("#", "")
                  ? "text-(--gold)"
                  : "text-[color-mix(in_srgb,var(--text)_84%,transparent)] hover:-translate-y-px hover:text-(--gold) dark:text-[color-mix(in_srgb,var(--mist)_78%,transparent)] dark:hover:text-(--gold-soft)"
              }`}
              aria-current={activeSection === item.href.replace("#", "") ? "page" : undefined}
            >
              {item.label}
              <span
                className={`absolute -bottom-2 left-0 h-0.5 bg-(--gold) transition-all duration-300 ${
                  activeSection === item.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5 min-[420px]:gap-3.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="btn btn--solid hidden h-10! min-h-10! min-w-[6.9rem]! rounded-full px-4! text-[0.76rem] min-[860px]:inline-flex min-[1024px]:min-w-[7.6rem]! min-[1024px]:px-6!"
          >
            Join Now
          </a>
          <button
            type="button"
            className="inline-flex min-h-[2.4rem] min-w-[2.4rem] items-center justify-center border border-(--line) bg-transparent text-(--text) dark:border-[color-mix(in_srgb,var(--mist)_44%,transparent)] dark:text-[color-mix(in_srgb,var(--mist)_88%,transparent)] lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`border-t border-(--line) ${isDark ? "bg-(--panel)" : "bg-white"}`}>
          <nav className="container flex flex-col gap-[0.85rem] py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[0.82rem] font-semibold uppercase tracking-widest transition-colors duration-200 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-(--gold)"
                    : "text-(--text) hover:text-(--gold)"
                }`}
                onClick={(event) => {
                  scrollToSection(event, item.href);
                  setMenuOpen(false);
                }}
                aria-current={activeSection === item.href.replace("#", "") ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn btn--solid" onClick={() => setMenuOpen(false)}>
              Join Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
