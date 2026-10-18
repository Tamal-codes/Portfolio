import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import LocationTime from "./LocationTime";

const Hero = () => {
    return (
        <section id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-5 pt-32 pb-16 md:flex-row md:justify-between">
         
            <div className="max-w-xl">
                <p className="font-mono text-sm text-violet-300">{"// HELLO, I'M"}</p>

                <h1 className="mt-3 bg-gradient-to-r from-white via-violet-300 to-violet-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-7xl">TOWFIQUL</h1>

                <h2 className="mt-4 text-2xl font-bold text-violet-300 sm:text-3xl">Frontend Developer</h2>

                <p className="mt-5 text-violet-200/70">
                    A passionate developer who loves turning ideas into real-world applications. I explore, learn, and build with a focus on impact, usability, and innovation.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white">
                        View My Work <FiArrowRight />
                    </a>
                    <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white">
                        <FiDownload /> Download Resume
                    </button>
                </div>

             
                <div className="mt-8 flex gap-3">
                    <a href="https://github.com/Tamal-codes" target="_blank" className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-white">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/towfiqul-tamal/" target="_blank" className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-white">
                        <FaLinkedinIn />
                    </a>
                </div>

             
                <LocationTime />
            </div>

           
            <div className="relative">
             
                <div className="absolute -inset-6 -z-10 rounded-full bg-violet-600/40 blur-3xl" />

                
                <div className="rounded-full bg-gradient-to-br from-violet-400 via-violet-600 to-blue-500 p-1 shadow-[0_0_50px_rgba(124,58,237,0.5)]">
                    <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-[#05031a] sm:h-72 sm:w-72">
                        <img src="/profile.jpg" alt="Towfiqul" className="h-full w-full object-cover object-top" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;