import { twMerge } from "tailwind-merge";
import { Marquee } from "./MarqueeScrolling.jsx";

const skills = [
    { name: "html5", url: "assets/logos/html5.svg" },
    { name: "css3", url: "assets/logos/css3.svg" },
    { name: "tailwindcss", url: "assets/logos/tailwindcss.svg" },
    { name: "javascript", url: "assets/logos/javascript.svg" },
    { name: "typescript", url: "assets/logos/typescript.svg" },
    { name: "react", url: "assets/logos/react.svg" },
    { name: "nodejs", url: "assets/logos/nodejs.svg" },
    { name: "expressjs", url: "assets/logos/expressjs.svg" },
    { name: "mongoDB", url: "assets/logos/mongodb.svg" },
    { name: "postgreSQL", url: "assets/logos/postgresql.svg" },
    { name: "git", url: "assets/logos/git.svg" },
    { name: "github", url: "assets/logos/github.svg" },
    { name: "docker", url: "assets/logos/docker.svg" },
    { name: "postman", url: "assets/logos/postman.svg" },
    { name: "vercel", url: "assets/logos/vercel.svg" },
    { name: "java", url: "assets/logos/java.svg" },
    { name: "c", url: "assets/logos/c.svg" },
    { name: "python", url: "assets/logos/python.svg" }
];

const half = Math.ceil(skills.length / 2);
const firstRow = skills.slice(0, half);
const secondRow = skills.slice(half);

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
                                <img className="" width="32" height="32" alt="" src={skill.url} />
                                <div className="flex flex-col">
                                        <figcaption className="text-sm font-medium dark:text-white">
                                                {skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
                                        </figcaption>
                                </div>
                        </div>
                </figure>
        );
}

export function MarqueeDemo() {
        return (
                <div className="relative flex w-fit flex-col items-center justify-center overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:20s]">
                                {firstRow.map((skill) => (
                                        <ReviewCard key={skill.name} skill={skill} />
                                ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="[--duration:20s]">
                                {secondRow.map((skill) => (
                                        <ReviewCard key={skill.name} skill={skill} />
                                ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
        );
}
