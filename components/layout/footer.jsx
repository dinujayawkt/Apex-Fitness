export default function Footer() {
  return (
    <footer
      className="border-t border-[color-mix(in_srgb,#ffffff_18%,transparent)] bg-[#14181f] py-[1.3rem] pb-[1.6rem]"
      style={{ color: "#f2f2f2" }}
    >
      <div className="container flex flex-wrap items-center justify-between gap-4">
        <a
          href="#top"
          className="m-0 text-[0.82rem] font-bold tracking-[0.13em] text-(--gold) transition-opacity hover:opacity-85"
        >
          APEX FITNESS
        </a>
        <a
          href="#contact"
          className="m-0 text-[0.86rem] font-medium transition-colors hover:text-white"
          style={{ color: "#f2f2f2", opacity: 0.96 }}
        >
          © 2026 Apex Fitness Sports Center. All rights reserved.
        </a>
        <div className="flex gap-4">
          <a
            href="#about"
            className="text-[0.76rem] font-medium uppercase tracking-widest transition-colors hover:text-white"
            style={{ color: "#f2f2f2", opacity: 0.96 }}
          >
            About
          </a>
          <a
            href="#services"
            className="text-[0.76rem] font-medium uppercase tracking-widest transition-colors hover:text-white"
            style={{ color: "#f2f2f2", opacity: 0.96 }}
          >
            Services
          </a>
          <a
            href="#plans"
            className="text-[0.76rem] font-medium uppercase tracking-widest transition-colors hover:text-white"
            style={{ color: "#f2f2f2", opacity: 0.96 }}
          >
            Plans
          </a>
          <a
            href="#contact"
            className="text-[0.76rem] font-medium uppercase tracking-widest transition-colors hover:text-white"
            style={{ color: "#f2f2f2", opacity: 0.96 }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
