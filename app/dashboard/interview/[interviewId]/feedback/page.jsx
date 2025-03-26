'use client';
import { db } from '@/utils/db';
import { UserAnswerSchema } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [overallRating, setOverallRating] = useState(0);

  useEffect(() => {
    getFeedback();
    getOverAllRating();
  }, [feedbackList.length]);
  const router = useRouter();

  const getOverAllRating = () => {
    if (feedbackList.length > 0) {
      const ratingCalculate = feedbackList?.map((feedback) => parseInt(feedback.rating));
      let sum = 0;
      for (let i = 0; i < ratingCalculate.length; i++) {
        sum += ratingCalculate[i];
      }
      let avgRating = sum / ratingCalculate.length;
      setOverallRating(avgRating);
    }
  };

  const getFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswerSchema)
      .where(eq(UserAnswerSchema.mockIdRef, params.interviewId))
      .orderBy(UserAnswerSchema.id);
    // console.log(result);
    setFeedbackList(result);
  };

  return (
    <div className="p-10">
      {feedbackList.length === 0 ? (
        <h2 className="font-bold text-xl text-gray-500">No interview Feedback found</h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">Congratulations !!</h2>
          <h2 className="font-bold text-2xl">Here is your Mock Interview Feedback</h2>
          <h2 className="text-blue-500 text-lg my-3">
            Your overall Mock interview rating : <strong>{overallRating}/10</strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Find Below Interview questions with answers, also there are feedbacks for every answer for your improvement
          </h2>
          {feedbackList &&
            feedbackList.map((feedback, id) => (
              <Collapsible className="mt-7" key={id}>
                <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 items-center w-full font-semibold">
                  {feedback.question} <ChevronsUpDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating: </strong>
                      {feedback.rating}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                      <strong>Your answer: </strong>
                      {feedback.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                      <strong>Correct answer: </strong>
                      {feedback.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-700">
                      <strong>Feedback: </strong>
                      {feedback.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}

      <Button onClick={() => router.replace('/dashboard')}>Go Home</Button>
    </div>
  );
}

export default Feedback;
