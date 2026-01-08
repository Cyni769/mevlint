'use client';

import React from "react";
import type { Metadata } from "next";
import Navbar from "../../components/layout/Navbar";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import ExplorePage from "./explore/page";
import WaitlistPage from "./waitlist/page";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Zap, Shield, Users, Globe } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

gsap.registerPlugin(ScrollTrigger);

export function AnimatedBento() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the container
      gsap.from(".bento-item", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="space-y-1">
      <div className="bento-item border border-[#1a2e2e] p-8">...</div>
      <div className="bento-item border border-[#1a2e2e] p-8">...</div>
    </section>
  );
}



const Landing = () => {
  return (
    <>

    <div className="bg-[#0a1414] text-[#00b4d8] min-h-screen font-mono selection:bg-[#00b4d8] selection:text-black">
      {/* Marquee Section */}
      <Marquee text="MEVLINT" />

    <div className="bg-[#0a1414] text-[#00b4d8] min-h-screen font-mono selection:bg-[#00b4d8] selection:text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-[#1a2e2e] sticky top-0 bg-[#0a1414]/80 backdrop-blur-md z-50">
        <div className="flex gap-8 text-sm uppercase tracking-widest text-[#00b4d8]/70">
          <a href="#" className="hover:text-[#00b4d8] transition-colors">Home</a>
          <a href="/explore" className="hover:text-[#00b4d8] transition-colors">Explore</a>
          <a href="/vision" className="hover:text-[#00b4d8] transition-colors">Vision</a>
          <a href="/updates" className="hover:text-[#00b4d8] transition-colors">Updates</a>
        </div>
        <button className="border border-[#00b4d8] px-6 py-1 text-sm font-bold hover:bg-[#00b4d8] hover:text-black transition-all">
          <a href="/waitlist">JOIN US</a>
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <header className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-80">
            Collaborate with creators • Build worlds • Make dreams real
          </p>
          <h1 className="text-8xl font-black italic tracking-tighter mb-4">MEVLINT</h1>
          <h2 className="text-3xl font-bold max-w-2xl mx-auto leading-tight">
            Built for Writers, Artists, Animators & Cinematic Creators
          </h2>
        </header>

        {/* Bento Hero Grid */}
        <section className="grid grid-cols-12 gap-1 mb-24 border border-[#1a2e2e]">
          <div className="col-span-12 md:col-span-6 bg-[#00b4d8] aspect-video"></div>
          <div className="col-span-12 md:col-span-6 p-10 flex flex-col justify-between border-l border-[#1a2e2e]">
            <p className="text-lg leading-relaxed text-[#00b4d8]/90">
              It's a purpose-built collaboration ecosystem for <span className="font-bold">artists, animators, filmmakers, writers, actors</span>, and <span className="font-bold">cinematic creators</span> who are tired of noise and hungry for meaningful work.
            </p>
            <div className="text-right">
              <h3 className="text-2xl font-black italic opacity-60">MORE FEATURES COMING SOON</h3>
            </div>
          </div>
        </section>

        {/* Creator Capabilities */}
        <section className="grid grid-cols-12 border border-[#1a2e2e] mb-24 group">
          <div className="col-span-12 md:col-span-8 p-10">
            <h3 className="text-xl font-black uppercase mb-6 tracking-widest">CREATOR CAN DO</h3>
            <ul className="space-y-2 opacity-80 text-sm list-disc list-inside">
              <li>Post your work</li>
              <li>Discover collaborators</li>
              <li>Signal job or project interest</li>
              <li>Build a professional yet expressive creative identity</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4 bg-[#00b4d8] p-8 flex flex-col justify-between group-hover:bg-[#00d4ff] transition-colors cursor-pointer">
            <ArrowUpRight className="self-end text-black" size={40} />
            <span className="text-black font-black text-2xl uppercase italic">Get Started</span>
          </div>
        </section>

        {/* Category Carousel Title */}
        <div className="text-center mb-12">
           <h3 className="text-3xl font-light italic">~ FOR CREATORS WORKING WITH ~</h3>
        </div>

        {/* Categories Grid */}
        <section className="grid grid-cols-2 md:grid-cols-5 border border-[#1a2e2e] mb-24">
          {['Animation', 'Cinematic Media', 'Art & Illustration', 'Writing & Storytelling', 'Sound & Post'].map((cat, i) => (
            <div key={i} className="border-r border-[#1a2e2e] last:border-r-0 group cursor-pointer">
              <div className="aspect-3/4 border-b border-[#1a2e2e] group-hover:bg-[#00b4d8]/10 transition-colors"></div>
              <div className="p-4 text-center text-xs font-bold uppercase tracking-tighter">
                {cat}
              </div>
            </div>
          ))}
        </section>

        {/* Development Roadmap */}
        <section className="mb-24">
          <h2 className="text-6xl font-black italic mb-2 tracking-tighter">MEVLINT IS IN ACTIVE DEVELOPMENT.</h2>
          <p className="text-[#00b4d8]/70 mb-12 uppercase text-xs tracking-widest">We're onboarding creators in phases to protect quality and rights.</p>
          
          <div className="space-y-1">
            {[
              { title: "Weekly fixes", desc: "Early members help shape development and faster updates.", side: "Feedback help fixes" },
              { title: "Monthly feature expansions", desc: "Major updates include latest features to improve efficiency.", side: "Improves relevance" },
              { title: "Categories driven by demand", desc: "New categories and collaboration tools as per demand.", side: "Provide the best tools" }
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 border border-[#1a2e2e] hover:border-[#00b4d8] transition-all cursor-crosshair group">
                <div className="col-span-6 p-8 border-r border-[#1a2e2e] group-hover:bg-[#00b4d8] group-hover:text-black transition-all">
                  <h4 className="text-xl font-black uppercase mb-2">{item.title}</h4>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
                <div className="col-span-6 p-8 flex items-end justify-end italic opacity-50 text-xs uppercase">
                  {item.side}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 border-t border-[#1a2e2e]">
          <p className="text-xl italic mb-2">If you're building worlds</p>
          <h2 className="text-7xl font-black mb-12 italic tracking-tighter">YOU BELONG HERE.</h2>
          <div className="grid grid-cols-2 max-w-4xl mx-auto border border-[#1a2e2e]">
            <button className="p-12 border-r border-[#1a2e2e] hover:bg-[#1a2e2e] transition-all flex flex-col items-center gap-4 uppercase font-bold tracking-widest">
              <ArrowUpRight size={32} />
              Explore Features
            </button>
            <button className="p-12 bg-[#00b4d8] text-black hover:bg-[#00d4ff] transition-all flex flex-col items-center gap-4 uppercase font-bold tracking-widest">
              <ArrowUpRight size={32} />
              Join Waitlist
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
    
    </div>

    </>
  );
}

export default Landing;