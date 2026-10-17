import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import LocationTime from "./LocationTime";

const Hero = () => {
    return (
        <section id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-5 pt-32 pb-16 md:flex-row md:justify-between">
            {/* বাম পাশ: লেখা */}
            <div className="max-w-xl">
                <p className="font-mono text-sm text-violet-300">{"// HELLO, I'M"}</p>

                <h1 className="mt-3 bg-gradient-to-r from-white via-violet-300 to-violet-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-7xl">TOWFIQUL</h1>

                <h2 className="mt-4 text-2xl font-bold text-violet-300 sm:text-3xl">Frontend Developer</h2>

                <p className="mt-5 text-violet-200/70">
                    A passionate developer who loves turning ideas into real-world applications. I explore, learn, and build with a focus on impact, usability, and innovation.
                </p>

                {/* বাটন */}
                <div className="mt-8 flex flex-wrap gap-4">
                    <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white">
                        View My Work <FiArrowRight />
                    </a>
                    <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white">
                        <FiDownload /> Download Resume
                    </a>
                </div>

                {/* সোশ্যাল আইকন */}
                <div className="mt-8 flex gap-3">
                    <a href="https://github.com/Tamal-codes" target="_blank" className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-white">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/towfiqul-tamal/" target="_blank" className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-white">
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* লোকেশন আর সময়: লেখার নিচে */}
                <LocationTime />
            </div>

            {/* ডান পাশ: ছবি */}
            <div className="w-64 sm:w-80">
               
            </div>
        </section>
    );
};

export default Hero;