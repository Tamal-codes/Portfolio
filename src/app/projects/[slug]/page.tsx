import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/Project";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}


async function ProjectContent({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <main className="mx-auto max-w-4xl px-5 pt-36 pb-24">
            <h1 className="mt-8 bg-gradient-to-r from-white via-violet-300 to-violet-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                {project.name}
            </h1>
            
            <div className="mt-8 flex justify-center rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-xl">
                <Image 
                    src={project.image} 
                    alt={project.name} 
                    width={800} 
                    height={400} 
                    className="max-h-72 w-auto max-w-full rounded-xl object-contain" 
                    priority 
                />
            </div>

         
            <div className="mt-6 flex flex-wrap gap-4">
                <a href={project.liveLink} target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white">
                    <FiExternalLink /> Live Project
                </a>
                <a href={project.githubLink} target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white">
                    <FaGithub /> GitHub (Client)
                </a>
            </div>

        
            <h2 className="mt-12 text-2xl font-bold text-white">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white">{tech}</span>
                ))}
            </div>

      
            <h2 className="mt-12 text-2xl font-bold text-white">About This Project</h2>
            <p className="mt-4 text-violet-200/70">{project.details}</p>

         
            <h2 className="mt-12 text-2xl font-bold text-white">Challenges Faced</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-violet-200/70">
                {project.challenges.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

        
            <h2 className="mt-12 text-2xl font-bold text-white">Future Plans</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-violet-200/70">
                {project.futurePlans.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

       
            <div className="mt-16 flex justify-center">
                <Link href="/#projects" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-violet-500">
                    <FiArrowLeft /> Back to Projects
                </Link>
            </div>
        </main>
    );
}

export default function ProjectDetails({ params }: PageProps) {
    return (
        <Suspense fallback={<div className="text-center pt-48 text-white">Loading project details...</div>}>
            <ProjectContent params={params} />
        </Suspense>
    );
}