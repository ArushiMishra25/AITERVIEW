"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import HomePageHeader from "./Home/HomePageHeader";

function Header() {
  const path = usePathname();
  const [isTriggerMobile, setIsTriggerMobile] = useState(false);
  const isTriggered = () => {
    setIsTriggerMobile(!isTriggerMobile);
  };
  const HomePageHeader = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
        <Image
          src={"/logo.svg"}
          width={40}
          height={30}
          alt="logo"
          onClick={HomePageHeader}
          className="cursor-pointer"
        />
        <ul className=" hidden md:flex gap-6">
          <Link href={"/dashboard"}>
            <li
              className={`hover:text-blue-600 hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard" && "text-blue-600 font-bold"
              }`}
            >
              Dashboard
            </li>
          </Link>
          <Link href={"/dashboard/questions"}>
            <li
              className={`hover:text-blue-600 hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard/questions" && "text-blue-600 font-bold"
              }`}
            >
              Questions
            </li>
          </Link>

          <li
            className={`hover:text-blue-600 hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard/how" && "text-blue-600 font-bold"
            }`}
          >
            <Link href={"/dashboard/how"}>How it works?</Link>
          </li>
        </ul>
        <div className="hidden md:block">
          <UserButton />
        </div>
        <div className="block md:hidden">
          <button
            onClick={isTriggered}
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isTriggerMobile && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-white p-4">
            <button
              onClick={isTriggered}
              className="absolute top-4 right-4 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav>
              <ul className="flex flex-col items-start gap-4 text-sm mt-8">
                <li>
                  <Link
                    className={`hover:text-blue-600 hover:font-bold text-lg transition-all cursor-pointer ${
                      path == "/dashboard" && "text-blue-600 font-bold"
                    }`}
                    href={"/dashboard"}
                    onClick={isTriggered}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className={`hover:text-blue-600 hover:font-bold text-lg transition-all cursor-pointer ${
                      path == "/dashboard/questions" &&
                      "text-blue-600 font-bold"
                    }`}
                    href={"/dashboard/questions"}
                    onClick={isTriggered}
                  >
                    Questions
                  </Link>
                </li>
                <li>
                  <Link
                    className={`hover:text-blue-600 hover:font-bold text-lg transition-all cursor-pointer ${
                      path == "/dashboard/how" && "text-blue-600 font-bold"
                    }`}
                    href={"/dashboard/how"}
                    onClick={isTriggered}
                  >
                    How it works?
                  </Link>
                </li>
              </ul>
              <div className=" mt-10">
                <UserButton />
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
