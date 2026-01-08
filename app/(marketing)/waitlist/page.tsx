'use client';

import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface MarqueeProps {
  text: string;
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, speed = 10 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textWidth = textRef.current?.offsetWidth || 0;
      // Animate the movement
      gsap.to(textRef.current, {
        x: -textWidth / 2,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, [speed]);

  return (
    <div 
      ref={containerRef} 
      className="overflow-hidden border-y border-[#00b4d8] py-4 bg-[#0a1414] whitespace-nowrap flex"
    >
      <div ref={textRef} className="flex gap-4 items-center">
        {/* We repeat the text to ensure a seamless loop */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl font-black italic uppercase text-[#00b4d8]">
            {text} <span className="mx-4 text-[#00b4d8]/30">~</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// Reusing Navbar and Footer for consistency
const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 border-b border-[#1a2e2e] sticky top-0 bg-[#0a1414]/80 backdrop-blur-md z-50">
    <div className="flex gap-8 text-sm uppercase tracking-widest text-[#00b4d8]/70">
      <a href="/" className="hover:text-[#00b4d8] transition-colors">Home</a>
      <a href="/explore" className="hover:text-[#00b4d8] transition-colors">Explore</a>
      <a href="/vision" className="hover:text-[#00b4d8] transition-colors">Vision</a>
      <a href="/updates" className="hover:text-[#00b4d8] transition-colors">Updates</a>
    </div>
    <div className="text-[#00b4d8] font-bold text-sm uppercase tracking-widest">
      Join Us
    </div>
  </nav>
);

const Footer = () => (
  <footer className="border-t border-[#1a2e2e] p-12 bg-black/40">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div>
            <h2 className="text-5xl font-black italic mb-12">MEVLINT</h2>
            <div className="grid grid-cols-2 gap-20">
              <div className="space-y-4">
                <h5 className="text-[10px] opacity-50 uppercase tracking-[0.3em]">Home</h5>
                <div className="flex flex-col gap-2 text-xs font-bold uppercase">
                  <a href="#">Mevlint</a> <a href="#">Terms</a> <a href="#">Explore</a> <a href="#">Vision</a>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-[10px] opacity-50 uppercase tracking-[0.3em]">Socials</h5>
                <div className="flex flex-col gap-2 text-xs font-bold uppercase">
                  <a href="#">Instagram</a> <a href="#">Facebook</a> <a href="#">Youtube</a> <a href="#">X</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right flex flex-col justify-between h-full">
            <div className="text-[10px] uppercase tracking-[0.4em] opacity-40 [writing-mode:vertical-rl] mb-12">
              SITEMAP
            </div>
            <p className="text-[10px] font-bold">Mevlint @2026</p>
          </div>
        </div>
      </footer>
);

export default function WaitlistPage() {
  const benefits = [
    "Early access to project collaboration tools.",
    "Founding member profile badge.",
    "Direct input on feature development roadmap.",
    "Exclusive invites to creator showcases."
  ];

  return (

    <div className="bg-[#0a1414] text-[#00b4d8] min-h-screen font-mono selection:bg-[#00b4d8] selection:text-black">
              {/* Marquee Section */}
              <Marquee text="MEVLINT" />

    <div className="bg-[#0a1414] text-[#00b4d8] min-h-screen font-mono selection:bg-[#00b4d8] selection:text-black">
      <Navbar />

      <main className="grow flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 border border-[#1a2e2e]">
          
          {/* Left Column: The Form */}
          <div className="p-12 md:p-16 border-r-0 md:border-r border-[#1a2e2e] bg-[#0a1414]">
            <header className="mb-10">
              <h1 className="text-5xl font-black italic tracking-tighter mb-4">JOIN THE WAITLIST</h1>
              <p className="text-lg opacity-80">
                Secure your spot in the next generation creative ecosystem. We are onboarding creators in phases.
              </p>
            </header>

            <form className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold opacity-70">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#1a2e2e]/50 border border-[#1a2e2e] p-4 text-[#00b4d8] focus:border-[#00b4d8] focus:outline-none transition-colors placeholder-[#00b4d8]/30"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold opacity-70">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#1a2e2e]/50 border border-[#1a2e2e] p-4 text-[#00b4d8] focus:border-[#00b4d8] focus:outline-none transition-colors placeholder-[#00b4d8]/30"
                  placeholder="name@example.com"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="role" className="text-xs uppercase tracking-widest font-bold opacity-70">Primary Discipline</label>
                <select 
                  id="role" 
                  className="w-full bg-[#1a2e2e]/50 border border-[#1a2e2e] p-4 text-[#00b4d8] focus:border-[#00b4d8] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option>Select your role...</option>
                  <option>Animator</option>
                  <option>Filmmaker / Director</option>
                  <option>Writer / Storyteller</option>
                  <option>Artist / Illustrator</option>
                  <option>Sound / Audio Engineer</option>
                  <option>Other</option>
                </select>
              </div>
              
              <button type="submit" className="w-full bg-[#00b4d8] text-black p-4 font-black uppercase tracking-widest hover:bg-[#00d4ff] transition-all flex items-center justify-center gap-2 mt-8">
                Request Access <ArrowUpRight size={20} />
              </button>
            </form>
          </div>

          {/* Right Column: Benefits & Visual */}
          <div className="p-12 md:p-16 bg-[#00b4d8]/10 flex flex-col justify-center relative overflow-hidden group">
            {/* Abstract background element */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-[#00b4d8]/20 to-transparent opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase mb-8 tracking-widest">Why Join Early?</h3>
              <ul className="space-y-6">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-[#00b4d8] shrink-0" size={24} />
                    <span className="text-lg font-bold opacity-90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>

    </div>
  );
}