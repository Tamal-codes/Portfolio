import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FiZap } from "react-icons/fi";

const skills = [
    { icon: FaHtml5, color: "text-orange-400", name: "HTML", level: 90, category: "Frontend" },
    { icon: FaCss3Alt, color: "text-blue-400", name: "CSS", level: 85, category: "Frontend" },
    { icon: FaJs, color: "text-yellow-300", name: "JavaScript", level: 80, category: "Programming" },
    { icon: FaReact, color: "text-cyan-300", name: "React", level: 75, category: "Frontend" },
    { icon: SiNextdotjs, color: "text-white", name: "Next.js", level: 70, category: "Frontend" },
    { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind CSS", level: 85, category: "Frontend" },
];

const floatingIcons = [
    { icon: FaReact, color: "text-cyan-300", pos: "left-8 top-0" },
    { icon: FaJs, color: "text-yellow-300", pos: "right-4 top-10" },
    { icon: SiTailwindcss, color: "text-cyan-400", pos: "left-0 bottom-16" },
    { icon: SiNextdotjs, color: "text-white", pos: "right-10 bottom-4" },
];

const stats = [
    { value: "6+", label: "Technologies" },
    { value: "3+", label: "Projects" },
    { value: "Always", label: "Learning" },
];

const Skills = () => {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                {/* বাম পাশ: গ্লোব আর আইকন */}
                <div>
                    <div className="relative mx-auto h-80 w-80">
                        <div className="absolute inset-8 grid place-items-center rounded-full border border-violet-500/30 bg-gradient-to-br from-violet-600/30 to-transparent text-center text-xl font-semibold leading-snug text-white shadow-[0_0_80px_rgba(124,58,237,0.35)]">
                            <span>Build<br />Learn<br />Improve<br />Repeat</span>
                        </div>

                        {floatingIcons.map((item, i) => (
                            <span key={i} className={`absolute grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-3xl backdrop-blur-xl ${item.color} ${item.pos}`}>
                                <item.icon />
                            </span>
                        ))}
                    </div>

                    {/* কোট কার্ড */}
                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white backdrop-blur-xl">
                        <p>Tools are important,<br />but curiosity builds better developers.</p>
                        <span className="mt-3 block h-0.5 w-8 rounded-full bg-violet-400" />
                    </div>
                </div>

                {/* ডান পাশ: হেডিং আর কার্ড */}
                <div>
                    <div className="text-center lg:text-left">
                        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/50 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-white">
                            <FiZap className="text-violet-300" /> My Toolbox
                        </span>

                        <h2 className="mt-5 text-6xl font-extrabold leading-tight text-white sm:text-7xl">
                            My <span className="bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">Skills</span>
                        </h2>

                        <p className="mt-4 text-lg text-violet-200/70">A curated set of technologies I use to turn ideas into reality.</p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {skills.map((skill) => (
                            <div key={skill.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-violet-500/60">
                                <span className={`text-3xl ${skill.color}`}>
                                    <skill.icon />
                                </span>

                                <div className="mt-4 flex items-center justify-between text-white">
                                    <span className="font-bold">{skill.name}</span>
                                    <span className="text-xs text-violet-300">{skill.level}%</span>
                                </div>

                                <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                                    <div className="h-1.5 rounded-full bg-gradient-to-r from-violet-600 to-violet-300" style={{ width: `${skill.level}%` }} />
                                </div>

                                <p className="mt-3 text-xs text-violet-200/60">{skill.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* নিচের পরিসংখ্যান বার */}
            <div className="mt-12 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] py-5 text-center backdrop-blur-xl">
                {stats.map((s) => (
                    <div key={s.label}>
                        <p className="text-2xl font-extrabold text-white">{s.value}</p>
                        <p className="text-xs text-violet-200/60">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;