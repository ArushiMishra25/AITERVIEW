import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

function InterviewItemCard({ interview }) {
  const router = useRouter();
  const onStart = () => {
    router.push('/dashboard/interview/' + interview.mockId);
  };
  return (
    <div className="border shadow-sm p-3 rounded-lg">
      <h2 className="font-bold text-blue-500">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-gray-600">{interview?.jobExperience} Years of Experience</h2>
      <h2 className="text-xs text-gray-400">Created at: {interview?.createdAt}</h2>
      <div className="flex justify-between mt-2 gap-5">
        <Button
          onClick={() => router.push(`/dashboard/interview/${interview.mockId}/feedback`)}
          size="sm"
          variant="outline"
          className="w-full"
        >
          Feedback
        </Button>
        <Button onClick={onStart} className="w-full" size="sm">
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewItemCard;
