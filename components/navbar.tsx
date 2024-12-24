/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/androidlogo.png";

export function Navbar() {
  const { toast } = useToast();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    linkName: string
  ) => {
    setMobileMenuOpen(false);
    if (linkName !== "Home") {
      e.preventDefault();
      toast({
        title: "Coming Soon!",
        description: "It will be updated soon.",
      });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdropbackdrop-blur-sm mb-10 ${
          isMobileMenuOpen
            ? "bg-n-8 backdrop-blur-sm opacity-100"
            : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div
          className={` flex items-center justify-between px-1 py-3 lg:px-7.5 xl:px-10 max-xl:py-4`}
        >
          <Link href="/" className="font-bold text-[#7aff76] ml-4">
            <div className="flex items-center">
              <Image src={logo} alt="logo" width={52} height={52} />
              <div className="text-2xl md:hidden lg:flex lg:text-3xl xl:text-4xl">
                Android Club
              </div>
            </div>
          </Link>
          <nav className="fixed md:top-0 lg:top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              <div className="hidden space-x-6 md:flex">
                <Link
                  href="/"
                  className={`block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-1 px-4 py-2 md:py-8 lg:mr-0 lg:text-sm lg:font-bold lg:leading-3 lg:hover:text-color-1 xl:px-5`}
                  onClick={(e) => handleNavClick(e, "Home")}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  onClick={(e) => handleNavClick(e, "Speakers")}
                  className={`block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-1 px-4 py-2 md:py-8 lg:mr-0 lg:text-sm lg:font-bold lg:leading-3 lg:hover:text-color-1 xl:px-5`}
                >
                  Speakers
                </Link>
                <Link
                  href="#"
                  onClick={(e) => handleNavClick(e, "Schedule")}
                  className={`block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-1 px-4 py-2 md:py-8 lg:mr-0 lg:text-sm lg:font-bold lg:leading-3 lg:hover:text-color-1 xl:px-5`}
                >
                  Schedule
                </Link>
                <Link
                  href="#"
                  onClick={(e) => handleNavClick(e, "Stories")}
                  className={`block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-1 px-4 py-2 md:py-8 lg:mr-0 lg:text-sm lg:font-bold lg:leading-3 lg:hover:text-color-1 xl:px-5`}
                >
                  Stories
                </Link>
              </div>
            </div>
          </nav>

          <Button
            size="lg"
            className="hidden bg-pink-500 hover:bg-pink-600 md:inline-flex mr-4"
          >
            Register Today
          </Button>

          <svg
            height={36}
            width={36}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleMobileMenu}
            className="flex md:hidden"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 18L20 18"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M4 12L20 12"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M4 6L20 6"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-n-8 shadow-lg">
            <div className="flex flex-col items-start p-4 space-y-4">
              <Link
                href="/"
                className={`block relative font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-2 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-color-1 xl:px-12`}
                onClick={(e) => handleNavClick(e, "Home")}
              >
                Home
              </Link>
              <Link
                href="#"
                onClick={(e) => handleNavClick(e, "Speakers")}
                className={`block relative font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-2 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-color-1 xl:px-12`}
              >
                Speakers
              </Link>
              <Link
                href="#"
                onClick={(e) => handleNavClick(e, "Schedule")}
                className={`block relative font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-2 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-color-1 xl:px-12`}
              >
                Schedule
              </Link>
              <Link
                href="#"
                onClick={(e) => handleNavClick(e, "Stories")}
                className={`block relative font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-2 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-color-1 xl:px-12`}
              >
                Stories
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
