'use client';

import React, { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Plus, X, Aperture, PenTool, Film, 
  Mic, UserCircle, Palette, ArrowRight, Bookmark, 
  Command, Globe, Sparkles, MoveRight, Scan, Focus,
  Layers, Shield, Zap, Users
} from 'lucide-react';
import Navbar from "@/components/layout/Navbar";

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---

const ALL_PROFESSIONS = [
  { id: "writing", title: "Writing & Storytelling", icon: PenTool, hook: "Adaptation-ready lore.", details: "Infrastructure to turn scripts into comics/films. Pipeline to animators seeking content.", benefit: "Direct source material pipeline." },
  { id: "animation", title: "Animation", icon: Film, hook: "Narrative fuel.", details: "Access high-fidelity scripts. Start building the 'how' with established writers.", benefit: "Original anime/series foundry." },
  { id: "cinematic", title: "Cinematic Media", icon: Layers, hook: "The light table.", details: "Frame-centric asset management. Signal technical prowess to production houses.", benefit: "Pro-level reel organization." },
  { id: "art", title: "Art & Illustration", icon: Palette, hook: "Production Blueprints.", details: "Illustrations designed for execution. Your art acts as the 3D environment base.", benefit: "Concept to 3D bridge." },
  { id: "acting", title: "Acting & Direction", icon: UserCircle, hook: "Performance Signal.", details: "Find projects in early development; signal interest in lore-heavy projects.", benefit: "Real-time casting discovery." },
  { id: "sound", title: "Sound & Post", icon: Mic, hook: "Sonic Architecture.", details: "Find projects requiring foley and scores during the assembly cut.", benefit: "Post-production collaboration hub." }
];

const SCENE_FEATURES = [
  { scene: "01", title: "Lore Sync", desc: "Live-link script beats to concept art storyboards.", accent: "text-[#00e5ff]" },
  { scene: "02", title: "IP Vault", desc: "Securely share treatments with full credit tracking.", accent: "text-[#ff4d4d]" },
  { scene: "03", title: "Asset Tags", desc: "Categorize by genre, mood, and complexity.", accent: "text-[#ffcc33]" },
  { scene: "04", title: "Global Hub", desc: "Built-in world-building wikis for teams.", accent: "text-white" }
];

const CORE_FEATURES = [
  { 
    icon: Users, 
    title: "Collaborative Hubs", 
    desc: "Persistent project spaces for teams to share assets, scripts, and real-time feedback.", 
    size: "md:col-span-2 md:row-span-2",
    accent: "group-hover:text-[#00e5ff]" 
  },
  { 
    icon: Shield, 
    title: "IP Protection", 
    desc: "On-chain rights management to secure your creative work and world-building assets.", 
    size: "md:col-span-2",
    accent: "group-hover:text-[#ff4d4d]" 
  },
  { 
    icon: Globe, 
    title: "Global Talent", 
    desc: "Discover specialized creators from every timezone via technical craft, not trends.", 
    size: "md:col-span-1",
    accent: "group-hover:text-[#ffcc33]" 
  },
  { 
    icon: Zap, 
    title: "Prototyping", 
    desc: "Tools to quickly animatic and visualize concepts together in the forge.", 
    size: "md:col-span-1",
    accent: "group-hover:text-white" 
  },
  { 
    icon: Layers, 
    title: "Lore Manifest", 
    desc: "Integrated wiki-style world-building tools to keep your universe's logic consistent.", 
    size: "md:col-span-1",
    accent: "group-hover:text-[#00e5ff]" 
  },
  { 
    icon: Command, 
    title: "Contract Forge", 
    desc: "Automated collaboration agreements that protect equity and creative credit.", 
    size: "md:col-span-1",
    accent: "group-hover:text-[#ff4d4d]" 
  },
  { 
    icon: Focus, 
    title: "Frame Loop", 
    desc: "Frame-accurate commenting and visual annotations for precise directorial feedback.", 
    size: "md:col-span-1",
    accent: "group-hover:text-[#ffcc33]" 
  },
  { 
    icon: Scan, 
    title: "Asset Versioning", 
    desc: "Track every iteration of a shot or character model with immutable history logs.", 
    size: "md:col-span-1",
    accent: "group-hover:text-white" 
  },
];

const VANGUARD_ARCHETYPES = [
  { t: "The Animator", d: "Fluid motion, digital soul.", img: "bg-[#00e5ff]/10", accent: "text-[#00e5ff]" },
  { t: "The Visionary", d: "Light as a narrative tool.", img: "bg-white/10", accent: "text-white" },
  { t: "The Scribe", d: "Architect of lore and logic.", img: "bg-[#ff4d4d]/10", accent: "text-[#ff4d4d]" },
  { t: "The Composer", d: "The sonic heartbeat of the frame.", img: "bg-[#ffcc33]/10", accent: "text-[#ffcc33]" },
  { t: "The Director", d: "Orchestrating creative gravity.", img: "bg-[#00e5ff]/5", accent: "text-[#00e5ff]" }
];

const CATEGORIES = [
  { scene: "01", icon: Film, title: "Animation & Cinematic Media", desc: "Directors, animators, and VFX artists building the future of motion.", accent: "text-[#00e5ff]" },
  { scene: "02", icon: PenTool, title: "Art & Illustration", desc: "Concept artists and designers defining the visual soul of every world.", accent: "text-[#ff4d4d]" },
  { scene: "03", icon: Mic, title: "Sound & Storytelling", desc: "Writers and sound designers crafting the narrative heartbeat.", accent: "text-[#ffcc33]" },
  { scene: "04", icon: Layers, title: "Worldbuilding & Lore", desc: "The architects of expansive, consistent universes and asset wikis.", accent: "text-white" },
];

export default function ExploreVanguard() {
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const mainRef = useRef(null);
  const horizontalRef1 = useRef<HTMLDivElement>(null);
  const wrapperRef1 = useRef<HTMLDivElement>(null);
  const horizontalRef2 = useRef<HTMLDivElement>(null);
  const wrapperRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.from(".hero-line", {
        y: 100, opacity: 0, stagger: 0.2, duration: 1.5, ease: "expo.out"
      });

      // 2. Horizontal Scroll for Writer's Pipeline (Section 5)
      if (wrapperRef1.current && horizontalRef1.current) {
        const scrollAmount1 = wrapperRef1.current.scrollWidth - window.innerWidth;
        gsap.to(wrapperRef1.current, {
          x: -scrollAmount1,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef1.current,
            pin: true,
            scrub: 1,
            end: () => `+=${scrollAmount1}`,
            invalidateOnRefresh: true,
          }
        });
      }

      // 3. Horizontal Scroll for Film Strip (Section 6)
      if (wrapperRef2.current && horizontalRef2.current) {
        const scrollAmount2 = wrapperRef2.current.scrollWidth - window.innerWidth;
        gsap.to(wrapperRef2.current, {
          x: -scrollAmount2,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef2.current,
            pin: true,
            scrub: 1,
            end: () => `+=${scrollAmount2}`,
            invalidateOnRefresh: true,
          }
        });
      }

      // 4. Global Section Raise-up
      gsap.utils.toArray(".raise-up").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 95%" },
          y: 80, opacity: 0, duration: 1.2, ease: "power3.out"
        });
      });

      // 5. Marquee Loop
      gsap.to(".marquee-inner", {
        xPercent: -50, repeat: -1, duration: 25, ease: "none"
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#00e5ff] selection:text-black overflow-x-hidden tracking-tight">
      
      {/* ATMOSPHERIC NOISE */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[300]"></div>

      <Navbar />

      <main>
        {/* 1. HERO: TYPOGRAPHIC FOCUS */}
        <section className="h-screen flex flex-col justify-center px-8 md:px-20 lg:px-40 relative">
          <div className="max-w-6xl">
            <span className="hero-line text-[10px] uppercase tracking-[1em] text-[#ffcc33] mb-8 block font-bold">Sequence 02 // Ecosystem</span>
            <h2 className="hero-line text-[12vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase mb-12 italic">
              Explore the <br/> <span className="text-[#00e5ff]">Foundry.</span>
            </h2>
            <div className="hero-line flex flex-col md:flex-row gap-16 items-start md:items-end mt-12 border-l-2 border-[#ff4d4d] pl-10">
              <p className="max-w-xl text-lg md:text-2xl opacity-40 font-medium leading-relaxed uppercase italic">
                A purpose-built hub where cinematic projects move from abstract lore to executable production.
              </p>
            </div>
          </div>
        </section>

        {/* 2. MARQUEE SEPARATOR */}
        <div className="bg-[#00e5ff] text-black py-6 overflow-hidden whitespace-nowrap border-y border-black sticky z-10">
          <div className="marquee-inner flex gap-20 font-black italic text-3xl uppercase tracking-tighter w-fit">
            {[...Array(8)].map((_, i) => (
              <span key={i}>Discovery Via Craft • Infrastructure for Imagination • </span>
            ))}
          </div>
        </div>

        {/* 3. CORE FEATURES: INDUSTRIAL BENTO */}
        
        <section className="raise-up py-40 px-8 md:px-20 lg:px-40 bg-[#0a0a0a] border-b border-white/5">
  <div className="mb-24">
    <div className="w-16 h-[1px] bg-[#00e5ff] mb-8"></div>
    <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 block mb-4 font-bold">Tools 01 // Capacity</span>
    <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">The Foundry <br/> <span className="text-white/20">Modules.</span></h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
    {CORE_FEATURES.map((item, i) => (
      <div 
        key={i} 
        className={`p-10 border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 group flex flex-col justify-between overflow-hidden relative ${item.size}`}
      >
        {/* Subtle Background Icon Decoration */}
        <item.icon size={120} strokeWidth={0.5} className="absolute -top-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700" />
        
        <div className="relative z-10">
          <item.icon size={28} strokeWidth={1.5} className={`opacity-40 group-hover:opacity-100 transition-all duration-500 ${item.accent}`} />
        </div>

        <div className="relative z-10">
          <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h4>
          <p className="text-[10px] opacity-30 font-bold uppercase tracking-widest leading-loose max-w-xs group-hover:opacity-60 transition-opacity">
            {item.desc}
          </p>
        </div>

        {/* Hover Corner Detail */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
           <Plus size={12} />
        </div>
      </div>
    ))}
  </div>
</section>

      {/* 4. THE FOUNDRY: CLEAN NON-INVERTING BENTO */}
      <section className="bg-[#0a0a0a] py-40 px-8 md:px-20 lg:px-40 border-b border-white/5">
        <div className="reveal mb-24 flex justify-between items-end border-b border-white/10 pb-8">
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">The Foundry.</h3>
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold">02 // ROLE SELECTION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10">
          {ALL_PROFESSIONS.map((role) => (
            <div 
              key={role.id}
              onClick={() => setActiveRole(activeRole === role.id ? null : role.id)}
              className={`relative p-12 border border-white/10 cursor-pointer transition-all duration-500
                ${activeRole === role.id ? 'bg-[#111] border-[#00e5ff]' : 'hover:bg-white/[0.02]'}
              `}
            >
              <div className="flex justify-between items-start mb-20">
                <role.icon size={20} className={activeRole === role.id ? 'text-[#00e5ff]' : 'text-white opacity-20'} />
                {activeRole === role.id ? <X size={20} className="text-[#00e5ff]" /> : <Plus size={20} className="opacity-10" />}
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">{role.title}</h4>
              {activeRole === role.id && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <p className="text-sm font-bold text-[#ff4d4d] uppercase tracking-widest">{role.hook}</p>
                  <p className="text-xs opacity-40 leading-relaxed font-medium uppercase tracking-tight">{role.details}</p>
                  <div className="pt-6 border-t border-white/10 text-[10px] font-black uppercase tracking-widest text-[#ffcc33]">
                    Pipeline: {role.benefit}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. WRITER'S PIPELINE */}
      <section ref={horizontalRef1} className="h-screen bg-[#0d0505] overflow-hidden border-b border-white/5 flex items-center">
        <div ref={wrapperRef1} className="flex px-[10vw] gap-20 items-center whitespace-nowrap">
          <div className="min-w-[45vw] md:min-w-[35vw] flex flex-col justify-center whitespace-normal">
            <span className="text-[10px] uppercase tracking-[1em] text-[#ff4d4d] mb-6 font-bold">Scene 03 // Flow</span>
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-10 italic">Writer's <br/> Room.</h3>
            <p className="text-lg opacity-30 font-medium max-w-sm uppercase italic">Where text manifests into the visual vanguard.</p>
          </div>
          {SCENE_FEATURES.map((feat, i) => (
            <div key={i} className="min-w-[80vw] md:min-w-[45vw] h-[60vh] border border-white/10 p-16 flex flex-col justify-between hover:bg-white/[0.02] transition-colors whitespace-normal">
              <span className={`text-[10px] uppercase tracking-widest font-black ${feat.accent}`}>Phase {feat.scene}</span>
              <div className="space-y-6">
                <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">{feat.title}</h4>
                <p className="text-lg opacity-30 font-medium tracking-tight leading-relaxed max-w-md">{feat.desc}</p>
              </div>
              <Bookmark className="opacity-10 self-end" size={24} />
            </div>
          ))}
        </div>
      </section>

        {/* 6. CATEGORIES: BLUEPRINT HUD */}
        <section className="raise-up py-40 px-8 md:px-20 lg:px-40 bg-[#05080d] border-b border-white/5 relative">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(#00e5ff_1px,transparent_1px),linear-gradient(90deg,#00e5ff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          <div className="mb-20 relative">
             <h3 className="text-6xl font-black tracking-tighter leading-none uppercase italic text-[#ffcc33]">Creative <br/> Sectors.</h3>
          </div>

          <div className="space-y-4 relative">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="group border border-white/10 p-12 hover:bg-white/[0.03] transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                <div className="flex gap-12 items-center">
                  <span className={`text-4xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity ${cat.accent}`}>{cat.scene}</span>
                  <div>
                    <h4 className="text-3xl font-black uppercase tracking-tighter">{cat.title}</h4>
                    <p className="text-sm opacity-40 font-medium italic mt-2">{cat.desc}</p>
                  </div>
                </div>
                <cat.icon size={40} strokeWidth={0.5} className="opacity-10 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </section>

        {/* 7. THE FILM STRIP: VANGUARD ARCHEOTYPES */}
        <section ref={horizontalRef2} className="h-screen overflow-hidden bg-black flex items-center border-y border-white/5">
          <div ref={wrapperRef2} className="flex h-[75vh] gap-4 px-[15vw] items-center">
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

        {/* 8. FINAL CALL: NEO-BRUTALIST */}
        <section className="raise-up bg-white text-black min-h-screen flex flex-col justify-center items-center text-center px-8 relative overflow-hidden">
          <span className="text-[10px] uppercase tracking-[1em] font-black mb-12">Action // Production Wrap</span>
          <h2 className="text-[14vw] md:text-[10vw] font-black italic tracking-tighter uppercase leading-none">
            READY TO <br/> <span className="text-[#ff4d4d]">BUILD?</span>
          </h2>
          <div className="mt-20 flex flex-col items-center gap-12 relative z-10">
            <a href="/waitlist" className="group flex items-center py-4 gap-8 text-lg uppercase tracking-[0.4em] font-black border-b-4 border-black pb-4 hover:bg-black hover:text-white px-8 transition-all">
              JOIN WAITLIST <ArrowRight className="group-hover:translate-x-4 transition-transform" />
            </a>
          </div>
        </section>
      </main>

      {/* 9. BALANCED FOOTER */}
      <footer className="raise-up bg-black px-8 md:px-20 py-24 border-t border-white/10 font-sans min-h-[500px] flex flex-col justify-between relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-6 flex flex-col justify-between h-full min-h-[250px]">
            <div>
              <h2 className="text-6xl font-black italic tracking-tighter mb-8 text-[#00e5ff]">MEVLINT</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-20 leading-loose max-w-sm font-bold">
                Infrastructure for the cinematic vanguard. Built to support craft, credit, and community. Designed by Abhishek Malik.
              </p>
            </div>
            {/* Copyright Pinned to Bottom Left Baseline */}
            <p className="text-[10px] opacity-30 mt-auto font-black tracking-[0.2em] uppercase">© 2026 Mevlint Foundry</p>
          </div>
          
          <div className="md:col-span-3 space-y-10">
            <h5 className="text-[10px] uppercase tracking-[0.5em] opacity-40 border-b border-white/10 pb-4 font-bold">Directory</h5>
            <ul className="text-[10px] font-black uppercase space-y-6 tracking-widest">
              <li><a href="/" className="hover:text-[#00e5ff] transition-colors">System Home</a></li>
              <li><a href="/explore" className="text-[#00e5ff]">Explore</a></li>
              <li><a href="/vision" className="hover:text-[#ff4d4d] transition-colors">Vision</a></li>
              <li><a href="/updates" className="hover:text-[#ffcc33] transition-colors">Logs</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}