'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModel';
import { db } from '@/utils/db';
import { UserAnswerSchema } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function RecordSection({ activeQuestionId, interviewQuestion, interviewData }) {
  const [userAnswer, setUserAnswer] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const { error, interimResult, isRecording, results, startSpeechToText, stopSpeechToText, setResults } =
    useSpeechToText({
      continuous: true,
      useLegacyResults: false,
    });
  useEffect(() => {
    results.map((res) => setUserAnswer((prevAns) => prevAns + res?.transcript));
  }, [results]);
  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      updateUserAnswer();
    }
  }, [userAnswer]);

  const startStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      //   if (userAnswer < 10) {
      //     setLoading(false);
      //     toast('Error while saving answer,please record again');
      //     return;
      //   }
    } else {
      startSpeechToText();
    }
  };
  const updateUserAnswer = async () => {
    setLoading(true);
    console.log(userAnswer);
    const feedbackPrompt = `Question: ${interviewQuestion[activeQuestionId]?.question}, User Answer: ${userAnswer}, Depends on question and user answer for given interview question please give use rating for answer and feedback as area of improvement as any in just 3-5 lines to improve it in JSON format with rating field and feedback field `;
    const result = await chatSession.sendMessage(feedbackPrompt);
    let modifiedRes = result.response
      .text()
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();
    try {
      const jsonParseResponse = JSON.parse(modifiedRes);
      const response = await db.insert(UserAnswerSchema).values({
        mockIdRef: interviewData.mockId,
        question: interviewQuestion[activeQuestionId]?.question,
        correctAns: interviewQuestion[activeQuestionId]?.answer,
        userAns: userAnswer,
        feedback: jsonParseResponse?.feedback,
        rating: jsonParseResponse?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY'),
      });
      if (response) {
        toast('user answer recorded successfully');
        setUserAnswer('');
        setResults([]);
      }
      setResults([]);
      setLoading(false);
    } catch (error) {
      console.error('Error parsing JSON:', error.message);
      console.error('Response content:', modifiedRes);
    }
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col justify-center my-20 items-center bg-black rounded-lg p-5">
        <Image src={'/webcam2.png'} width={200} height={200} className="absolute" />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: '100%',
            zIndex: 10,
          }}
        />
      </div>
      <div>
        <Button disabled={loading} onClick={startStopRecording} variant="outline" className="my-10">
          {isRecording ? (
            <h2 className="text-red-500 flex gap-2">
              <Mic /> Recording...
            </h2>
          ) : (
            'Record Answer'
          )}
        </Button>
      </div>
      {/* <Button onClick={() => console.log(userAnswer)}>show user answer</Button> */}
    </div>
  );
}

export default RecordSection;
