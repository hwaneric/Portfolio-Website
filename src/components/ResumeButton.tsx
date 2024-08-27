import { ArrowDownToLine } from "lucide-react";
import { Button } from "./ui/button";

export default function ResumeButton() {
  return (
    <Button 
      className="flex flex-row min-w-14 sm:min-w-24 text-xs sm:text-base text-center px-2">
      <a
        className="flex gap-1 flex-row text-center w-full items-center justify-center"
        href="/Eric_Hwang_Resume.pdf"
        download="Eric_Hwang_Resume.pdf"
      >
        <ArrowDownToLine size={16} strokeWidth={3.5} className="text-xl w-0 md:w-auto"/>My CV
      </a>
      
    </Button>
  )
}