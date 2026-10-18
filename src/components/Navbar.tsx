"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const CONNECT_LINK = "https://www.linkedin.com/in/towfiqul-tamal/";

const navClass =
  "relative mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_40px_rgba(10,4,40,0.6)]";

const connectClass =
  "hidden items-center gap-2 rounded-full border border-violet-500/70 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md shadow-[0_0_24px_rgba(124,58,237,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:bg-violet-500/25 md:flex";

const mobileMenuClass =
  "mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0d0926]/80 p-3 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] md:hidden";

const mobileConnectClass =
  "mt-2 flex items-center justify-center gap-2 rounded-xl border border-violet-500/70 bg-violet-500/10 px-4 py-3 text-sm font-semibold text-white";

const underlineClass =
  "pointer-events-none absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-violet-300 transition-all duration-300 ease-out";

const logoBoxClass =
  "grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/15 bg-black shadow-[0_0_18px_rgba(139,92,246,0.45)]";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState("home");
  const [bar, setBar] = useState({ left: 0, width: 0, ready: false });

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const locked = useRef(false);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);


  const onDetails = pathname.startsWith("/projects");
  const active = onDetails ? "projects" : scrollActive;


  useEffect(() => {
    if (onDetails) return;

    const detect = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;
      if (atBottom) {
        setScrollActive(links[links.length - 1].id);
        return;
      }
      const line = window.innerHeight * 0.4;
      let current = links[0].id;
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setScrollActive(current);
    };

    const onScroll = () => {
  
      if (locked.current) {
        if (unlockTimer.current) clearTimeout(unlockTimer.current);
        unlockTimer.current = setTimeout(() => {
          locked.current = false;
          detect();
        }, 150);
        return;
      }
      detect();
    };

    
    const init = setTimeout(() => {
      // ঠিকানায় #projects এর মতো কিছু থাকলে সরাসরি সেটাই active
      const hash = window.location.hash.replace("#", "");
      if (hash && links.some((l) => l.id === hash)) {
        locked.current = true;
        setScrollActive(hash);
        unlockTimer.current = setTimeout(() => {
          locked.current = false;
          detect();
        }, 1200);
      } else {
        detect();
      }
    }, 0);

    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", detect);
    return () => {
      clearTimeout(init);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", detect);
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
    };
  }, [onDetails]);

  
  useEffect(() => {
    const measure = () => {
      const index = links.findIndex((l) => l.id === active);
      const el = itemRefs.current[index];
      if (el) {
        setBar({ left: el.offsetLeft + 16, width: el.offsetWidth - 32, ready: true });
      } else {
        setBar((b) => ({ ...b, ready: false }));
      }
    };
    const frame = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  const handleClick = (id: string) => {
    locked.current = true;
    setScrollActive(id);
    if (unlockTimer.current) clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      locked.current = false;
    }, 1200);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className={navClass}>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent"
        />

        <Link href="/#home" onClick={() => handleClick("home")} className="flex items-center gap-3 text-lg font-bold text-white">
          <span className={logoBoxClass}>
            <img src="/Logo.jpg" alt="TF logo" className="h-full w-full scale-[1.6] object-contain" />
          </span>
          TOWFIQUL
        </Link>

        <ul className="relative hidden items-center gap-1 md:flex">
          {links.map((l, i) => (
            <li
              key={l.id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
            >
              <Link
                href={`/#${l.id}`}
                onClick={() => handleClick(l.id)}
                className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${active === l.id ? "text-white" : "text-violet-200/60 hover:text-white"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}

         
          <span
            aria-hidden
            className={underlineClass}
            style={{ width: bar.width, transform: `translateX(${bar.left}px)`, opacity: bar.ready ? 1 : 0 }}
          />
        </ul>

        <a href={CONNECT_LINK} target="_blank" rel="noreferrer" className={connectClass}>
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
              <Link
                href={`/#${l.id}`}
                onClick={() => {
                  handleClick(l.id);
                  setOpen(false);
                }}
                className={`block rounded-xl px-4 py-3 ${active === l.id ? "bg-violet-500/15 text-white" : "text-violet-200/70"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={CONNECT_LINK} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className={mobileConnectClass}>
              Let&apos;s Connect <FiArrowRight />
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;