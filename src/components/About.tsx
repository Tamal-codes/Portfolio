import { FiCpu, FiCode, FiTarget, FiFeather, FiCompass, FiLayers, FiMonitor, FiMapPin } from "react-icons/fi";

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

const About = () => {
    return (
        <section id="about" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
            {/* বাম পাশ */}
            <div>
                <p className="font-mono text-sm text-violet-300">{" ABOUT ME"}</p>

                <h2 className="mt-3 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
                    More than just a <span className="bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">developer.</span>
                </h2>

                <p className="mt-6 text-lg text-violet-200/70">
                  I'm Towfiqul, a web developer exploring React and Next.js to create fast, responsive, and user-friendly web experiences. I love solving problems, learning new technologies, and bringing ideas to life through code.
                </p>

                {/* তিনটা ছোট কার্ড */}
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

            {/* ডান পাশ: What I Enjoy */}
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
        </section>
    );
};

export default About;