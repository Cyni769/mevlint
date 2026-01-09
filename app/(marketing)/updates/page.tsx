'use client';

import React, { useEffect, useRef } from "react";
import Link from "next/link"; // Integrated for seamless routing
import gsap from 'gsap';
import { 
  ArrowUpRight, Terminal, Cpu, GitBranch, 
  ChevronRight, Activity, Sparkles, MoveRight, Code 
} from 'lucide-react';
import Navbar from "@/components/layout/Navbar";

// --- DATA: SYSTEM PROTOCOLS ---
const LOGS = [
  {
    version: "v1.0.26",
    date: "JAN 08, 2026",
    tag: "ARCHITECTURE",
    title: "Masterpiece System Deployment",
    description: "Final unification of the Vanguard design system. Synchronized the Obsidian-Crimson-Cyan palette across all modules and implemented the balanced footer.",
    changes: ["Balanced footer alignment", "Techno-Bento Hub integration", "Typographic normalization"],
    accent: "text-[#00e5ff]",
    border: "border-[#00e5ff]/20"
  },
  {
    version: "v1.0.25",
    date: "JAN 08, 2026",
    tag: "ENGINE",
    title: "Archetype Film-Strip Engine",
    description: "Implemented high-fidelity horizontal scroll for creator archetypes with scanline visual textures.",
    changes: ["Dynamic scroll calculation", "Scanline CSS overlay", "Archetype metadata injection"],
    accent: "text-[#ff4d4d]",
    border: "border-[#ff4d4d]/20"
  },
  {
    version: "v1.0.24",
    date: "JAN 07, 2026",
    tag: "INFRASTRUCTURE",
    title: "Foundational Gravity Bento Hub",
    description: "Replaced linear feature lists with a multi-span Bento Hub. Technical command center for IP security.",
    changes: ["Asymmetric grid logic", "Technical HUD icon integration", "Lore-Sync protocol"],
    accent: "text-[#ffcc33]",
    border: "border-[#ffcc33]/20"
  }
];

export default function UpdatesVanguard() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Immediate state reset for clean entrance
    gsap.set(".hero-line, .log-entry, .entrance-fade", { opacity: 0, y: 30 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".hero-line", { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .to(".log-entry", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out"
      }, "-=0.4")
      .to(".entrance-fade", {
        opacity: 1,
        duration: 1
      }, "-=0.3");

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#00e5ff] selection:text-black overflow-x-hidden tracking-tight">
      
      {/* 1. ATMOSPHERIC NOISE */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

      <Navbar />

      <main className="relative z-10">
        {/* 3. HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center px-8 md:px-20 lg:px-40 pt-32">
          <div className="max-w-6xl">
            <span className="hero-line text-[10px] uppercase tracking-[1em] text-[#ffcc33] mb-8 block font-bold italic">Protocol 04 // Progression</span>
            <h2 className="hero-line text-[12vw] md:text-[9vw] leading-[0.85] font-black tracking-tighter uppercase mb-12 italic">
              Build <br/> <span className="text-[#00e5ff]">In Public.</span>
            </h2>
            <div className="hero-line flex flex-col md:flex-row gap-16 items-start md:items-end mt-12 border-l-2 border-[#ff4d4d] pl-10">
              <p className="max-w-xl text-lg md:text-2xl opacity-40 font-medium leading-relaxed uppercase italic">
                "Transparency in the creative forge. Tracking the evolution of cinematic infrastructure."
              </p>
            </div>
          </div>
        </section>

        {/* 4. LOGS SECTION */}
        <section className="py-40 px-8 md:px-20 lg:px-40 bg-[#0a0f1a] border-y border-white/5 relative">
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[linear-gradient(#00e5ff_1px,transparent_1px),linear-gradient(90deg,#00e5ff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          <div className="mb-32 relative z-10 hero-line">
            <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 block mb-4 font-bold font-mono text-[#00e5ff]">FEED: LIVE_ENCRYPTION</span>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">System <br/> Evolution.</h3>
          </div>

          <div className="log-container space-y-6 relative z-10">
            {LOGS.map((log, i) => (
              <article key={i} className={`log-entry border border-white/10 bg-[#111827] p-8 md:p-16 hover:bg-[#1f2937] transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-12 relative overflow-hidden rounded-sm group ${log.border}`}>
                <Code size={120} className="absolute -bottom-10 -right-10 opacity-[0.01] group-hover:opacity-[0.05] transition-opacity" />
                
                <div className="md:col-span-3 border-r border-white/5 pr-8">
                   <div className="flex flex-col gap-2 mb-8">
                     <span className={`text-5xl font-black italic tracking-tighter ${log.accent}`}>{log.version}</span>
                     <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.3em]">{log.date}</span>
                   </div>
                   <span className="px-3 py-1 border border-white/10 text-[9px] font-black uppercase tracking-widest opacity-40 inline-block bg-white/5">{log.tag}</span>
                </div>

                <div className="md:col-span-7">
                  <Link href="/updates/preview" className="block group">
                    <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-white leading-none group-hover:text-[#00e5ff] transition-colors cursor-pointer">
                      {log.title}
                    </h4>
                  </Link>
                  <p className="text-base opacity-40 leading-relaxed uppercase font-medium italic mb-10 max-w-2xl">{log.description}</p>
                  <div className="space-y-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#ffcc33] opacity-60 block underline underline-offset-8">Commits // Audits:</span>
                    <div className="grid grid-cols-1 gap-3">
                      {log.changes.map((change, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-tight opacity-40 group-hover:opacity-100 transition-opacity">
                          <ChevronRight size={12} className={log.accent} />
                          <span>{change}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* INTERACTIVE PREVIEW LINK */}
                <div className="md:col-span-2 flex justify-end items-start pt-2">
                   <Link href="/updates/preview" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:border-[#00e5ff] group-hover:text-[#00e5ff] transition-all duration-300 cursor-pointer">
                     <ArrowUpRight size={24} />
                   </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. PROPOSAL CTA */}
        <section className="entrance-fade bg-white text-black py-40 px-8 text-center border-t border-black relative z-20">
          <h3 className="text-5xl md:text-9xl font-black uppercase italic tracking-tighter mb-8 leading-none">PROPOSAL.</h3>
          <Link href="/proposal" className="group bg-black text-white px-12 py-5 font-black uppercase tracking-[0.2em] flex items-center gap-6 mx-auto hover:bg-[#00e5ff] hover:text-black transition-all w-fit">
            <GitBranch size={20} />
            <span>Open a feature proposal</span>
            <MoveRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </section>
      </main>

      {/* 6. BALANCED FOOTER */}
      <footer className="entrance-fade bg-black px-8 md:px-20 py-24 border-t border-white/10 font-sans min-h-[500px] flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-6 flex flex-col justify-between h-full min-h-[250px]">
            <div>
              <h2 className="text-6xl font-black italic tracking-tighter mb-8 text-[#00e5ff]">MEVLINT</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-20 leading-loose max-w-sm font-bold">
                Infrastructure for the cinematic vanguard. Built to support craft, credit, and community.
              </p>
            </div>
            <p className="text-[10px] opacity-30 mt-auto font-black tracking-[0.2em] uppercase">© 2026 Mevlint Foundry</p>
          </div>
          
          <div className="md:col-span-3 space-y-10">
            <h5 className="text-[10px] uppercase tracking-[0.5em] opacity-40 border-b border-white/10 pb-4 font-bold font-sans">Directory</h5>
            <ul className="text-[10px] font-black uppercase space-y-6 tracking-widest font-sans">
              <li><Link href="/" className="hover:text-[#00e5ff]">Home</Link></li>
              <li><Link href="/explore" className="hover:text-[#00e5ff]">Explore</Link></li>
              <li><Link href="/vision" className="hover:text-[#ff4d4d]">Vision</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between items-end border-l border-white/5 pl-8 h-full min-h-[250px]">
            <div className="text-5xl font-black opacity-[0.05] [writing-mode:vertical-rl] tracking-tighter uppercase mb-auto h-fit text-white">DevLogs</div>
          </div>
        </div>
      </footer>
    </div>
  );
}