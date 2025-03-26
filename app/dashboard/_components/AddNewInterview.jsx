'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAIModel';
import { LoaderCircle } from 'lucide-react';
import { db } from '@/utils/db';
import { MockInterviewSchema } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/navigation';

function AddNewInterview() {
  const [openDialogue, setOpenDialogue] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();
  const router = useRouter();
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const inputPrompt = `Job Position : ${jobPosition}, job Description: ${jobDesc},Years of Experience: ${jobExperience}, depends on this information give me ${process.env.NEXT_PUBLIC_INTERVIEW_QUES_COUNT} interview questions with answered in JSON format, give me only question and answer as field in JSON,don't give any key points or explanation`;

    const result = await chatSession.sendMessage(inputPrompt);
    let modifiedRes = result.response
      .text()
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    try {
      const jsonParseResponse = JSON.parse(modifiedRes);
      setJsonResponse(jsonParseResponse);
      if (jsonParseResponse) {
        const response = await db
          .insert(MockInterviewSchema)
          .values({
            mockId: uuidv4(),
            jsonMockResponse: modifiedRes,
            jobPosition: jobPosition,
            jobDesc: jobDesc,
            jobExperience: jobExperience,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format('DD-MM-YYYY'),
          })
          .returning({ mockId: MockInterviewSchema.mockId });
        if (response) {
          setOpenDialogue(false);
          router.push(`/dashboard/interview/${response[0]?.mockId}`);
        }
      }
    } catch (error) {
      console.error('Error parsing JSON:', error.message);
      console.error('Response content:', modifiedRes);
    }

    setLoading(false);
  };
  return (
    <div>
      <div
        onClick={() => setOpenDialogue(true)}
        className="p-10 border rounded-lg bg-slate-100 hover:scale-105 hover:shadow-md cursor-pointer transition-all"
      >
        <h2 className="font-bold text-lg text-center ">+ Add New</h2>
      </div>
      <Dialog className="text-white" open={openDialogue}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className=" text-2xl">Tell Us about your Interview</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2 className="text-gray-400">
                    Add Details about your job role,description and years of experience{' '}
                  </h2>
                  <div className="mt-7 my-2">
                    <label>Job role/position</label>
                    <Input
                      onChange={(e) => setJobPosition(e.target.value)}
                      placeholder="Ex. full stack developer"
                      required
                    />
                  </div>
                  <div className="mt-7 my-2">
                    <label>Job Description/tech stack</label>
                    <Textarea
                      onChange={(e) => setJobDesc(e.target.value)}
                      placeholder="Ex. React,Angular etc"
                      required
                    />
                  </div>
                  <div className="mt-7 my-2">
                    <label>Years of Experience</label>
                    <Input
                      onChange={(e) => setJobExperience(e.target.value)}
                      placeholder="Ex.5"
                      type="number"
                      max="15"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button onClick={() => setOpenDialogue(false)} variant="ghost">
                    Cancel
                  </Button>
                  <Button disabled={loading} type="submit">
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" /> Generating questions
                      </>
                    ) : (
                      'start Interview'
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
