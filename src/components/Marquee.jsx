import { twMerge } from "tailwind-merge";
import { Marquee } from "./MarqueeScrolling.jsx"
const skills = [
  "html5",
  "css3",
  "tailwindcss",
  "javascript",
  "typescript",
  "react",
  "nodejs",
  "expressjs",
  "mongoDB",
  "postgreSQL",
  "git",
  "github",
  "docker",
  "postman",
  "vercel",
  "java",
  "c",
  "python"
];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

function ReviewCard({ skill }) {
    return (
        <figure
            className={twMerge(
                "relative h-full w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center justify-center  gap-2">
                <img className="" width="32" height="32" alt="" src={`assets/logos/${skill}.svg`} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {skill.charAt(0).toUpperCase() + skill.slice(1)}
                    </figcaption>
                    {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
                </div>
            </div>
            {/* <blockquote className=" text-sm">{body}</blockquote> */}
        </figure>
    );
}

export function MarqueeDemo() {
    return (
        <div className="relative flex w-fit flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((skill) => (
                    <ReviewCard key={skill} skill={skill} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((skill) => (
                    <ReviewCard key={skill} skill={skill} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
