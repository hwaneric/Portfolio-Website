"use client";

// pages/index.js
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDownToLine } from "lucide-react";
import ProjectList from "@/components/ProjectList";
import ProjectButton from "@/components/ProjectButton";
import ResumeButton from "@/components/ResumeButton";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [headshotLoaded, setHeadshotLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => setPageLoaded(true), 500);
    setPageLoaded(true);
  }, []);

  const handleLoad = () => {
    console.log("Image loaded");
    setHeadshotLoaded(true);
  };

  return (
    // About id enables user to scroll all the way to the top when clicking my name
    <main className="flex min-h-screen flex-col items-center p-12" id="about">
      <div className="flex min-h-screen min-w-full flex-col items-center justify-center gap-20">
        <div className="flex w-full flex-row justify-center gap-20 md:gap-[10%]">
          <div
            className={`flex flex-col overflow-hidden transition-transform duration-700 ease-out ${pageLoaded && headshotLoaded ? "translate-x-0" : "-translate-x-[150vw]"}`}
          >
            <TypographyH2
              className={`mt-16 inline-block border-b-0 text-left text-base text-indigo-500 sm:text-3xl`}
            >
              <span className="rounded-md bg-yellow-200 p-1 px-1">
                Eric Hwang
              </span>{" "}
              <br />
              <span className="underline">Software Engineer</span>
            </TypographyH2>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <ProjectButton />

              <ResumeButton />
            </div>
          </div>

          <div
            className={`relative flex transform flex-col items-center justify-center overflow-hidden transition-transform duration-700 ease-out ${pageLoaded && headshotLoaded ? "translate-x-0" : "translate-x-[150vw]"}`}
          >
            <Image
              src="/photo_of_myself.jpg"
              alt="That's me!"
              priority={true}
              width={200}
              height={200}
              className={`h-auto rounded-full glow-effect`}
              onLoad={handleLoad}
            />
          </div>
        </div>

        <div
          className={`transform overflow-hidden transition-transform duration-700 ease-out ${pageLoaded && headshotLoaded ? "translate-y-0" : "translate-y-[30vh] scale-0"}`}
        >
          <div
            className={`relative flex flex-row items-center justify-center gap-1`}
          >
            <TypographyH4 className="flex flex-row items-center gap-1 text-center text-indigo-500">
              Former
              <div className="relative mb-1 h-8 w-24">
                <Image
                  src="/TikTok_wide.svg"
                  alt="TikTok Logo"
                  fill={true}
                  className="object-contain"
                />
              </div>
              SWE Intern
            </TypographyH4>
          </div>

          <Separator />
          <TypographyH4 className="text-center text-indigo-500">
            {" "}
            Computer Science & Government @ Harvard
          </TypographyH4>

          <TypographyP className="mt-10 text-center">
            Welcome! My name is Eric, and I&apos;m a rising senior completing a
            computer science and government double major.
            <br />
            I am passionate about social impact tech, web development, and
            sports. Check out my past projects or connect with me on the
            platforms above!
          </TypographyP>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="mt-12" id="projects">
        <Separator />
        <TypographyH2 className="mb-3 mt-8 border-b-0 text-center text-indigo-500 underline">
          Recent Projects
        </TypographyH2>
        <ProjectList />
      </div>
    </main>
  );
}
