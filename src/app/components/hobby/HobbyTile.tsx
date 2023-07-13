'use client';

import React, { ReactElement, useState, useEffect } from 'react';
import clsx from 'clsx';

// Declare types for the hobby and the properties of the components
type Hobby = {
  header: string;
  svg: ReactElement;
};

type HobbyListProps = {
  hobbies: Hobby[];
};

interface FlipCardProps {
  hobby: Hobby;
  isFlipped: boolean;
}

function HobbyList({ hobbies }: HobbyListProps) {
  // Use a state variable to track which card (if any) is flipped
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  useEffect(() => {
    const flipRandomCard = () => {
      const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
      setFlippedCard(randomHobby.header);
    };

    // Randomly flip a card every 5 seconds
    const intervalId = setInterval(flipRandomCard, 3000);

    return () => {
      // Clean up the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, [hobbies]);

  return (
    <div className="w-full sm:px-6 md:px-40 flex flex-col items-center h-96 justify-center bg-black/40 py-5">
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
        Mijn hobbies
      </h1>
      <div className="flex flex-wrap flex-row items-center justify-center">
        {/* Map over the hobbies and create a FlipCard for each one */}
        {hobbies.map((hobby) => (
          <FlipCard
            key={hobby.header}
            hobby={hobby}
            isFlipped={hobby.header === flippedCard}
          />
        ))}
      </div>
    </div>
  );
}

// The FlipCard component
function FlipCard({ hobby, isFlipped }: FlipCardProps) {
  return (
    <div
      className={clsx(
        'max-w-lg p-6 m-10 border-2 rounded-lg border-slate-500 shadow-2xl shadow-slate-500 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 background-animate',
        isFlipped ? 'animate-fade-right' : 'animate-fade-left'
      )}
    >
      {/* Show the SVG if the card isn't flipped */}
      <div className={clsx('min-w-200 min-h-200', isFlipped ? 'hidden' : '')}>
        {hobby.svg}
      </div>
      {/* Show the hobby header if the card is flipped */}
      <div className={clsx('min-w-200 min-h-200', isFlipped ? '' : 'hidden')}>
        <h2 className="text-3xl font-bold text-slate-900">{hobby.header}</h2>
      </div>
    </div>
  );
}

export default HobbyList;
