import { Separator } from "./ui/separator";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TypographyH3, TypographyH4, TypographyP } from "./ui/typography";
import { Button } from "./ui/button";

export default function ProjectList() {
  return (
    <div className="flex w-screen flex-col gap-10 px-5">
      {/* REZZY */}
      <div className="flex w-full flex-row gap-10">
        <div className="flex w-1/2 flex-row items-center">
          {/* PHOTO HERE */}
          <a target="_blank" href="https://make-rezzy.vercel.app/">
            <Image
              src="/rezzy_logo.png"
              alt="Rezzy Logo"
              width={80}
              height={80}
              // fill={true}
              unoptimized={true}
              className="h-auto w-full"
            />
          </a>
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex flex-row items-center gap-2 border-b border-slate-300">
            <TypographyH3>
              <a
                target="_blank"
                href="https://make-rezzy.vercel.app/"
                className="font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
              >
                Rezzy
              </a>
            </TypographyH3>
            <TypographyP className="mt-auto italic">
              {" "}
              (Summer 2024){" "}
            </TypographyP>
          </div>

          <TypographyP className="text-sm text-slate-500">
            Typescript, Python, Next.js, React, Tailwind, Selenium, AWS Lambda,
            Docker
          </TypographyP>

          <TypographyP className="mt-3">
            Rezzy is a personal project I built in the summer of 2024. It&apos;s
            a{" "}
            <span className="bg-highlight">
              web app that allows users to configure and subscribe to
              reservations they would like but are currently fully-booked. Rezzy
              then automatically detects and notifies the user when a new
              opening matching their configuration is available.
            </span>
            <br />
            <br />
            The project&apos;s UI is built using Typescript, Next.js, Tailwind,
            and shadcn/ui. The backend logic to detect new openings is written
            using Python and Selenium, and it is made accessible to the UI
            through a Flask API. In order to host the backend logic and run it
            asynchronously, I taught myself how to containerize my Python
            scripts using Docker and set up Dockerfiles. Then, I used AWS&apos;
            Lambda and Elastic Container Registry to deploy the logic on the
            cloud.
          </TypographyP>

          <Button
            variant="outline"
            className="mt-3 max-w-max whitespace-nowrap"
          >
            <a
              target="_blank"
              href="https://make-rezzy.vercel.app/"
              className="flex flex-row items-center gap-1 font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
            >
              Check It Out Here! <ArrowRight size={16} strokeWidth={3.5} />
            </a>
          </Button>
        </div>
      </div>

      {/* HSHS LOTTERY WEBAPP */}
      <div className="mt-16 flex w-full flex-row gap-10">
        <div className="flex w-1/2 flex-row items-center">
          {/* PHOTO OR VIDEO HERE */}
          <div className="relative h-0 w-full pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/tVq3IqStzNU?si=1To_IHuUmY7Zfimn"
              className="absolute left-0 top-0 h-full w-full"
              allowFullScreen
            />
          </div>
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex flex-row items-center gap-2 border-b border-slate-300">
            <TypographyH3>
              <a
                target="_blank"
                href="https://github.com/hwaneric/Demo_S24_HSHS_Lotteries"
                className="font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
              >
                Harvard Square Homeless Shelter <br /> Bed Waitlist Management
                Portal
              </a>
            </TypographyH3>
            <TypographyP className="mt-auto min-w-32 italic">
              (Spring 2024)
            </TypographyP>
          </div>

          <TypographyP className="text-sm text-slate-500">
            Typescript, Next.js, React, Tailwind, Supabase, Google App Scripts
          </TypographyP>

          <TypographyP className="mt-3">
            As a senior software engineer at Harvard Tech for Social Good
            (T4SG), I lead a team of 5 junior software engineers to build
            technical solutions for social impact organizations each semester.
            In the spring of 2024, I led the development of a{" "}
            <span className="bg-highlight">
              web application on behalf of the Harvard Square Homeless Shelter
              that automates many manual tasks related to managing the
              shelter&apos;s bed waitlist.
            </span>{" "}
            This application, which is currently in use by shelter staff, is
            estimated to{" "}
            <span className="font-bold">
              save the shelter over 400 hours of manual work per year.
            </span>
            <br />
            <br />
            The project&apos;s UI is built using Typescript, Next.js, Tailwind,
            and shadcn/ui. The web app also synchronizes data across multiple
            sources by using Google App Scripts to automatically process new bed
            requests and the Google Sheets API to stay in-synch with the
            shelter&apos;s Google Sheets records.
            <br />
            <br />
            For the privacy of the shelter&apos;s guests, I&apos;m unable to
            provide a deployed demo of the project. However, you can watch a
            video demo of the project to your left and see a clone of the
            project&apos;s GitHub below.
          </TypographyP>

          <Button
            variant="outline"
            className="mt-3 max-w-max whitespace-nowrap"
          >
            <a
              target="_blank"
              href="https://github.com/hwaneric/Demo_S24_HSHS_Lotteries"
              className="flex flex-row items-center gap-1 font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
            >
              Cloned GitHub <ArrowRight size={16} strokeWidth={3.5} />
            </a>
          </Button>
        </div>
      </div>

      {/* POPUP BLOCKER */}
      <div className="mt-16 flex w-full flex-row gap-10">
        <div className="flex w-1/2 flex-row items-center">
          {/* PHOTO OR VIDEO HERE */}
          <Image
            src="/popup-blocker.png"
            alt="Popup Blocker Screenshot"
            width={80}
            height={80}
            // fill={true}
            unoptimized={true}
            className="h-auto w-full rounded-sm shadow-md"
          />
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex flex-row items-center gap-2 border-b border-slate-300">
            <TypographyH3>
              <a
                target="_blank"
                href="https://chromewebstore.google.com/detail/popup-blocker/cfommlbimdmgdhffmkfdkkkmpcghdknf"
                className="font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
              >
                Pop-Up Blocker
              </a>
            </TypographyH3>
            <TypographyP className="mt-auto min-w-32 italic">
              (Winter 2023)
            </TypographyP>
          </div>

          <TypographyP className="text-sm text-slate-500">
            Javascript
          </TypographyP>

          <TypographyP className="mt-3">
            I watch a ton of sports online, but a lot of the streaming sites I use are plagued with
            countless pop-up ads. Eventually, I grew sick of having to close 3
            to 5 pop-up ads every time I wanted to watch a game, so I built a
            simple pop-up blocker{" "}
            <span className="bg-highlight">
              Chrome Extension using Javascript that automatically closes all
              pop-ups when toggled on.
            </span>{" "}
            It&apos;s a simple project, but it&apos;s one of my favorites
            because it&apos;s so useful to me!
          </TypographyP>

          <Button
            variant="outline"
            className="mt-3 max-w-max whitespace-nowrap"
          >
            <a
              target="_blank"
              href="https://chromewebstore.google.com/detail/popup-blocker/cfommlbimdmgdhffmkfdkkkmpcghdknf"
              className="flex flex-row items-center gap-1 font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
            >
              Download on the Chrome Store{" "}
              <ArrowRight size={16} strokeWidth={3.5} />
            </a>
          </Button>
        </div>
      </div>

      {/* THE CHANGE CLIMATE PROJECT LLM TOOL */}
      <div className="mt-16 flex w-full flex-row gap-10">
        <div className="flex w-1/2 flex-row items-center">
          {/* PHOTO OR VIDEO HERE */}
          <Image
            src="/ChangeClimateProject.png"
            alt="The Change Climate Project Logo"
            width={80}
            height={80}
            // fill={true}
            unoptimized={true}
            className="h-auto w-full"
          />
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex flex-row items-center gap-2 border-b border-slate-300">
            <TypographyH3>
              <a
                target="_blank"
                href="https://www.changeclimate.org/"
                className="font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
              >
                The Change Climate Project: AI-Powered Carbon Reduction Guidance
              </a>
            </TypographyH3>
            <TypographyP className="mt-auto min-w-32 italic">
              (Fall 2023)
            </TypographyP>
          </div>

          <TypographyP className="text-sm text-slate-500">
            Python, Flask, LangChain, Pinecone
          </TypographyP>

          <TypographyP className="mt-3">
            Another Tech for Social Good project I led as a senior software
            engineer! In this project, I worked with a non-profit called The
            Change Climate Project to build a{" "}
            <span className="bg-highlight">
              generative AI tool that gives customized advice to corporations on
              how to reduce their carbon footprint.
            </span>
            <br />
            <br />
            For this project, I led my team in creating a large language model
            tool that uses retrieval augmented generation and few shot learning
            to improve the quality of responses. We also built an API to allow
            The Change Climate Project to interact with the tool and a testing
            script to test the tool&apos;s performance.
            <br />
            <br />
            Unfortunately, because the tool uses proprietary data and has been
            handed off to The Change Climate Project (where it is currently
            being integrated into the non-profits services), I am unable to
            provide a live demo or a GitHub repository.
          </TypographyP>
        </div>
      </div>

      {/* FAFSA GPT */}
      {/* <div className="mt-16 flex w-full flex-row gap-10">
        <div className="flex w-1/2 flex-row items-center">
          <Image
            src="/FAFSA-GPT.png"
            alt="FAFSA-GPT Screenshot"
            width={80}
            height={80}
            // fill={true}
            unoptimized={true}
            className="h-auto w-full rounded-sm shadow-md"
          />
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex flex-row items-center gap-2 border-b border-slate-300">
            <TypographyH3>
              <a
                target="_blank"
                href="https://chat.fairopportunityproject.org/"
                className="font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
              >
                FAFSA-GPT
              </a>
            </TypographyH3>
            <TypographyP className="mt-auto min-w-32 italic">
              (Summer 2023)
            </TypographyP>
          </div>

          <TypographyP className="text-sm text-slate-500">
            React, Python, Javascript, Flask, Postgres, LangChain, Pinecone
          </TypographyP>

          <TypographyP className="mt-3">
            As an intern at Fair Opportunity Project (an EdTech non-profit), I
            led the creation of a{" "}
            <span className="bg-highlight">
              generative-AI chatbot to answer questions regarding FAFSA—the
              federal financial aid form.
            </span>
            <br />
            <br />
            The FAFSA form is notoriously complex, and{" "}
            <span className="font-bold">
              billions of dollars in financial aid go unclaimed each year by
              eligible students that fail to complete the FAFSA.{" "}
            </span>{" "}
            The chatbot I designed, created, and launched helps students fill
            out the FAFSA by providing detailed, personalized, and accurate
            answers to questions they have while filling out the form.
            <br />
            <br />I created the LLM functionality by using LangChain to interact
            with OpenAI&apos;s base GPT-3.5 model. The GPT model was
            supplemented with retrieval augmented generation, which was
            implemented using Pinecone vector embedding search to provide the
            chatbot with technical FAFSA documentation. I allowed the user to
            interact with our LLM tool by building a web app using a React
            frontend, Python Flask backend API, and Postgres database. Finally,
            I deployed the project using Netlify and Heroku. Check out the live
            deployment below!
          </TypographyP>

          <Button
            variant="outline"
            className="mt-3 max-w-max whitespace-nowrap"
          >
            <a
              target="_blank"
              href="https://chat.fairopportunityproject.org/"
              className="flex flex-row items-center gap-1 font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
            >
              Try It Yourself! <ArrowRight size={16} strokeWidth={3.5} />
            </a>
          </Button>
        </div>
      </div> */}

      {/* FAIR OPP WEBSITE */}
      <div className="mt-16 flex w-full flex-row gap-10">
        <div className="flex w-1/2 flex-row items-center">
          {/* PHOTO OR VIDEO HERE */}
          <Image
            src="/FairOpp.png"
            alt="Fair Opportunity Project Website Screenshot"
            width={80}
            height={80}
            // fill={true}
            unoptimized={true}
            className="h-auto w-full rounded-sm shadow-md"
          />
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex flex-row items-center gap-2 border-b border-slate-300">
            <TypographyH3>
              <a
                target="_blank"
                href="https://www.fairopportunityproject.org/"
                className="font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
              >
                Fair Opportunity Project (.org)
              </a>
            </TypographyH3>
            <TypographyP className="mt-auto min-w-32 italic">
              (Summer 2023)
            </TypographyP>
          </div>

          <TypographyP className="text-sm text-slate-500">
            Javascript
          </TypographyP>

          <TypographyP className="mt-3">
            In addition to the chatbot, I helped Fair Opportunity Project
            completely re-do and re-launch their primary web portal.{" "}
            <span className="bg-highlight">
              The site now provides thousands of underprivileged students,
              parents, and counselors with free college advising resources.
            </span>
            <br />
            <br />
            Check out the live site below!
          </TypographyP>

          <Button
            variant="outline"
            className="mt-3 max-w-max whitespace-nowrap"
          >
            <a
              target="_blank"
              href="https://www.fairopportunityproject.org/"
              className="flex flex-row items-center gap-1 font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
            >
              Visit the Live Site! <ArrowRight size={16} strokeWidth={3.5} />
            </a>
          </Button>
        </div>
      </div>

      {/* CITY OF BOSTON PROJECT */}
      <div className="mt-16 flex w-full flex-row gap-10">
        <div className="flex w-1/2 flex-row items-center">
          {/* PHOTO OR VIDEO HERE */}
          <Image
            src="/CityOfBoston.png"
            alt="Fair Opportunity Project Website Screenshot"
            width={80}
            height={80}
            // fill={true}
            unoptimized={true}
            className="h-auto w-full rounded-sm shadow-md"
          />
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex flex-row items-center gap-2 border-b border-slate-300">
            <TypographyH3 className="text-indigo-500">
              City of Boston Checkbook Explorer
            </TypographyH3>
            <TypographyP className="mt-auto min-w-32 italic">
              (Spring 2023)
            </TypographyP>
          </div>

          <TypographyP className="text-sm text-slate-500">
            Django, Python, Javascript, React
          </TypographyP>

          <TypographyP className="mt-3">
            In partnership with the City of Boston&apos;s Department of
            Innovation and Technology, my Tech for Social Good team and I built
            a{" "}
            <span className="bg-highlight">
              data visualization platform for the City of Boston&apos;s
              financial spending.{" "}
            </span>{" "}
            The project aims to increase the municipal government&apos;s
            transpancy by making spending data intuitive to understand and
            accessible for ordinary citizens. The project was built using a
            Javascript React frontend with a Python Django backend.
            <br />
            <br />
            Because the project has been handed off to the City of Boston, I am
            unfortunately unable to provide a demo of the site or a GitHub
            repository.😞
          </TypographyP>
        </div>
      </div>

      {/* Discriminology Discrimination Reporting Tool */}
      <div className="mt-16 flex w-full flex-row gap-10">
        <div className="flex w-1/2 flex-row items-center">
          {/* PHOTO OR VIDEO HERE */}
          <div className="relative h-0 w-full pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/yzU8V-xw8qU?si=qwvkD-zMI9U0dXUZ"
              className="absolute left-0 top-0 h-full w-full"
              allowFullScreen
            />
          </div>
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex flex-row items-center gap-2 border-b border-slate-300">
            <TypographyH3>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=yzU8V-xw8qU"
                className="font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
              >
                Discriminology Discrimination Reporting Tool
              </a>
            </TypographyH3>
            <TypographyP className="mt-auto min-w-32 italic">
              (Fall 2022)
            </TypographyP>
          </div>

          <TypographyP className="text-sm text-slate-500">
            Javascript, React
          </TypographyP>

          <TypographyP className="mt-3">
            My first ever project with Tech for Social Good! I helped build a
            <span className="bg-highlight">
              {" "}
              mobile web application to report, track, and analyze
              discrimination in schools{" "}
            </span>{" "}
            for an EdTech non-profit called Discriminology.
            <br />
            <br />I primarily worked on the Javascript and React frontend of the
            project. In particular, I created data visualization pages, with a
            focus on making responsive layouts that would be easy to use on both
            desktops and mobile devices.
          </TypographyP>

          <Button
            variant="outline"
            className="mt-3 max-w-max whitespace-nowrap"
          >
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=yzU8V-xw8qU"
              className="flex flex-row items-center gap-1 font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
            >
              See Demo Video Here! <ArrowRight size={16} strokeWidth={3.5} />
            </a>
          </Button>
        </div>
      </div>

      {/* CS51 MiniML Language */}
      <div className="mt-16 flex w-full flex-row gap-10">
        <div className="flex w-1/2 flex-row items-center">
          {/* PHOTO OR VIDEO HERE */}
          <Image
            src="/miniml.png"
            alt="Screenshot of MiniML being used "
            width={80}
            height={80}
            // fill={true}
            unoptimized={true}
            className="h-auto w-full rounded-sm shadow-md"
          />
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex flex-row items-center gap-2 border-b border-slate-300">
            <TypographyH3>
              <a
                target="_blank"
                href="https://github.com/hwaneric/CS51-Miniml-Final-Project-Public/tree/main"
                className="font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
              >
                MiniML: An Interpreted OCaml-Like Programming Language
              </a>
            </TypographyH3>
            <TypographyP className="mt-auto min-w-32 italic">
              (Spring 2022)
            </TypographyP>
          </div>

          <TypographyP className="text-sm text-slate-500">OCaml</TypographyP>

          <TypographyP className="mt-3">
            As my cumulative final project for Harvard&apos;s CS51: Abstraction
            and Design in Computation class, I built a small, interpreted
            programming language called MiniML.{" "}
            <span className="bg-highlight">
              MiniML is a statically typed language with support for primitive
              types such as strings, integers, floats, booleans; iterative and
              recursive functions; exception handling; and a variety of
              operations{" "}
            </span>
            .
            <br />
            <br />I also built 3 different kinds of interpreters that each used
            different semantics for the language: a substitution model
            interpreter, a dynamically scoped environment interpreter, and a
            lexically scoped environment interpreter.
            <br />
            <br />
            This was a super interesting project, and I learned a ton about
            language design, parsing, and interpreters!
          </TypographyP>

          <Button
            variant="outline"
            className="mt-3 max-w-max whitespace-nowrap"
          >
            <a
              target="_blank"
              href="https://github.com/hwaneric/CS51-Miniml-Final-Project-Public/tree/main"
              className="flex flex-row items-center gap-1 font-semibold text-indigo-500 hover:cursor-pointer hover:underline"
            >
              Check It Out Here! <ArrowRight size={16} strokeWidth={3.5} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
