import React from 'react';
import Card from './Card';

function HowItWork() {
  return (
    <div id="howItWork" className="px-10 py-10">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold sm:text-4xl">How it Works</h2>

        <p className="mt-4 text-gray-400">
          Experience a seamless AI-driven mock interview process. Register, set up your interview, and use
          speech-to-text technology to interact with AI-generated questions. Receive instant feedback and a detailed
          rating to refine your skills and boost your confidence.
        </p>
      </div>
      <div className="mt-20">
        <Card />
      </div>
    </div>
  );
}

export default HowItWork;
