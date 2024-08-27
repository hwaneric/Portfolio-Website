"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function ProjectButton() {
  const handleScrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const navbarHeight = 4 * rem; // Height of navbar

    if (projectsElement) {
      window.scrollTo({
        top: projectsElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button
      className="flex min-w-14 flex-row items-center justify-center text-center sm:min-w-24"
      onClick={handleScrollToProjects}
    >
      Projects
      <ArrowRight
        size={16}
        strokeWidth={3.5}
        className="w-0 text-xl md:w-auto"
      />
    </Button>
  );
}
