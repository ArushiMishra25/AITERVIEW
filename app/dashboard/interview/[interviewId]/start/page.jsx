'use client';
import QuestionSection from '@/app/dashboard/_components/QuestionSection';
import RecordSection from '@/app/dashboard/_components/RecordSection';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterviewSchema } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [interviewQuestion, setInterviewQuestion] = useState();
  const [activeQuestionId, setActiveQuestionId] = useState(0);
  useEffect(() => {
    getInterviewDetails();
  }, []);
  const getInterviewDetails = async () => {
    const res = await db.select().from(MockInterviewSchema).where(eq(MockInterviewSchema.mockId, params.interviewId));
    const mockResponse = JSON.parse(res[0].jsonMockResponse);

    setInterviewQuestion(mockResponse);
    setInterviewData(res[0]);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
        {/* //questions  */}
        <QuestionSection activeQuestionId={activeQuestionId} interviewQuestion={interviewQuestion} />

        {/* //audio recording  */}
        <RecordSection
          interviewData={interviewData}
          activeQuestionId={activeQuestionId}
          interviewQuestion={interviewQuestion}
        />
      </div>
      <div className="flex justify-end gap-6">
        {activeQuestionId > 0 && (
          <Button onClick={() => setActiveQuestionId(activeQuestionId - 1)}>
            <MoveLeftIcon className="mr-1" /> Previous Question
          </Button>
        )}
        {activeQuestionId !== interviewQuestion?.length - 1 && (
          <Button onClick={() => setActiveQuestionId(activeQuestionId + 1)}>
            Next Question <MoveRightIcon className="ml-1" />
          </Button>
        )}
        {activeQuestionId === interviewQuestion?.length - 1 && (
          <Link href={'/dashboard/interview/' + interviewData?.mockId + '/feedback'}>
            <Button>End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default StartInterview;
