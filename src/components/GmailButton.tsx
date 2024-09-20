"use client";

import Image from "next/image";
import { useToast } from "@/components/hooks/use-toast"


export default function GmailButton() {
  const { toast } = useToast()

  const copyGmail = () => {
    navigator.clipboard.writeText("eric.hwang.dev@gmail.com")
      .then(() => {
        toast({
          title: "Email Copied to Clipboard",
          description: "Contact me at eric.hwang.dev@gmail.com",
        })
      })
      .catch((error) => {
        console.error("Error copying to clipboard: ", error);
        toast({
          title: "Error Copying Email to Clipboard",
          description: "Unable to copy email to clipboard. Contact me at eric.hwang.dev@gmail.com",
          variant: "destructive"
        })
      });
  }

  return (
    <a onClick={copyGmail} className="hover:cursor-pointer">
      <Image
        src="/Gmail.png"
        alt="Gmail Logo"
        width={50}
        height={50}
        priority={true}
      />
    </a>
  )

}
