'use client';

import React, { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Plus, X, PenTool, Film,
  Mic, UserCircle, Palette, ArrowRight, Bookmark,
  Command, Globe, Sparkles, MoveRight, Layers, Cpu, Scan, Activity,
  ChevronDown, Workflow, Shield, Zap, Map, Moon, Sun, Cross
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- DATA: THE FOUNDRY MANIFESTOS ---
const ALL_PROFESSIONS = [
  { id: "writing", title: "Writing & Storytelling", icon: PenTool, hook: "Adaptation-ready lore.", details: "Infrastructure to turn scripts into series. Mevlint provides lore-management tools to keep your world-building consistent.", benefit: "Pipeline to animators seeking source material." },
  { id: "animation", title: "Animation", icon: Film, hook: "Narrative fuel.", details: "Access high-fidelity scripts. Stop searching for 'what' to animate and build the 'how' with established writers.", benefit: "Original anime and series foundry." },
  { id: "cinematic", title: "Cinematic Media", icon: Layers, hook: "The light table.", details: "Frame-centric asset management. Organize shots, lighting references, and camera data in a professional cinematic reel.", benefit: "Signal technical prowess to production houses." },
  { id: "art", title: "Art & Illustration", icon: Palette, hook: "Production Blueprints.", details: "Illustrations designed for execution. Your concept art acts as the 3D environment or character model base.", benefit: "Bridge the gap between concept and 3D production." },
  { id: "acting", title: "Acting & Direction", icon: UserCircle, hook: "Performance Signal.", details: "Find projects in early development. Actors signal interest; directors find the talent to fill their frames.", benefit: "Real-time discovery of cinematic casting calls." },
  { id: "sound", title: "Sound & Post", icon: Mic, hook: "Sonic Architecture.", details: "Every world needs a soundscape. Find projects requiring foley, scores, and editorial precision.", benefit: "Collaborate with filmmakers in post-production." }
];

const VANGUARD_ARCHETYPES = [
  { t: "The Animator", d: "Fluid motion, digital soul.", img: "bg-[#00e5ff]/10", accent: "text-[#00e5ff]" },
  { t: "The Visionary", d: "Light as a narrative tool.", img: "bg-white/10", accent: "text-white" },
  { t: "The Scribe", d: "Architect of lore and logic.", img: "bg-[#ff4d4d]/10", accent: "text-[#ff4d4d]" },
  { t: "The Composer", d: "The sonic heartbeat.", img: "bg-[#ffcc33]/10", accent: "text-[#ffcc33]" },
  { t: "The Director", d: "Orchestrating gravity.", img: "bg-[#00e5ff]/5", accent: "text-[#00e5ff]" }
];

const LORE_NODES = [
  { id: "A-1", label: "Crimson Directive", status: "Active", x: "20%", y: "30%" },
  { id: "B-2", label: "Anima City", status: "Syncing", x: "70%", y: "50%" },
  { id: "C-3", label: "Holdit Protocol", status: "Encrypted", x: "40%", y: "80%" }
];

export default function MevlintVanguardMasterpiece() {
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const mainRef = useRef(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Sequence
      const tl = gsap.timeline();
      tl.from(".hero-line", { y: 60, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out" })
        .from(".entrance-fade", { opacity: 0, duration: 1 }, "-=0.5");

      // 2. Horizontal Scroll Engine
      if (wrapperRef.current && horizontalRef.current) {
        const scrollAmount = wrapperRef.current.scrollWidth - window.innerWidth;
        gsap.to(wrapperRef.current, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${scrollAmount}`,
          }
        });
      }

      // 3. Section Reveals
      gsap.utils.toArray(".reveal-up").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 90%" },
          y: 40, opacity: 0, duration: 1, ease: "power3.out"
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#00e5ff] selection:text-black overflow-x-hidden tracking-tight">

      {/* 1. ATMOSPHERIC OVERLAY (MOVED TO BACKGROUND LAYER) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

      {/* 2. NAVIGATION (HEADER CROP FIX) */}
      <nav className="fixed top-0 w-full px-8 md:px-20 py-10 flex justify-between items-center z-[250] bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <h1 className="text-xl font-black tracking-tighter uppercase"><a href="/">MEVLINT</a></h1>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest hidden md:flex opacity-40">
          <a href="/explore" className="hover:text-[#00e5ff] transition-colors">Explore</a>
          <a href="/vision" className="hover:text-[#ff4d4d] transition-colors">Vision</a>
          <div className="flex items-center gap-2 text-[#00e5ff]">
            <Activity size={10} className="animate-pulse" />
            <a href="/updates">Logs</a>
          </div>
        </div>
        <a href="/waitlist" className="bg-[#00e5ff] text-black px-8 py-2 rounded-full font-black text-[10px] tracking-widest hover:bg-white transition-all">JOIN PRODUCTION</a>
      </nav>

      <main className="relative z-10">

        {/* 3. HERO (ADDING PADDING TOP TO PREVENT CROP) */}
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
        </section>

        {/* 4. THE FOUNDRY: HIGH-CONTRAST INDUSTRIAL (DROPDOWN STYLE) */}
        <section className="reveal-up py-40 px-8 md:px-20 lg:px-40 bg-[#e5e5e5] text-black relative z-20">
          <div className="mb-24 flex justify-between items-end border-b border-black/10 pb-8">
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">The Foundry.</h3>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Selection // 02</span>
          </div>

          <div className="space-y-4">
            {ALL_PROFESSIONS.map((role) => (
              <div key={role.id} className={`border-b border-black/10 transition-all duration-500 overflow-hidden ${activeRole === role.id ? 'bg-black/5' : ''}`}>
                <button
                  onClick={() => setActiveRole(activeRole === role.id ? null : role.id)}
                  className="w-full flex items-center justify-between py-10 px-4 group"
                >
                  <div className="flex items-center gap-8">
                    <role.icon size={24} className={activeRole === role.id ? 'text-[#ff4d4d]' : 'opacity-20'} />
                    <h4 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter italic transition-all ${activeRole === role.id ? 'translate-x-4' : 'group-hover:translate-x-2'}`}>
                      {role.title}
                    </h4>
                  </div>
                  <ChevronDown className={`transition-transform duration-500 ${activeRole === role.id ? 'rotate-180 text-[#ff4d4d]' : 'opacity-20'}`} size={32} />
                </button>

                <div className={`transition-all duration-700 ease-in-out ${activeRole === role.id ? 'max-h-[500px] opacity-100 py-12 px-16' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                      <p className="text-xl font-black uppercase text-[#ff4d4d] mb-4 underline decoration-2">{role.hook}</p>
                      <p className="text-base font-medium opacity-60 uppercase leading-loose">{role.details}</p>
                    </div>
                    <div className="flex flex-col justify-end items-end text-right">
                      <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-20 mb-4 italic">Pipeline Protocol</span>
                      <p className="text-2xl font-black tracking-tighter uppercase">{role.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. THE FILM STRIP: VANGUARD ARCHEOTYPES */}
        <section ref={horizontalRef} className="h-screen overflow-hidden bg-black flex items-center border-y border-white/5">
          <div ref={wrapperRef} className="flex h-[75vh] gap-4 px-[15vw] items-center">
            <div className="min-w-[45vw] md:min-w-[35vw] flex flex-col justify-center whitespace-normal">
              <span className="text-[10px] uppercase tracking-[1em] text-[#ffcc33] mb-6 font-bold">Focus // 03</span>
              <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-10 italic">Vanguard <br/> Archetypes.</h3>
            </div>
            {VANGUARD_ARCHETYPES.map((panel, i) => (
              <div key={i} className="min-w-[70vw] md:min-w-[40vw] h-full border border-white/10 relative group cursor-crosshair overflow-hidden">
                <div className={`absolute inset-0 ${panel.img} group-hover:scale-110 transition-transform duration-[2s] ease-out`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute bottom-12 left-12 z-10">
                  <span className={`block text-[10px] uppercase tracking-[0.6em] mb-4 opacity-40 font-bold ${panel.accent}`}>Role // 0{i + 1}</span>
                  <h4 className="text-5xl md:text-6xl font-black italic mb-4 uppercase tracking-tighter leading-none">{panel.t}</h4>
                  <p className="text-sm uppercase tracking-[0.2em] opacity-60 font-medium max-w-xs">{panel.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SYSTEM GRAVITY: BENTO HUD */}
        <section className="reveal-up py-40 px-8 md:px-20 lg:px-40 bg-[#05080d] border-b border-white/5 relative">
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[linear-gradient(#00e5ff_1px,transparent_1px),linear-gradient(90deg,#00e5ff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          <div className="mb-20">
            <div className="w-16 h-1 bg-[#00e5ff] mb-6"></div>
            <h3 className="text-6xl font-black tracking-tighter leading-none uppercase italic">System <br/> <span className="text-[#ffcc33]">Gravity.</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="md:col-span-2 md:row-span-2 border border-[#00e5ff]/20 p-12 bg-[#05080d] flex flex-col justify-between hover:border-[#00e5ff] transition-all group">
              <Scan size={40} className="text-[#00e5ff] opacity-10 group-hover:opacity-100 transition-opacity" />
              <p className="text-2xl font-medium opacity-80 leading-relaxed uppercase italic">
                "Technical underpinnings that keep lore anchored. Infrastructure for cinematic execution. No slop."
              </p>
              <div className="flex gap-4 items-center">
                <Cpu size={32} className="text-[#00e5ff] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40">Core_Engine_Sync_Active</span>
              </div>
            </div>

            <div className="md:col-span-2 border border-white/10 p-10 hover:bg-[#00e5ff]/5 transition-all group">
               <h4 className="text-xl uppercase font-black flex justify-between">Global Sync <Globe size={20} className="text-[#00e5ff]" /></h4>
               <p className="text-xs opacity-30 font-bold uppercase tracking-widest leading-loose mt-4">Direct discovery for specialized cinematic talent.</p>
            </div>

            <div className="border border-white/10 p-10 hover:bg-[#ff4d4d]/5 transition-all group">
              <h4 className="text-lg uppercase font-black mb-4 group-hover:text-[#ff4d4d]">Velocity</h4>
              <div className="h-1 w-8 bg-[#ff4d4d] mb-4 group-hover:w-full transition-all"></div>
              <p className="text-[10px] opacity-30 uppercase font-black tracking-widest leading-tight">Editorial handoffs.</p>
            </div>

            <div className="border border-white/10 p-10 hover:bg-[#ffcc33]/5 transition-all group">
              <h4 className="text-lg uppercase font-black mb-4 group-hover:text-[#ffcc33]">IP Sanctuary</h4>
              <div className="h-1 w-8 bg-[#ffcc33] mb-4 group-hover:w-full transition-all"></div>
              <p className="text-[10px] opacity-30 uppercase font-black tracking-widest leading-tight">Immutable Attribution.</p>
            </div>
          </div>
        </section>

        {/* SECTION 7: CYBER-TACTICAL OVERLAY (Lore Mapping Mode) */}
        <section className="reveal-up py-40 px-8 md:px-20 lg:px-40 bg-[#050505] relative overflow-hidden border-b border-white/5">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <span className="text-[10px] uppercase tracking-[1em] text-[#ff4d4d] font-bold block">Module // 07</span>
              <h3 className="text-6xl font-black uppercase italic tracking-tighter">Tactical <br/> Lore-Mapping.</h3>
              <p className="text-lg opacity-40 uppercase italic leading-loose max-w-md">
                Visualize the narrative connectivity of the Crimson Directive. Every beat is a node; every node is a mission.
              </p>
              <div className="flex gap-6">
                <button className="px-6 py-2 border border-[#00e5ff] text-[#00e5ff] text-[10px] font-black uppercase tracking-widest hover:bg-[#00e5ff] hover:text-black transition-all">Init Scan</button>
                <button className="px-6 py-2 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest hover:border-white transition-all">View Nodes</button>
              </div>
            </div>

            {/* THE MAP VISUALIZER */}
            <div className="flex-1 w-full aspect-square border border-white/10 relative bg-[#080808] group overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00e5ff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
               {LORE_NODES.map((node) => (
                 <div
                   key={node.id}
                   style={{ left: node.x, top: node.y }}
                   className="absolute group/node cursor-crosshair"
                 >
                   <div className="w-4 h-4 bg-[#00e5ff] rounded-full animate-ping absolute opacity-50"></div>
                   <div className="w-4 h-4 bg-[#00e5ff] relative border-2 border-black"></div>
                   <div className="absolute left-6 top-0 bg-black border border-white/10 p-4 opacity-0 group-hover/node:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#00e5ff]">{node.id} // {node.status}</p>
                      <p className="text-sm font-black uppercase tracking-tighter italic">{node.label}</p>
                   </div>
                 </div>
               ))}
               <div className="absolute bottom-8 left-8 text-[8px] font-mono opacity-20 uppercase tracking-[0.5em]">
                  Coordinate_System_v1.0.26 // Global_Sync
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: THE SABBATH MODULE (Rest & Growth) */}
        <section className="reveal-up py-40 bg-[#f5f5f5] text-black">
          <div className="px-8 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-20">
             <div className="flex-1">
               <div className="flex items-center gap-4 mb-8">
                 <Cross size={24} strokeWidth={3} className="text-[#ff4d4d]" />
                 <span className="text-[10px] uppercase tracking-[1em] font-black opacity-30">Vision // 08</span>
               </div>
               <h3 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-10">Rest to <br/> Build.</h3>
               <p className="text-xl font-medium opacity-60 uppercase italic max-w-sm">
                 Discipline is not just in the code; it's in the pause. Faith, tradition, and the Sabbath are the roots of the Vanguard.
               </p>
             </div>

             <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="aspect-square bg-black p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-help">
                   <Moon className="text-[#ffcc33]" size={32} />
                   <p className="text-[10px] font-black uppercase tracking-widest text-white">Spiritual <br/> Growth</p>
                </div>
                <div className="aspect-square border-4 border-black p-10 flex flex-col justify-center gap-4">
                   <div className="h-1 w-full bg-black"></div>
                   <div className="h-1 w-2/3 bg-black"></div>
                   <p className="text-[10px] font-black uppercase tracking-widest">Minimalist <br/> Rest</p>
                </div>
                <div className="col-span-2 p-12 border-2 border-black flex items-center justify-between group cursor-pointer">
                   <span className="text-2xl font-black uppercase italic tracking-tighter">Enter Quiet Mode</span>
                   <Sun className="group-hover:rotate-90 transition-transform duration-700" size={40} />
                </div>
             </div>
          </div>
        </section>

        {/* 9. FIN SEQUENCE */}
        <section className="reveal-up bg-[#000000] min-h-screen flex flex-col justify-center items-center text-center px-8 relative">
          <Sparkles className="text-[#ffcc33] mb-12 opacity-20 animate-pulse" size={60} />
          <h2 className="text-[16vw] md:text-[12vw] font-black italic tracking-tighter uppercase leading-none hover:text-[#00e5ff] transition-all duration-1000 cursor-pointer">
            FIN.
          </h2>
          <div className="mt-20 flex flex-col items-center gap-12">
            <a href="/waitlist" className="group flex items-center gap-8 text-sm uppercase tracking-[0.6em] border-b border-white/20 pb-4 hover:border-[#00e5ff] transition-all font-black">
              Request Production Access <ArrowRight className="group-hover:translate-x-4 transition-transform text-[#ff4d4d]" />
            </a>
          </div>
        </section>
      </main>

      {/* 10. BALANCED FOOTER */}
      <footer className="entrance-fade bg-black px-8 md:px-20 py-24 border-t border-white/10 font-sans min-h-[500px] flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-6 flex flex-col justify-between h-full min-h-[250px]">
            <div>
              <h2 className="text-6xl font-black italic tracking-tighter mb-8 text-[#00e5ff]">MEVLINT</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-20 leading-loose max-w-sm font-bold">
                Infrastructure for the cinematic vanguard. Built to support craft, credit, and community.
              </p>
            </div>
            {/* Copyright Pinned to Bottom Left Baseline */}
            <p className="text-[10px] opacity-30 mt-auto font-black tracking-[0.2em] uppercase">© 2026 Mevlint Foundry</p>
          </div>

          <div className="md:col-span-3 space-y-10">
            <h5 className="text-[10px] uppercase tracking-[0.5em] opacity-40 border-b border-white/10 pb-4 font-bold font-sans">Directory</h5>
            <ul className="text-[10px] font-black uppercase space-y-6 tracking-widest">
              <li><a href="/" className="hover:text-[#00e5ff]">System Home</a></li>
              <li><a href="/explore" className="hover:text-[#00e5ff]">Explore</a></li>
              <li><a href="/vision" className="hover:text-[#ff4d4d]">Vision</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between items-end border-l border-white/5 pl-8 h-full min-h-[250px]">
            {/* Sitemap Vertical Text Pinned to Top Right */}
            <div className="text-5xl font-black opacity-[0.05] [writing-mode:vertical-rl] tracking-tighter uppercase mb-auto h-fit text-white font-sans">Sitemap</div>
          </div>
        </div>
      </footer>
    </div>
  );
}