import React from "react";
import {
    FiCpu, FiCode, FiTarget, FiFeather, FiCompass, FiLayers, FiMonitor, FiMapPin,
    FiTrendingUp, FiHeart, FiZap, FiCheckCircle,
} from "react-icons/fi";

const infoCards = [
    { icon: FiMonitor, title: "Frontend Developer", sub: "My Role" },
    { icon: FiMapPin, title: "Chapainawabganj, Bangladesh", sub: "Based In" },
    { icon: FiCode, title: "React & Next.js", sub: "Main Tech Stack" },
];

const enjoyList = [
    { icon: FiCode, label: "Web Development" },
    { icon: FiCpu, label: "Learning New Technology" },
    { icon: FiTarget, label: "Problem Solving" },
    { icon: FiFeather, label: "Design & Creativity" },
    { icon: FiCompass, label: "Exploring Ideas" },
    { icon: FiLayers, label: "Building Real Projects" },
];


const storyCards = [
    {
        icon: FiCompass,
        label: "My Story",
        title: "Programming Journey",
        intro: "It all started with curiosity about how websites actually work. I began with HTML, CSS and JavaScript, and loved watching my code turn into something real on the screen.",
        extra: "From there I moved to React, Next.js and Tailwind CSS, and started building real projects like Dev-Stack, FIT-LOG and Market-Price. Every project taught me something new.",
        bullets: [] as string[],
        bulletIcon: FiZap,
        footer: "Learning something new every day",
    },
    {
        icon: FiTrendingUp,
        label: "Right Now",
        title: "What I'm Doing Now",
        intro: "These days I am focused on getting better at building complete, polished web applications:",
        extra: "",
        bullets: [
            "Building projects with React and Next.js",
            "Improving my TypeScript and problem-solving skills",
            "Exploring backend basics with Node.js and MongoDB",
            "Making my websites faster and more responsive",
        ],
        bulletIcon: FiCheckCircle,
        footer: "Frontend developer, always improving",
    },
    {
        icon: FiHeart,
        label: "Beyond the Code",
        title: "Hobbies & Interests",
        intro: "When I am not coding, these are the things I enjoy:",
        extra: "",
        bullets: [
            "Exploring new tools and tech stacks",
            "Watching tech videos and tutorials",
            "Listening to music",
            "Playing games with friends",
        ],
        bulletIcon: FiZap,
        footer: "Curious about everything",
    },
];

const glassCardClass = "rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition hover:border-violet-500/50";
const iconBoxClass = "grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-violet-500/30 bg-violet-500/15 text-xl text-violet-300";

const About = () => {
    return (
        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
        
            <div className="grid items-center gap-12 lg:grid-cols-2">
           
                <div>
                    <p className="font-mono text-sm text-violet-300">ABOUT ME</p>

                    <h2 className="mt-3 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
                        More than just a <span className="bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">developer.</span>
                    </h2>

                    <p className="mt-6 text-lg text-violet-200/70">
                        Hello! I&apos;m Towfiqul. My journey into programming started with pure curiosity about how the web works and a desire to build real, meaningful applications. What began as experimenting with fundamental code evolved into a full-blown passion for web development. Today, I specialize in crafting fast, responsive, and user-friendly web applications using React, Next.js, TypeScript, and Tailwind CSS.
                    </p>

                    
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {infoCards.map((card) => (
                            <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                                <span className="grid h-9 w-9 place-items-center rounded-lg bg-violet-500/20 text-violet-300">
                                    <card.icon />
                                </span>
                                <p className="mt-3 text-sm font-bold text-white">{card.title}</p>
                                <p className="mt-1 text-xs text-violet-200/60">{card.sub}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-2xl italic text-white">&ldquo;Turning curiosity into meaningful technology.&rdquo;</p>
                </div>

            
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
                    <h3 className="text-xl font-bold text-white">What I Enjoy</h3>

                    <div className="mt-5 flex flex-col gap-3">
                        {enjoyList.map((item) => (
                            <div key={item.label} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white">
                                <span className="text-violet-300">
                                    <item.icon />
                                </span>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

      
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
                {storyCards.map((card) => (
                    <div key={card.title} className={glassCardClass}>
                        <div className="flex items-center gap-4">
                            <span className={iconBoxClass}>
                                <card.icon />
                            </span>
                            <div>
                                <p className="font-mono text-xs uppercase tracking-wider text-violet-300">{card.label}</p>
                                <h3 className="mt-1 text-xl font-bold text-white">{card.title}</h3>
                            </div>
                        </div>

                        <p className="mt-5 text-sm leading-relaxed text-violet-100/80">{card.intro}</p>

                        {card.extra && <p className="mt-4 text-sm leading-relaxed text-violet-200/60">{card.extra}</p>}

                        {card.bullets.length > 0 && (
                            <ul className="mt-4 flex flex-col gap-3">
                                {card.bullets.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-violet-200/70">
                                        <card.bulletIcon className="mt-0.5 shrink-0 text-violet-300" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-violet-300">{card.footer}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;