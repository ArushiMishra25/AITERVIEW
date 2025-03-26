import React from 'react';

const ShowQuestions = ({ questions }) => {
  return (
    <div className="mt-10">
      <div className="space-y-4">
        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">{questions}</h2>
          </summary>
        </details>
      </div>
    </div>
  );
};

export default ShowQuestions;
