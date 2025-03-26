'use client';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterviewSchema } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  useEffect(() => {
    getInterviewDetails();
  }, []);
  const getInterviewDetails = async () => {
    const res = await db.select().from(MockInterviewSchema).where(eq(MockInterviewSchema.mockId, params.interviewId));
    setInterviewData(res[0]);
  };
  return (
    interviewData && (
      <div className="my-10 ">
        <h2 className="font-bold text-2xl">Let's get started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="flex flex-col my-5 gap-5 ">
            <div className=" flex flex-col p-5 rounded-lg border my-4">
              <h2 className="text-lg">
                <strong>Job Role/Job Position:</strong> {interviewData?.jobPosition}
              </h2>
              <h2 className="text-lg">
                <strong>Job Description/Tech Stack:</strong> {interviewData?.jobDesc}
              </h2>
              <h2 className="text-lg">
                <strong>Years of Experience:</strong> {interviewData?.jobExperience}
              </h2>
            </div>
            <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
              <h2 className="flex gap-2 items-center text-yellow-500">
                <Lightbulb /> <strong>Information</strong>
              </h2>
              <h2 className="mt-3 text-yellow-600">
                Please ensure that your webcam and microphone are on and functioning properly throughout the session.
                It's important for us to see and hear you clearly, as this will help us assess your communication
                skills, including your non-verbal cues like facial expressions and body language. Make sure you're in a
                quiet environment where you can speak audibly without interruptions. This session will be as close to a
                real interview experience as possible, so treat it with the same level of professionalism. If you
                encounter any technical issues, please let us know immediately so we can assist you.
              </h2>
            </div>
          </div>
          <div>
            {webcamEnabled ? (
              <Webcam
                mirrored={true}
                onUserMedia={() => setWebcamEnabled(true)}
                onUserMediaError={() => setWebcamEnabled(false)}
                style={{ height: 300, width: 300 }}
              />
            ) : (
              <div className="flex flex-col">
                <WebcamIcon className="h-72 my-8 w-full p-20 bg-secondary rounded-lg border" />
                <Button variant="outline" onClick={() => setWebcamEnabled(true)}>
                  Enable Microphone and Camera
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end items-end">
          <Link href={`/dashboard/interview/${params.interviewId}/start`}>
            <Button>Start Your Interview</Button>
          </Link>
        </div>
      </div>
    )
  );
}

export default Interview;
