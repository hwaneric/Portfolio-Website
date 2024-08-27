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

  const handleScrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    const navbarHeight = 64; // Height of your navbar in pixels

    if (projectsElement) {
      window.scrollTo({
        top: projectsElement.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    // About id enables user to scroll all the way to the top when clicking my name
    <main className="flex min-h-screen flex-col items-center p-12" id="about">
      <div className="flex flex-col justify-center items-center min-h-screen min-w-full gap-20">

        <div className="flex flex-row gap-20 md:gap-[10%] w-full justify-center ">
          <div className={`flex flex-col overflow-hidden transition-transform duration-700 ease-out ${pageLoaded && headshotLoaded ? "translate-x-0" : "-translate-x-[150vw]"}`}>
            <TypographyH2 className={`mt-16 border-b-0 text-left text-base sm:text-3xl text-indigo-500 inline-block`}>
              
              <span className="bg-yellow-200 rounded-md p-1 px-1">Eric Hwang</span> <br/>
              
              <span className="underline">Software Engineer</span>
            </TypographyH2>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ProjectButton/>

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
              className={`h-auto rounded-full shadow-lg`}
              onLoad={handleLoad}
            />
          
          </div>
        </div>

        <div className={`overflow-hidden transition-transform transform duration-700 ease-out ${pageLoaded && headshotLoaded ? "translate-y-0" : "translate-y-[30vh] scale-0"}`}>
          <div className={`relative flex flex-row items-center justify-center gap-1`}>
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
            I&apos;m super passionate about social impact tech, web dev, and
            sports. Check out my past projects or connect with me on the platforms
            below!
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
