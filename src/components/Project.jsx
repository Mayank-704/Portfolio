"use client";
import React from "react";
import { StickyScroll } from "./stickyScrollReveal.jsx"
import { LuSquareArrowOutUpRight } from "react-icons/lu";


const content = [
  {
    title: (
      <div className="flex items-center">
        LearnifAI
        <a
          href="https://learnifai-3.onrender.com/"
          target="_blank"
          // rel="noopener noreferrer"
          className="ml-2  text-blue-300"
        >
          <LuSquareArrowOutUpRight />
        </a>
      </div>
    ),
    description: (
      <>
        An AI-powered Chrome extension that explains code and documentation through voice commands using Groq API integration.{" "}
        <br />
        <img src="/assets/logos/groq.png" alt="Groq LLM" className="inline h-5 ml-1" />
        <img src="/assets/logos/react.svg" alt="React" className="inline h-5 ml-1" />
        <img src="/assets/logos/tailwindcss.svg" alt="TailwindCSS" className="inline h-5 ml-1" />
        <img src="/assets/logos/expressjsWhite.svg" alt="Express" className="inline h-5 ml-1" />
        <img src="/assets/logos/mongoDB.svg" alt="MongoDB" className="inline h-5 ml-1" />
      </>
    ),
    content: (
      <>
        <img
          src="/assets/projects/learnifai.png"
          width={300}
          height={200}
          className="h-full w-full object-fill mb-4"
          alt="LearnifAI project"
        />
      </>
    ),
  },
  {
    title: (
       <div className="flex items-center">
        Prism 2.0
        <a
          href="https://www.prism2025.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline text-blue-300"
        >
         <LuSquareArrowOutUpRight />
        </a>
      </div>
    ),
    description: (
      <>
        Developed 'PRISM 2.0', the official website for our college's tech fest, with event details and registration features.{" "}
        <br />
        <img src="/assets/logos/react.svg" alt="React" className="inline h-5 ml-1" />
        <img src="/assets/logos/tailwindcss.svg" alt="TailwindCSS" className="inline h-5 ml-1" />
        <img src="/assets/logos/expressjsWhite.svg" alt="Express" className="inline h-5 ml-1" />
        <img src="/assets/logos/postgreSQL.svg" alt="postgreSQL" className="inline h-5 ml-1" />
      </>
    ),
    content: (
      <>
        <img
          src="/assets/projects/prism2.0.png"
          width={300}
          height={200}
          className="h-full w-full object-fill mb-4"
          alt="Prism 2.0 project"
        />
      </>
    ),
  },
  {
    title: (
       <div className="flex items-center">
        Maidaan
        <a
          href="https://maidaan-extra-cool.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline text-blue-300"
        >
          <LuSquareArrowOutUpRight />
        </a>
      </div>
    ),
    description: (
      <>
        A tech-driven web platform to promote sports participation and infrastructure access across India.{" "}
        <br />
        <img src="/assets/logos/react.svg" alt="React" className="inline h-5 ml-1" />
        <img src="/assets/logos/tailwindcss.svg" alt="TailwindCSS" className="inline h-5 ml-1" />
        <img src="/assets/logos/expressjsWhite.svg" alt="Express" className="inline h-5 ml-1" />
        <img src="/assets/logos/postgreSQL.svg" alt="postgreSQL" className="inline h-5 ml-1" />
      </>
    ),
    content: (
      <>
        <img
          src="/assets/projects/maidaan.png"
          width={300}
          height={200}
          className="h-full w-full object-fill mb-4"
          alt="Maidaan project"
        />
      </>
    ),
  },
];
export default function Project() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
