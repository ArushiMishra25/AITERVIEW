"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function HomePageHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const Homepagehandler = () => {
    window.location.href = "/";
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/logo.svg"
                width={30}
                height={30}
                alt="Logo"
                onClick={Homepagehandler}
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#service"
                  >
                    What we Do
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#howItWork"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#faq"
                  >
                    Faq
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link href="/dashboard">
                <Button>Signup</Button>
              </Link>
            </div>

            <div className="block md:hidden">
              <button
                onClick={toggleSidebar}
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
        </div>

        {isSidebarOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="fixed top-0 left-0 w-64 h-full bg-white p-4">
              <button
                onClick={toggleSidebar}
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
              <nav aria-label="Global">
                <ul className="flex flex-col items-start gap-4 text-sm mt-8">
                  <li>
                    <Link
                      className="text-gray-500 text-lg transition hover:text-gray-500/75"
                      href="/"
                      onClick={toggleSidebar}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 text-lg transition hover:text-gray-500/75"
                      href="#about"
                      onClick={toggleSidebar}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 text-lg transition hover:text-gray-500/75"
                      href="#service"
                      onClick={toggleSidebar}
                    >
                      What we Do
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 text-lg transition hover:text-gray-500/75"
                      href="#howItWork"
                      onClick={toggleSidebar}
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 text-lg transition hover:text-gray-500/75"
                      href="#faq"
                      onClick={toggleSidebar}
                    >
                      Faq
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default HomePageHeader;
