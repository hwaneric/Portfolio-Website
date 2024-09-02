"use client";
import { TypographyH2 } from "./ui/typography";

import Image from "next/image";
import { Separator } from "./ui/separator";
import ProjectButton from "./ProjectButton";
import { useState, useEffect } from "react";
import GmailButton from "./GmailButton";

export default function Navbar() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => setPageLoaded(true), 500);
    setPageLoaded(true);
  }, []);

  return (
    <nav
      className={`fixed z-50 flex h-16 w-screen items-center justify-center overflow-hidden border-b border-b-foreground/10 bg-slate-50 shadow-md transition-transform duration-700 ease-out ${pageLoaded ? "translate-y-0" : "-translate-y-[150vh]"}`}
    >
      <div className="flex w-full items-center p-4">
        <a href="#about">
          <TypographyH2 className="border-b-0 text-indigo-600">
            Eric Hwang&apos;s Portfolio
          </TypographyH2>
        </a>
      </div>

      <div className="flex h-full flex-row items-center gap-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/eric-hwang-7061731b4/"
        >
          <Image
            src="/LinkedIn.png"
            alt="LinkedIn Logo"
            width={50}
            height={50}
            priority={true}
          />
        </a>

        <a target="_blank" href="https://github.com/hwaneric">
          <Image
            src="/Github.png"
            alt="Github Logo"
            width={50}
            height={50}
            priority={true}
          />
        </a>

        <GmailButton />
        {/* <a target="_blank" href="mailto:eric.hwang.dev@gmail.com">
          <Image
            src="/Gmail.png"
            alt="Gmail Logo"
            width={50}
            height={50}
            priority={true}
          />
        </a> */}
      </div>

      <Separator className="mx-8 h-5/6" orientation="vertical" />

      <div className="mr-3 flex justify-end p-3 text-sm">
        <ProjectButton />
      </div>
    </nav>
  );
}
