"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Terminal, Cpu, GitBranch, ArrowUpRight, ChevronRight } from 'lucide-react';

export default function UpdatesPage() {

interface MarqueeProps {
  text: string;
  speed?: number;
}

  const Marquee: React.FC<MarqueeProps> = ({ text, speed = 10 }) => {
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


  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger reveal for update logs
      gsap.from(".update-item", {
        x: -20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        }
      });
    }, listRef);
    return () => ctx.revert();
  }, []);

  const logs = [
    {
      version: "v1.0.4",
      date: "JAN 08, 2026",
      tag: "INFRASTRUCTURE",
      title: "Core Collaboration Foundry Deployed",
      description: "Implemented the base layer for team-based project spaces. This allows creators to link assets across disciplines without file versioning friction.",
      changes: ["Fixed asset linking latency", "Added multi-discipline tagging", "Improved IP hashing"]
    },
    {
      version: "v1.0.3",
      date: "JAN 03, 2026",
      tag: "UI/UX",
      title: "Brutalist Interface Overhaul",
      description: "Stripped back the 'social' noise. Replaced engagement-driven gradients with a high-gravity technical grid. The mission is clarity, not distraction.",
      changes: ["New Neon-Cyan palette", "Bento-grid optimization", "GSAP scroll-sync"]
    },
    {
      version: "v1.0.2",
      date: "DEC 28, 2025",
      tag: "ALGORITHM",
      title: "The Death of Engagement-Based Sorting",
      description: "Mevlint now prioritizes 'Skill-Builds'. Discoverability is now weighted by project complexity and technical tags rather than 'likes' or 'reach'.",
      changes: ["Removed 'Discovery' algorithm", "Implemented 'Skill-Search'", "Alpha waitlist expansion"]
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-[#00e5ff] min-h-screen font-mono selection:bg-[#00e5ff] selection:text-black">
            {/* Marquee Section */}
            <Marquee text="MEVLINT" />
      <div className="bg-[#0a1414] text-[#00b4d8] min-h-screen font-mono selection:bg-[#00b4d8] selection:text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-[#1a2e2e] sticky top-0 bg-[#0a1414]/80 backdrop-blur-md z-50">
        <div className="flex gap-8 text-sm uppercase tracking-widest text-[#00b4d8]/70">
          <a href="/" className="hover:text-[#00b4d8] transition-colors">Home</a>
          <a href="/explore" className="hover:text-[#00b4d8] transition-colors">Explore</a>
          <a href="/vision" className="hover:text-[#00b4d8] transition-colors">Vision</a>
          <a href="/updates" className="hover:text-[#00b4d8] transition-colors">Updates</a>
          <span className="text-[10px] animate-pulse bg-[#00e5ff] text-black px-2 py-1 font-bold">SYSTEMS: ONLINE</span>    
        </div>
        <button className="border border-[#00b4d8] px-6 py-1 text-sm font-bold hover:bg-[#00b4d8] hover:text-black transition-all">
          <a href="/waitlist">JOIN US</a>
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* HERO */}
        <header className="mb-32 border-l-8 border-[#00e5ff] pl-10">
          <p className="text-xs tracking-[0.5em] uppercase opacity-50 mb-4">Development Manifesto</p>
          <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
            WE BUILD<br/>IN PUBLIC.
          </h2>
          <p className="mt-8 text-xl max-w-xl opacity-80 italic">
            "No slop. No sugar-coating. Just the raw progression of the creative infrastructure."
          </p>
        </header>

        {/* LOG LIST */}
        <section ref={listRef} className="space-y-12">
          {logs.map((log, i) => (
            <article key={i} className="update-item grid grid-cols-12 border-4 border-[#00e5ff] group hover:bg-[#00e5ff]/5 transition-colors">
              
              {/* Sidebar Metadata */}
              <div className="col-span-12 md:col-span-3 border-b-4 md:border-b-0 md:border-r-4 border-[#00e5ff] p-6 flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-black italic block">{log.version}</span>
                  <span className="text-xs opacity-60 font-bold">{log.date}</span>
                </div>
                <div className="mt-8">
                  <span className="px-2 py-1 border border-[#00e5ff] text-[10px] font-black uppercase tracking-widest bg-[#00e5ff] text-black">
                    {log.tag}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="col-span-12 md:col-span-9 p-8 md:p-12 relative overflow-hidden">
                <Terminal className="absolute top-8 right-8 opacity-10" size={80} />
                
                <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-6 leading-none">
                  {log.title}
                </h3>
                <p className="text-lg opacity-80 mb-8 leading-relaxed max-w-2xl">
                  {log.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-[#00e5ff]/60">Changelog:</h4>
                  {log.changes.map((change, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/item">
                      <ChevronRight size={14} className="group-hover/item:translate-x-1 transition-transform" />
                      <span className="text-sm font-bold uppercase tracking-tight">{change}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-12 flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-transparent hover:border-[#00e5ff] transition-all">
                  Read Technical Breakdown <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* FOOTER CTA */}
        <section className="mt-32 border-4 border-[#00e5ff] p-12 text-center bg-[#00e5ff] text-black">
          <h3 className="text-4xl font-black uppercase italic mb-4">Have a Feature Suggestion?</h3>
          <p className="font-bold mb-8 uppercase tracking-widest opacity-80">We build based on demand, region, and trends.</p>
          <button className="bg-black text-[#00e5ff] px-12 py-4 font-black uppercase tracking-tighter hover:scale-105 transition-transform flex items-center gap-4 mx-auto">
            <GitBranch size={20} /> Open a Proposal
          </button>
        </section>
      </main>

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
  );
}