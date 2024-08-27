"use client"

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";


export default function ProjectButton() {
  const handleScrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const navbarHeight = 4 * rem; // Height of navbar

    if (projectsElement) {
      window.scrollTo({
        top: projectsElement.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Button 
      className="sm:min-w-24 min-w-14 text-center flex flex-row items-center justify-center "
      onClick={handleScrollToProjects}
    >
      Projects
      <ArrowRight size={16} strokeWidth={3.5} className="text-xl w-0 md:w-auto"/>
    </Button>
  )
}