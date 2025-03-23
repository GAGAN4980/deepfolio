"use client";

import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import Image from "next/image";
import MotionTag from "./MotionTag";

export default function HeroTitle() {
    let isMobile = false;
    if (typeof window !== "undefined") {
        isMobile = window.matchMedia("(max-width: 1024px)").matches;
    }

    return (
        <div>
            <MotionTag
                tag="div"
                variants={slideInFromLeft(0.5)}
                initial={isMobile ? 'visible' : "hidden"}
                animate="visible"
                className="text-lg sm:text-xl md:text-2xl font-medium flex items-center w-full justify-center lg:justify-start"
            >
                {/* <Image
                    src="/logox.png"
                    alt="Gagandeep Singh Portfolio Logo"
                    className="w-7 h-7 mr-1 rounded-md"
                    width={28}
                    height={28}
                /> */}
                <h1>Hey there, I'm Gagandeep! 👋</h1>
            </MotionTag>

            <MotionTag
                tag="h1"
                variants={slideInFromLeft(0.6)}
                initial={isMobile ? 'visible' : "hidden"}
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl 1640:text-[3.25rem] font-bold text-center lg:text-start"
            >
                Delivering{" "}
                <span className="bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text">
                    scalable solutions
                </span>
            </MotionTag>

            <MotionTag
                tag="h1"
                variants={isMobile ? slideInFromTop(0.7) : slideInFromLeft(0.7)}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl 1640:text-[3.25rem] font-bold text-center lg:text-start mb-2"
            >
                through design, code, and cloud.
            </MotionTag>

            <MotionTag
                tag="p"
                variants={slideInFromLeft(0.8)}
                initial="hidden"
                animate="visible"
                className="mt-4 text-center lg:text-left text-base sm:text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 text-slate-200"
            >
                With 6+ years of experience in building enterprise-grade applications across Banking, Healthcare, and Aviation, I specialize in delivering robust full-stack solutions using .NET, React, and cloud platforms like Azure.
            </MotionTag>
        </div>
    );
}
