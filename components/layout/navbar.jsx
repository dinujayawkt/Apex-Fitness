"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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

  const handleLogoClick = (event) => {
    event.preventDefault();
    const topSection = document.getElementById("top");

    if (topSection) {
      topSection.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#top");
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-(--line) bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-[8px]">
      <div className="container flex min-h-[5rem] items-center justify-between gap-4 max-[700px]:min-h-[4.4rem]">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Apex Fitness home"
          onClick={handleLogoClick}
        >
          <span className="aspect-square w-[1.9rem] rounded-full border-2 border-(--gold) bg-[radial-gradient(circle_at_30%_30%,var(--gold-soft),var(--gold))] shadow-[0_0_0_5px_color-mix(in_srgb,var(--gold)_16%,transparent)]" />
          <span>
            <strong className="block text-base tracking-[0.14em] text-(--gold)">APEX FITNESS</strong>
            <small className="block text-[0.65rem] tracking-[0.24em] text-(--muted)">
              SPORTS CENTER
            </small>
          </span>
        </a>

        <nav className="hidden gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.82rem] uppercase tracking-[0.14em] text-(--muted) transition-colors hover:text-(--gold)"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[0.6rem]">
          <ThemeToggle />
          <a href="#contact" className="btn btn--solid hidden min-h-[2.6rem] lg:inline-flex">
            Join Now
          </a>
          <button
            type="button"
            className="inline-flex min-h-[2.4rem] min-w-[2.4rem] items-center justify-center border border-(--line) bg-transparent text-(--text) lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-(--line) bg-(--panel)">
          <nav className="container flex flex-col gap-[0.85rem] py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.82rem] uppercase tracking-[0.12em]"
                onClick={() => setMenuOpen(false)}
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
