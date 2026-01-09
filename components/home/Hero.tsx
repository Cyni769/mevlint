import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Hero = () => {
    
    const pathname = usePathname();

    return (
        <>
        {/* 3. HERO (ADDING PADDING TOP TO PREVENT CROP) */}
        {pathname == '/' &&
        <section className="h-screen flex flex-col justify-center px-8 md:px-20 lg:px-40 pt-32 border-b border-white/5 relative">
          <div className="max-w-6xl">
            <span className="hero-line text-[10px] uppercase tracking-[1em] opacity-30 mb-8 block text-[#ffcc33]">Sequence 01 // The Foundry Initialized</span>
            <h2 className="hero-line text-[12vw] md:text-[9vw] leading-[0.85] font-black tracking-tighter uppercase mb-12 italic">
              Imagine <br/> <span className="text-[#00e5ff]">Executable.</span>
            </h2>
            <div className="hero-line flex flex-col md:flex-row gap-16 items-start md:items-end mt-12 border-l border-[#ff4d4d] pl-10">
              <p className="max-w-md text-lg opacity-40 font-medium leading-relaxed uppercase italic">
                "Infrastructure for creators who build worlds, not just posts. We provide the gravity, you provide the vision."
              </p>
            </div>
          </div>
        </section>}
        </>
    );
};

export default Hero;