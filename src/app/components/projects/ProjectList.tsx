'use client';

import React, { ReactElement, useState } from 'react';
import clsx from 'clsx';

// Declare types for the project and the properties of the components
type Project = {
  header: string;
  message: string;
  svg: ReactElement;
};

type ProjectListProps = {
  projects: Project[];
};

interface FlipCardProps {
  project: Project;
  isFlipped: boolean;
  onFlip: () => void;
}

function ProjectList({ projects }: ProjectListProps) {
  // Use a state variable to track which card (if any) is flipped
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  // Handler for flipping a card, sets the flipped card to the given card header or unflips if it's already flipped
  const handleFlip = (header: string) => {
    setFlippedCard((flippedCard) => (flippedCard === header ? null : header));
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:h-[46rem]">
      <h1 className="md:text-5xl text-3xl font-bold text-slate-900">
        Mijn projecten
      </h1>
      <h3 className="md:text-1xl text-sm font-bold text-slate-700 mb-8">
        Klik op een tegel om meer te weten te komen!
      </h3>
      <div className="flex flex-wrap flex-row items-center justify-center">
        {/* Map over the projects and create a FlipCard for each one */}
        {projects.map((project) => (
          <FlipCard
            key={project.header}
            project={project}
            isFlipped={project.header === flippedCard}
            onFlip={() => handleFlip(project.header)}
          />
        ))}
      </div>
    </div>
  );
}

// The FlipCard component
function FlipCard({ project, isFlipped, onFlip }: FlipCardProps) {
  // Split the message by newline characters to create an array of paragraphs
  const messageParagraphs = project.message.split('\n');

  return (
    <div
      onClick={onFlip}
      className={clsx(
        'max-w-lg p-6 m-10 border-2 rounded-lg border-slate-500 shadow-2xl shadow-slate-500 bg-slate-200 cursor-pointer',
        isFlipped ? 'animate-fade-right animate-delay-200' : 'animate-fade-left animate-delay-200'
      )}
    >
      {/* Show the SVG if the card isn't flipped */}
      <div className={clsx('min-w-200 min-h-200', isFlipped ? 'hidden' : '')}>
        {project.svg}
      </div>
      {/* Show the project details if the card is flipped */}
      <div className={clsx('min-w-200 min-h-200', isFlipped ? '' : 'hidden')}>
        <h2 className="text-3xl font-bold text-slate-900">{project.header}</h2>
        {/* Map over the paragraphs in the message and create a paragraph element for each one */}
        {messageParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
