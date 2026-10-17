"use client";
import { useEffect, useState } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const navClass =
  "relative mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_40px_rgba(10,4,40,0.6)]";

const logoClass =
  "grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-400 shadow-[0_0_20px_rgba(139,92,246,0.6)]";

const connectClass =
  "hidden items-center gap-2 rounded-full border border-violet-500/70 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md shadow-[0_0_24px_rgba(124,58,237,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:bg-violet-500/25 md:flex";

const mobileMenuClass =
  "mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0d0926]/80 p-3 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] md:hidden";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className={navClass}>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent"
        />

        <a href="#home" className="flex items-center gap-2.5 text-lg font-bold text-white">
          <span className={logoClass}>T</span>
          TOWFIQUL
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition ${active === l.id ? "text-white" : "text-violet-200/60 hover:text-white"}`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-violet-300" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={connectClass}>
          Let&apos;s Connect <FiArrowRight />
        </a>

        <button
          className="text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {open && (
        <ul className={mobileMenuClass}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 ${active === l.id ? "bg-violet-500/15 text-white" : "text-violet-200/70"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;