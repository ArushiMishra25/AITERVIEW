import { Bot, Brain, BrainCircuit, CircleUserIcon, SailboatIcon, ShieldQuestion } from 'lucide-react';
import React from 'react';

function Service() {
  return (
    <section id="service" className=" text-black h-screen/50">
      <div className="max-w-screen  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>

          <p className="mt-4 text-gray-400">
            Our innovative platform offers a unique way to practice and refine your interview skills using cutting-edge
            AI technology. With real-time feedback and personalized assessments.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg  p-4">
              <Brain className="text-black " />
            </span>

            <div>
              <h2 className="text-lg font-bold">AI-Powered Mock Interviews</h2>

              <p className="mt-1 text-sm text-gray-400">
                Experience real-time mock interviews with our advanced AI. Our system conducts interviews using
                text-to-speech technology, providing a realistic simulation of an actual interview setting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg  p-4">
              <BrainCircuit />
            </span>

            <div>
              <h2 className="text-lg font-bold">Automated Interview Rating.</h2>

              <p className="mt-1 text-sm text-gray-400">
                Receive an objective assessment of your interview performance. Our AI analyzes your responses and
                provides a detailed rating, helping you understand your strengths and areas for improvement.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg  p-4">
              <Bot />
            </span>

            <div>
              <h2 className="text-lg font-bold">Personalized Feedback.</h2>

              <p className="mt-1 text-sm text-gray-400">
                Get customized feedback tailored to your performance. Our AI offers constructive criticism and tips to
                enhance your interview skills, ensuring you're well-prepared for the real thing.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg p-4">
              <CircleUserIcon />
            </span>

            <div>
              <h2 className="text-lg font-bold">Practice Anytime, Anywhere.</h2>

              <p className="mt-1 text-sm text-gray-400">
                Practice interviews at your convenience, 24/7. Whether you're at home or on the go, our app is
                accessible whenever you need it.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg p-4">
              <SailboatIcon />
            </span>

            <div>
              <h2 className="text-lg font-bold">Variety of Interview Types.</h2>

              <p className="mt-1 text-sm text-gray-400">
                Prepare for different types of interviews, including technical, behavioral, and situational questions.
                Our diverse question set ensures you're ready for any scenario.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg  p-4">
              <ShieldQuestion />
            </span>

            <div>
              <h2 className="text-lg font-bold">Secure and Private.</h2>

              <p className="mt-1 text-sm text-gray-400">
                Your data is secure with us. We prioritize your privacy and ensure all your information is kept
                confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
