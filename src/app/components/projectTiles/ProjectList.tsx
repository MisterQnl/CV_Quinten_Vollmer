'use client';

import React, { ReactElement, useState } from 'react';
import clsx from 'clsx';

type Project = {
  header: string;
  message: string;
  svg: ReactElement;
};

type FlipCardProps = {
  project: Project;
};

type ProjectListProps = {
  projects: Project[];
};

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 h-[46rem]">
      <h1 className="text-5xl font-bold text-slate-900">Mijn projecten</h1>
      <h3 className="text-1xl font-bold text-slate-700 mb-8">
        Klik op een tegel om meer te weten te komen!
      </h3>
      <div className="flex flex-row items-center justify-center">
        {projects.map((project, index) => (
          <FlipCard key={project.header} project={project} />
        ))}
      </div>
    </div>
  );
}

function FlipCard({ project }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className={clsx(
        'max-w-lg p-6 m-10 border-2 rounded-lg border-slate-500 shadow-2xl shadow-slate-500 bg-slate-200 cursor-pointer',
        !isFlipped ? '' : 'animate-rotate-y animate-once animate-delay-200'
      )}
    >
      <div className={clsx('min-w-200 min-h-200', isFlipped ? 'hidden' : '')}>
        {project.svg}
      </div>
      <div className={clsx('min-w-200 min-h-200', isFlipped ? '' : 'hidden')}>
        <h2 className="text-3xl font-bold text-slate-900">
          {' '}
          {project.header}{' '}
        </h2>
        <p className="mb-4">{project.message}</p>
      </div>
    </div>
  );
}

export default ProjectList;
