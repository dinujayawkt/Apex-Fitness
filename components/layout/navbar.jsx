"use client";

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
      className={`sticky top-0 z-30 ${
        isDark
          ? "bg-[#121212]"
          : "bg-white"
      }`}
    >
      <div className="container flex min-h-[5rem] items-center justify-between gap-4 max-[700px]:min-h-[4.4rem]">
        <a
          href="#top"
          className="flex items-center gap-3 ml-[-92px]"
          aria-label="Apex Fitness home"
          onClick={handleLogoClick}
        >
          <span
            className={`aspect-square w-[2rem] rounded-full border-2 border-(--gold) bg-[radial-gradient(circle_at_30%_30%,var(--gold-soft),var(--gold))] ${
              isDark
                ? "shadow-[0_0_0_5px_color-mix(in_srgb,var(--gold)_16%,transparent)]"
                : "shadow-[0_0_0_5px_color-mix(in_srgb,var(--gold)_24%,transparent)]"
            }`}
          />
          <span>
            <strong className="block text-base font-bold tracking-[0.14em] text-(--gold)">APEX FITNESS</strong>
            <small
              className={`block text-[0.72rem] font-semibold tracking-[0.2em] ${
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
                  : "text-[color-mix(in_srgb,var(--text)_84%,transparent)] hover:-translate-y-[1px] hover:text-(--gold) dark:text-[color-mix(in_srgb,var(--mist)_78%,transparent)] dark:hover:text-(--gold-soft)"
              }`}
              aria-current={activeSection === item.href.replace("#", "") ? "page" : undefined}
            >
              {item.label}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-(--gold) transition-all duration-300 ${
                  activeSection === item.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[1rem] mr-[-102px]">
          <ThemeToggle />
          <a href="#contact" className="btn btn--solid hidden min-h-[2.6rem] lg:inline-flex">
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
                className={`text-[0.82rem] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${
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
