import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/Project";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

const ProjectDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <main className="mx-auto max-w-4xl px-5 pt-36 pb-24">
        

            {/* নাম আর ছবি */}
            <h1 className="mt-8 bg-gradient-to-r from-white via-violet-300 to-violet-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">{project.name}</h1>
            <img src={project.image} alt={project.name} className="mt-8 w-full rounded-2xl border border-white/10 object-cover" />

            {/* বাটন */}
            <div className="mt-6 flex flex-wrap gap-4">
                <a href={project.liveLink} target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white">
                    <FiExternalLink /> Live Project
                </a>
                <a href={project.githubLink} target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white">
                    <FaGithub /> GitHub (Client)
                </a>
            </div>

            {/* টেক স্ট্যাক */}
            <h2 className="mt-12 text-2xl font-bold text-white">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white">{tech}</span>
                ))}
            </div>

            {/* বর্ণনা */}
            <h2 className="mt-12 text-2xl font-bold text-white">About This Project</h2>
            <p className="mt-4 text-violet-200/70">{project.details}</p>

            {/* চ্যালেঞ্জ */}
            <h2 className="mt-12 text-2xl font-bold text-white">Challenges Faced</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-violet-200/70">
                {project.challenges.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            {/* ভবিষ্যৎ পরিকল্পনা */}
            <h2 className="mt-12 text-2xl font-bold text-white">Future Plans</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-violet-200/70">
                {project.futurePlans.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            {/* নিচে আরেকটা Back বাটন */}
            <div className="mt-16 flex justify-center">
                <Link href="/#projects" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-violet-500">
                    <FiArrowLeft /> Back to Projects
                </Link>
            </div>
        </main>
    );
};

export default ProjectDetails;