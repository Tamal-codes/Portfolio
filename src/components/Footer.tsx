import React from "react";
import Link from "next/link";
import { FiArrowUpRight, FiArrowRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
];

const otherPlaces = [
    { label: "GitHub", href: "https://github.com/Tamal-codes" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/towfiqul-tamal/" },
];

const linkRowClass = "flex items-center justify-between py-2 text-violet-200/70 transition hover:text-white";

const logoBoxClass = "grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/15 bg-black shadow-[0_0_18px_rgba(139,92,246,0.45)]";

const Footer = () => {
    return (
        <footer className="mx-auto max-w-6xl px-5 pb-8 pt-24">
       
            <div className="text-center">
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 font-mono text-xs text-violet-200/70">{" END OF THE JOURNEY"}</span>

                <h2 className="mt-6 text-5xl font-extrabold text-white sm:text-6xl">
                    Thanks for <span className="bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">Visiting!</span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-lg text-violet-200/70">
                    Let&apos;s build something amazing together. Stay curious, keep building, and I&apos;ll see you around the internet!
                </p>

                <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
            </div>

        
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
           
                <div>
                    <Link href="/#home" className="flex items-center gap-3 text-2xl font-bold text-white">
                        <span className={logoBoxClass}>
                            <img src="/Logo.jpg" alt="TF logo" className="h-full w-full scale-[1.6] object-contain" />
                        </span>
                        TOWFIQUL
                    </Link>

                    <p className="mt-4 text-violet-200/70">Building ideas into reality through code, creativity, and curiosity.</p>

                    <div className="mt-5 flex gap-3">
                        <a href="https://github.com/Tamal-codes" target="_blank" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-violet-500">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/towfiqul-tamal/" target="_blank" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-violet-500">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

         
                <div>
                    <h3 className="text-lg font-bold text-white">Quick Links</h3>
                    <div className="mt-3 flex flex-col">
                        {quickLinks.map((item) => (
                            <Link key={item.label} href={item.href} className={linkRowClass}>
                                {item.label} <FiArrowUpRight className="text-violet-300" />
                            </Link>
                        ))}
                    </div>
                </div>

           
                <div>
                    <h3 className="text-lg font-bold text-white">Other Places</h3>
                    <div className="mt-3 flex flex-col">
                        {otherPlaces.map((item) => (
                            <a key={item.label} href={item.href} target="_blank" className={linkRowClass}>
                                {item.label} <FiArrowUpRight className="text-violet-300" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white">Let&apos;s Connect</h3>
                    <p className="mt-3 text-violet-200/70">Open to collaborations, interesting projects, and exciting opportunities.</p>

                    <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-[0_0_24px_rgba(124,58,237,0.45)]">
                        <FiMail /> Send a Message <FiArrowRight />
                    </Link>
                </div>
            </div>

         
            <div className="mt-14 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm text-violet-200/60 backdrop-blur-xl md:flex-row">
                <p>© 2026 TOWFIQUL. All rights reserved.</p>
                <p className="font-mono text-xs tracking-widest">IDEAS × CODE × IMPACT</p>
                <p>Made with <span className="text-pink-400">♥</span> in Bangladesh</p>
            </div>
        </footer>
    );
};

export default Footer;