import Image from "next/image";
import Link from "next/link";
import ProjectTechStack from "./ProjectTechStack";
import { FaGithub, FaLink } from "react-icons/fa";

type TProps = {
    title: string;
    description: string;
    logo: string;
    repoLink: string;
    technologies: {
        icon: React.ReactNode;
        name: string;
    }[];
    link: string;
};

export default function ProjectCard({
    title,
    description,
    logo,
    technologies,
    link,
    repoLink,
}: TProps) {
    return (
        <div className=" lg:hover:bg-[rgb(255,255,255,0.05)] pl-0 lg:pl-2 p-2 rounded-lg transition-all duration-300 group relative">
            <Link href={link} target="_blank"> 
                <div className="flex items-center gap-2 mb-2 -translate-x-1 lg:translate-x-0">
                    <Image src={logo} alt={title} width={32} height={32} />
                    <h2 className="text-slate-100 text-sm font-bold group-hover:text-orange-500 transition-all duration-300">
                        {title}
                    </h2>
                </div>
                <p className="text-slate-350 text-xs lg:text-sm lg:px-2 !mb-0">
                    {description}
                </p>
            </Link>
            <div className="my-4 space-y-1">
                <Link
                    href={link}
                    target="_blank"
                    className="text-slate-350 !text-[11px] lg:text-sm lg:px-2 block hover:text-pink-500 transition-all duration-300"
                >
                    <FaLink
                        size={16}
                        className="inline-block mr-2 text-violet-500"
                    />
                    {link.split("://")[1]}
                </Link>
                {repoLink && (
                    <Link
                        href={repoLink}
                        target="_blank"
                        className="text-slate-350 !text-[11px] lg:text-sm lg:px-2 block hover:text-pink-500 transition-all duration-300"
                    >
                        <FaGithub
                            size={16}
                            className="inline-block mr-2 text-violet-500"
                        />
                        {repoLink.split("://")[1]}
                    </Link>
                )}
            </div>
            <ProjectTechStack technologies={technologies} />
        </div>
    );
}
