'use client'

import React, {useState} from 'react';
import clsx from 'clsx';

type Project = {
    header: string;
    message: string;
};

type FlipCardProps = {
    project: Project;
};

type ProjectListProps = {
    projects: Project[];
};

function ProjectList({projects}: ProjectListProps) {
    return (
        <div className="flex flex-row items-center content-center justify-center p-6">
            <h1 className="text-5xl font-bold text-slate-900">Mijn projecten</h1>
            {projects.map((project, index) => (
                <FlipCard key={project.header} project={project}/>
            ))}
        </div>
    );
}

function FlipCard({ project }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={clsx(
                "transform transition-transform duration-500 ease-in-out max-w-lg p-6 m-10 border-2 rounded-lg border-slate-500 shadow-2xl shadow-slate-500 bg-slate-200",
                isFlipped ? "rotate-y-180" : "",
                "min-w-200 min-h-200"
            )}
        >
            <div className={clsx("min-w-200 min-h-200", isFlipped ? "hidden" : "")}>
                {/* Insert your SVG here */}
                <h2 className="text-3xl font-bold text-slate-900"> {project.header} </h2>
            </div>
            <div className={clsx("min-w-200 min-h-200", isFlipped ? "" : "hidden")}>
                <p className="mb-4">
                    {project.message}
                </p>
            </div>
        </div>
    );
}


export default ProjectList;
