"use client";
import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";

const EMAIL = "tohidulislamtamal@gmail.com";

const contactCards = [
    { icon: FiMail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: FiPhone, label: "Phone", value: "01780319876", href: "tel:+8801780319876" },
    { icon: FaWhatsapp, label: "WhatsApp", value: "01780319876", href: "https://wa.me/8801780319876" },
    { icon: FiMapPin, label: "Location", value: "Chapainawabganj, Bangladesh", href: "#contact" },
];

const subjects = ["Job Opportunity", "Freelance Project", "Collaboration", "Just Saying Hi"];

const inputClass = "mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-violet-200/40 focus:border-violet-500 focus:outline-none";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // ফর্ম সাবমিট করলে ইমেইল অ্যাপ খুলবে, মেসেজ আগে থেকে লেখা থাকবে
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
            <div className="grid items-start gap-12 lg:grid-cols-2">
                {/* বাম পাশ */}
                <div>
                    <p className="font-mono text-sm text-violet-300">{"// 04. CONTACT"}</p>

                    <h2 className="mt-3 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
                        Let&apos;s Build Something Amazing <span className="bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">Together.</span>
                    </h2>

                    <p className="mt-6 text-lg text-violet-200/70">
                        Have a project idea, collaboration opportunity, or just want to connect? I&apos;d love to hear from you.
                    </p>

                    {/* কন্টাক্ট কার্ড */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {contactCards.map((card) => (
                            <a key={card.label} href={card.href} target="_blank" className="relative flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition hover:border-violet-500/60">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-600 text-lg text-white">
                                    <card.icon />
                                </span>
                                <div className="min-w-0">
                                    <p className="font-bold text-white">{card.label}</p>
                                    <p className="mt-1 break-words text-sm text-violet-200/70">{card.value}</p>
                                </div>
                                <FiArrowUpRight className="absolute right-3 top-3 text-violet-200/50" />
                            </a>
                        ))}
                    </div>

                    <p className="mt-10 text-2xl italic text-white">&ldquo;Let&apos;s turn ideas into reality.&rdquo;</p>
                    <p className="mt-2 text-sm text-violet-200/60">— TOWFIQUL</p>
                </div>

                {/* ডান পাশ: ফর্ম */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl sm:p-8">
                    <p className="font-mono text-sm text-violet-300">{"// SEND A MESSAGE"}</p>

                    <h3 className="mt-3 text-4xl font-extrabold text-white">
                        I&apos;m all <span className="bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">ears!</span>
                    </h3>

                    <p className="mt-3 text-sm text-violet-200/70">Fill out the form below and I&apos;ll get back to you as soon as possible.</p>

                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="text-sm font-medium text-white">
                                Your Name
                                <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                            </label>
                            <label className="text-sm font-medium text-white">
                                Your Email
                                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                            </label>
                        </div>

                        <label className="mt-4 block text-sm font-medium text-white">
                            Subject
                            <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                                {subjects.map((s) => (
                                    <option key={s} value={s} className="bg-[#0d0926]">{s}</option>
                                ))}
                            </select>
                        </label>

                        <label className="mt-4 block text-sm font-medium text-white">
                            Message
                            <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell me about your idea, project, or just say hi!" className={inputClass} />
                        </label>

                        <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3.5 font-semibold text-white shadow-[0_0_24px_rgba(124,58,237,0.45)]">
                            <FiSend /> Send Message <FiArrowRight />
                        </button>
                    </form>
                </div>
            </div>

            {/* নিচের সোশ্যাল বাটন */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
                <a href="https://github.com/Tamal-codes" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-violet-500">
                    <FaGithub /> GitHub <FiArrowRight />
                </a>
                <a href="https://www.linkedin.com/in/towfiqul-tamal/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-violet-500">
                    <FaLinkedinIn /> LinkedIn <FiArrowRight />
                </a>
            </div>
        </section>
    );
};

export default Contact;