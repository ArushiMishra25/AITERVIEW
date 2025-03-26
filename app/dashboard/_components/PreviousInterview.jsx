'use client';
import { db } from '@/utils/db';
import { MockInterviewSchema } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import InterviewItemCard from './InterviewItemCard';

function PreviousInterview() {
  const { user } = useUser();
  const [prevInterviewList, setPrevInterviewList] = useState([]);
  useEffect(() => {
    user && getInterviewList();
  }, [user]);
  const getInterviewList = async () => {
    const res = await db
      .select()
      .from(MockInterviewSchema)
      .where(eq(MockInterviewSchema.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(MockInterviewSchema.id));

    setPrevInterviewList(res);
  };
  return (
    prevInterviewList && (
      <div>
        <h2 className="font-bold text-xl">Previous Mock Interview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
          {prevInterviewList &&
            prevInterviewList.map((interview, id) => <InterviewItemCard key={id} interview={interview} />)}
        </div>
      </div>
    )
  );
}

export default PreviousInterview;
