import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
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
  { icon: FaReact, color: "text-cyan-300", angle: 0 },
  { icon: FaJs, color: "text-yellow-300", angle: 60 },
  { icon: SiExpress, color: "text-gray-300", angle: 120 },
  { icon: SiNextdotjs, color: "text-white", angle: 180 },
  { icon: SiMongodb, color: "text-green-500", angle: 240 },
  { icon: SiTailwindcss, color: "text-cyan-400", angle: 300 },
];

const stats = [
  { value: "8+", label: "Technologies" },
  { value: "3+", label: "Projects" },
  { value: "Always", label: "Learning" },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
   
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterSpinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-orbit {
          animation: spinSlow 22s linear infinite;
        }
        .animate-spin-counter {
          animation: counterSpinSlow 22s linear infinite;
        }
      `}</style>

      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
     
          <div className="relative mx-auto h-80 w-80">
      
            <div className="absolute inset-8 z-10 grid place-items-center rounded-full border border-violet-500/30 bg-gradient-to-br from-violet-600/30 to-transparent text-center text-xl font-semibold leading-snug text-white shadow-[0_0_80px_rgba(124,58,237,0.35)]">
              <span>Build<br />Learn<br />Improve<br />Repeat</span>
            </div>

     
            <div className="absolute inset-0 animate-spin-orbit rounded-full">
              {floatingIcons.map((item, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-14 w-14 -ml-7 -mt-7"
                  style={{
                    transform: `rotate(${item.angle}deg) translate(135px) rotate(-${item.angle}deg)`,
                  }}
                >
                  <span className={`animate-spin-counter grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl backdrop-blur-xl ${item.color}`}>
                    <item.icon />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white backdrop-blur-xl">
            <p>Tools are important,<br />but curiosity builds better developers.</p>
            <span className="mt-3 block h-0.5 w-8 rounded-full bg-violet-400" />
          </div>
        </div>

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