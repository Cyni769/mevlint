import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <>
        /* Main Box Style */
        <div className="flex flex-col w-auto border-secondary border-t-0 border p-6 justify-center max-sm:p-4 max-sm:gap-y-2 max-sm:border-t-0 max-md:border-t-0 max-lg:border-t-0 max-sm:text-left max-sm:top-0">
            <p className="w-auto text-mono font-bold tracking-tight text-xl">Collaborate with creators · Build worlds · Make dreams real
            </p>
        </div>
            <div className="flex flex-col w-auto border-secondary border-t-0 border p-6 items-start max-sm:p-4 max-sm:gap-y-2 max-sm:border-t-0 max-md:border-t-0 max-lg:border-t-0 max-sm:text-left max-sm:top-0">
                <Link href="/">
                 <h1 className="text-8xl justify-center uppercase tracking-tight max-sm:text-6xl max-md:text-7xl max-lg:text-8xl">Mevlint
                 </h1>
                </Link>
                <p className="text-xl w-full text-right max-sm:text-left max-sm:text-base">Collaborate with creators and make dream come true</p>
            </div>
                <div className="flex flex-row w-auto h-102 border-secondary border-t-0 border items-start max-sm:flex-col max-sm:h-auto max-sm:border-t-0 max-md:border-t-0 max-lg:border-t-0 max-md:h-auto max-lg:h-auto">
                <div className="bg-primary h-full w-1200 max-sm:w-full max-sm:h-60 max-md:w-full max-md:h-80 max-lg:w-full max-lg:h-100">
                    // Placeholder for image or video
                </div>
                    <div className="flex flex-row w-full m-4 justify-end max-sm:flex-col max-sm:justify-center max-sm:items-start max-sm:m-2 max-md:m-2 max-md:h-auto max-lg:m-2 max-lg:h-auto">
                    <div className="flex flex-col text-right max-sm:text-left m-4 max-md:m-2 max-sm:m-2">
                        <p className="text-4xl font-bold font-mono max-sm:text-2xl max-md:text-3xl max-lg:text-4xl">70+</p>
                        <p className="text-x tracking-wider font-mono font-light">Field & Professions</p>
                    </div>
                    </div>
        </div>
        </>
    );
};

export default Hero;