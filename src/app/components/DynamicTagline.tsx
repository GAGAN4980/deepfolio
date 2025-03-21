"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import MotionTag from "./MotionTag";

type TProps = {
    taglines: string[];
    className?: string;
};

export default function DynamicTagline({ taglines, className }: TProps) {
    let isMobile = false;
    if (typeof window !== "undefined") {
        isMobile = window.matchMedia("(max-width: 1024px)").matches;
    }
    const taglineRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (taglineRef.current) {
            const typed = new Typed(taglineRef.current, {
                strings: taglines,
                typeSpeed: 18,
                backSpeed: 9,
                loop: true,
            });

            return () => {
                typed.destroy();
            };
        }
    }, [taglineRef]);

    return (
        <MotionTag
            tag="div"
            variants={isMobile ? slideInFromTop(0.8) : slideInFromLeft(0.8)}
            initial="hidden"
            animate="visible"
            className="w-full flex justify-center lg:justify-start"
        >
            <div className={className}>
                <span ref={taglineRef} />
            </div>
        </MotionTag>
    );
}
