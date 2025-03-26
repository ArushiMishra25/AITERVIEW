import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useState } from 'react';

function QuestionSection({ interviewQuestion, activeQuestionId }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
      // setIsSpeaking(true);
    } else {
      alert("sorry, your browser does'nt support speech to text");
      // setIsSpeaking(false);
    }
  };
  return (
    interviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {interviewQuestion &&
            interviewQuestion.map((question, id) => (
              <h2
                key={id}
                className={`p-2  rounded-full text-xs md:text-sm text-center cursor-pointer ${
                  activeQuestionId === id ? ' bg-blue-600 text-white ' : 'bg-secondary'
                }`}
              >
                Question # {id + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg">{interviewQuestion[activeQuestionId]?.question}</h2>
        <Volume2
          className={`cursor-pointer ${isSpeaking ? 'text-blue-600' : 'text-black'}`}
          onClick={() => textToSpeech(interviewQuestion[activeQuestionId]?.question)}
        />

        <div className="border rounded-lg p-5 bg-blue-100 mt-20">
          <h2 className="flex gap-2 items-center text-blue-600">
            <Lightbulb />
            <strong>Note: </strong>
          </h2>
          <h2 className="text-sm text-blue-600 my-2">
            When you're ready to answer a question, please select the "Record" button. Ensure you're prepared with your
            response before starting. Speak clearly and concisely. Review your recording for accuracy and completeness
            before submitting.
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionSection;
