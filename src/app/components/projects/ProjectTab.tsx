'use client';

import React, { ReactElement, useState } from 'react';

type Project = {
  header: string;
  message: string;
  svg: ReactElement;
};

type ProjectTabsProps = {
  projects: Project[];
};

const ProjectTabs: React.FC<ProjectTabsProps> = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(projects[0].header);

  return (
    <div className="flex flex-col items-center md:h-[40rem]">
      <h1 className="md:text-5xl text-3xl font-bold text-slate-900 p-6">
        Mijn projecten
      </h1>
      <div className="lg:max-w-4xl mx-auto flex md:flex-row">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 border-r md:border-r-2 border-gray-200 flex flex-col justify-start">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center md:flex-col"
            role="tablist"
          >
            {projects.map((project) => (
              <li
                key={project.header}
                className="mr-2 md:mr-0 mb-2"
                role="presentation"
              >
                <button
                  onClick={() => setActiveProject(project.header)}
                  className={`inline-flex p-4 border-b-2 md:border-b-0 md:border-r-2 rounded-t-lg justify-end items-center ${
                    activeProject === project.header
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300'
                  }`}
                  role="tab"
                  aria-controls={project.header}
                  aria-selected={activeProject === project.header}
                >
                  {project.svg}
                  <span className="ml-2">{project.header}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4 p-4">
          {projects.map((project) => {
            const messageParagraphs = project.message.split('\n');
            return (
              <div
                key={project.header}
                className={`p-4 rounded-lg bg-gray-50 ${
                  activeProject === project.header ? 'block' : 'hidden'
                }`}
                role="tabpanel"
                aria-labelledby={`${project.header}-tab`}
              >
                <h1 className="text-2xl mb-4 font-bold">{project.header}</h1>
                {messageParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-base text-gray-500 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
