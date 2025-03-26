import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <section className="relative bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat transf  ">
      {/* <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-gradient-to-r sm:from-gray-900/95 sm:to-transparent"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl text-left">
            AITERVIEW
          </h1>
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl text-left">
            Your Personal
            <strong className="block font-extrabold text-blue-500 text-left">
              {" "}
              AI Interview Coach.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-left text-white sm:text-xl/relaxed">
            Double your chances of landing that job offer with our AI-powered
            interview prep
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href={"/dashboard"}
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              href="#howItWork"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:text-black focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
