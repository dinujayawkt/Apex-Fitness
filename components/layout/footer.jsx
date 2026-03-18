export default function Footer() {
  return (
    <footer className="border-t border-(--line) bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] py-[1.3rem] pb-[1.6rem]">
      <div className="container flex flex-wrap items-center justify-between gap-4">
        <p className="m-0 text-[0.82rem] font-bold tracking-[0.13em] text-(--gold)!">APEX FITNESS</p>
        <p className="m-0 text-[0.82rem]" style={{ color: "var(--muted)" }}>
          © 2026 Apex Fitness Sports Center. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#about" className="text-[0.72rem] uppercase tracking-widest" style={{ color: "var(--muted)" }}>
            About
          </a>
          <a
            href="#services"
            className="text-[0.72rem] uppercase tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            Services
          </a>
          <a href="#plans" className="text-[0.72rem] uppercase tracking-widest" style={{ color: "var(--muted)" }}>
            Plans
          </a>
          <a
            href="#contact"
            className="text-[0.72rem] uppercase tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
