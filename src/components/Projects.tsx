import React from "react";
import { projects } from "@/data/Project";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
            <div className="text-center">
                <p className="font-mono text-sm text-violet-300">{" PROJECTS"}</p>

                <h2 className="mt-3 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
                    Projects that solve <span className="bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">real problems.</span>
                </h2>

                <p className="mt-5 text-lg text-violet-200/70">A blend of creativity, technology and purpose.</p>
            </div>

            <div className="mt-16 flex flex-col gap-20">
                {projects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;