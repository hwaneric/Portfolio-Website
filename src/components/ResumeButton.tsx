import { ArrowDownToLine } from "lucide-react";
import { Button } from "./ui/button";

export default function ResumeButton() {
  return (
    <Button className="flex min-w-14 flex-row px-2 text-center sm:min-w-24">
      <a
        className="flex w-full flex-row items-center justify-center gap-1 text-center"
        href="/Eric_Hwang_Resume.pdf"
        download="Eric_Hwang_Resume.pdf"
      >
        <ArrowDownToLine
          size={16}
          strokeWidth={3}
          className="w-0 text-xl md:w-auto"
        />
        My CV
      </a>
    </Button>
  );
}
