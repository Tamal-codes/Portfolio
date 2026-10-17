import React from "react";
import Link from "next/link";

type Props = {
    project: { slug: string; name: string; image: string; tags: string[]; description: string };
};

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
            <img src={project.image} alt={project.name} className="h-48 w-full rounded-xl object-cover" />

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">{tag}</span>
                ))}
            </div>

            <h3 className="mt-4 text-xl font-bold text-white">{project.name}</h3>
            <p className="mt-2 text-sm text-violet-200/70">{project.description}</p>

            <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white">
                View More / Details
            </Link>
        </div>
    );
};

export default ProjectCard;