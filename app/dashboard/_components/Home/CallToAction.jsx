import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function CallToAction() {
  return (
    <section id="about" className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center h-screen px-10">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Master Your Interview Skills with AI Precision
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Start your journey to interview success with our AI-powered mock interview app. Register, set up your
            personalized interview, and engage with real-time AI-generated questions using text-to-speech. Receive
            instant feedback and a detailed rating to refine your answers and boost your confidence. Get started now and
            take control of your interview preparation!
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="/dashboard"
              className="inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      <Image
        width={1000}
        height={1800}
        alt="img"
        src={'/about.jpg'}
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
}

export default CallToAction;
