'use client'

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";

export default function TitleList({ titles }: { titles: string[] }) {
    let isMobile = false;
    if (typeof window !== "undefined") {
        isMobile = window.matchMedia("(max-width: 1024px)").matches;
    }

    // Updated teal–blue–indigo color palette
    const textColors = ["text-teal-400", "text-sky-400", "text-indigo-400"];
    const bgColors = ["bg-teal-950", "bg-sky-950", "bg-indigo-950"];

    return (
        <ul className="flex flex-wrap gap-2 w-full justify-center lg:justify-start mt-6">
            {titles.map((title, index) => (
                <motion.li
                    key={title}
                    variants={isMobile ? slideInFromTop(0.8 + index * 0.2) : slideInFromLeft(0.8 + index * 0.2)}
                    initial="hidden"
                    animate="visible"
                    className={`text-xs lg:text-[0.6rem] xl:text-xs font-bold ${textColors[index % textColors.length]} ${bgColors[index % bgColors.length]} p-1 px-2 rounded-full flex items-center`}
                >
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-1"></div>
                    {title}
                </motion.li>
            ))}
        </ul>
    );
}
