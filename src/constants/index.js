

export const myProjects = [
  {
    title: (
      <>
        LearnifAI
        <a
          href="https://learnifai-3.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline text-blue-300"
        >
          [Live Demo]
        </a>
      </>
    ),
    description: (
      <>
        An AI-powered Chrome extension that explains code and documentation through voice commands using Groq API integration.{" "}
        <br />
        <img src="/assets/logos/groq.png" alt="Groq LLM" className="inline h-5 ml-1" />
        <img src="/assets/logos/react.svg" alt="React" className="inline h-5 ml-1" />
        <img src="/assets/logos/tailwindcss.svg" alt="TailwindCSS" className="inline h-5 ml-1" />
        <img src="/assets/logos/express.svg" alt="Express" className="inline h-5 ml-1" />
        <img src="/assets/logos/mongodb.svg" alt="MongoDB" className="inline h-5 ml-1" />
      </>
    ),
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-white">
        <img
          src="/assets/projects/learnifai.png"
          width={300}
          height={200}
          className="h-full w-full object-fill mb-4"
          alt="LearnifAI project"
        />
      </div>
    ),
  },
  {
    title: (
      <>
        Prism 2.0
        <a
          href="https://www.prism2025.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline text-blue-300"
        >
          [Live Demo]
        </a>
      </>
    ),
    description: (
      <>
        Developed 'PRISM 2.0', the official website for our college's tech fest, with event details and registration features.{" "}
        <br />
        <img src="/assets/logos/react.svg" alt="React" className="inline h-5 ml-1" />
        <img src="/assets/logos/tailwindcss.svg" alt="TailwindCSS" className="inline h-5 ml-1" />
        <img src="/assets/logos/expressjs.svg" alt="Express" className="inline h-5 ml-1" />
        <img src="/assets/logos/postgresql.svg" alt="postgreSQL" className="inline h-5 ml-1" />
      </>
    ),
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-white">
        <img
          src="/assets/projects/prism2.0.png"
          width={300}
          height={200}
          className="h-full w-full object-fill mb-4"
          alt="Prism 2.0 project"
        />
        <ul className="list-disc pl-5 text-left mb-2">
          <li>Led frontend development for club dashboard and student interfaces using React and Vite.js.</li>
          <li>Designed APIs and backend routes for club data, events, and user role management.</li>
          <li>Used TailwindCSS for a clean, responsive UI and experience across devices.</li>
        </ul>
        <div className="flex flex-wrap gap-2 mt-2">
          <img src="/assets/logos/react.svg" alt="React" className="h-6" />
          <img src="/assets/logos/tailwindcss.svg" alt="TailwindCSS" className="h-6" />
          <img src="/assets/logos/expressjs.svg" alt="Express" className="h-6" />
          <img src="/assets/logos/postgresql.svg" alt="postgreSQL" className="h-6" />
        </div>
        <a href="https://www.prism2025.tech/" target="_blank" rel="noopener noreferrer" className="mt-3 underline text-blue-300">Live Demo</a>
      </div>
    ),
  },
  {
    title: (
      <>
        Maidaan
        <a
          href="https://maidaan-extra-cool.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline text-blue-300"
        >
          [Live Demo]
        </a>
      </>
    ),
    description: (
      <>
        A tech-driven web platform to promote sports participation and infrastructure access across India.{" "}
        <br />
        <img src="/assets/logos/react.svg" alt="React" className="inline h-5 ml-1" />
        <img src="/assets/logos/tailwindcss.svg" alt="TailwindCSS" className="inline h-5 ml-1" />
        <img src="/assets/logos/expressjs.svg" alt="Express" className="inline h-5 ml-1" />
        <img src="/assets/logos/postgresql.svg" alt="postgreSQL" className="inline h-5 ml-1" />
      </>
    ),
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-white">
        <img
          src="/assets/projects/maidaan.png"
          width={300}
          height={200}
          className="h-full w-full object-fill mb-4"
          alt="Maidaan project"
        />
        <ul className="list-disc pl-5 text-left mb-2">
          <li>Collaborated with a team to build a platform encouraging fitness and sports in local communities.</li>
          <li>Implemented features like facility booking, nearby ground discovery, and athlete recognition.</li>
          <li>Contributed to a mission-aligned UI with responsive design using React and TailwindCSS.</li>
        </ul>
        <div className="flex flex-wrap gap-2 mt-2">
          <img src="/assets/logos/react.svg" alt="React" className="h-6" />
          <img src="/assets/logos/tailwindcss.svg" alt="TailwindCSS" className="h-6" />
          <img src="/assets/logos/expressjs.svg" alt="Express" className="h-6" />
          <img src="/assets/logos/postgresql.svg" alt="postgreSQL" className="h-6" />
        </div>
        <a href="https://maidaan-extra-cool.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-3 underline text-blue-300">Live Demo</a>
      </div>
    ),
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mayank-gupta-03971a294/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Mayank-704",
    icon: "/assets/social/github.svg",
  },
];


