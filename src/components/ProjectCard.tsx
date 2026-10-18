import React from "react";
import Link from "next/link";
import { FiInfo, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

type Props = {
    project: {
        slug: string;
        name: string;
        image: string;
        tags: string[];
        description: string;
        liveLink: string;
        githubLink: string;
        contain?: boolean;
    };
    index: number;
};

const ProjectCard = ({ project, index }: Props) => {

    const reversed = index % 2 === 1;

    return (
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
         
            <Link
                href={`/projects/${project.slug}`}
                className={`group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl ${reversed ? "md:order-2" : ""}`}
            >
                <Image
                    src={project.image}
                    alt={project.name}
                    width={1200}
                    height={800}
                    quality={100}
                    className={`h-64 w-full sm:h-72 ${project.contain ? "object-contain p-3" : "object-cover"}`}
                />
                <span className="pointer-events-none absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                        <FiInfo /> Click for full details
                    </span>
                </span>
            </Link>

     
            <div>
                <h3 className="text-3xl font-extrabold text-white sm:text-4xl">{project.name}</h3>
                <p className="mt-4 text-lg text-violet-200/70">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white">{tag}</span>
                    ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                        <FiInfo /> View More / Details
                    </Link>
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-violet-500/50 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500/25">
                        Live Demo <FiExternalLink />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-violet-500">
                        <FaGithub /> Source Code <FiExternalLink />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;