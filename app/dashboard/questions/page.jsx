'use client';
import { db } from '@/utils/db';
import { MockInterviewSchema } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import ShowQuestions from '../_components/ShowQuestions';

function Questions() {
  const { user } = useUser();
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    user && getInterviewList();
  }, [user]);
  const getInterviewList = async () => {
    const res = await db
      .select()
      .from(MockInterviewSchema)
      .where(eq(MockInterviewSchema.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(MockInterviewSchema.id));
    res.map((question) => setQuestionList(JSON.parse(question.jsonMockResponse)));
    // setQuestionList(ques);
  };
  const questionsArray = questionList?.map((item) => item.question);
  return (
    <div className="mt-20">
      <div>
        <h2 className="text-3xl text-primary font-bold">Prev Questions for Example</h2>
      </div>
      {questionsArray && questionsArray.map((questions, id) => <ShowQuestions questions={questions} key={id} />)}
    </div>
  );
}

export default Questions;
