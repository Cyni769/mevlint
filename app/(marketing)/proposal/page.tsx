'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { 
  GitBranch, ArrowRight, Activity, 
  Terminal, Cpu, Code, Layers, 
  Sparkles, Shield, Zap, MoveRight 
} from 'lucide-react';
import Navbar from "@/components/layout/Navbar";

export default function ProposalVanguard() {
  const mainRef = useRef(null);
  const [formState, setFormState] = useState({
    title: "",
    type: "", // Initialized as empty string for the placeholder logic
    priority: "standard",
    description: ""
  });

  useEffect(() => {
    // Initial state reset for instant performance
    gsap.set(".hero-line, .form-card, .footer-fade", { opacity: 0, y: 20 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".hero-line", { 
        y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" 
      })
      .to(".form-card", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out"
      }, "-=0.4")
      .to(".footer-fade", {
        opacity: 1, duration: 1
      }, "-=0.3");
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.title || !formState.type || !formState.description) {
      alert("CRITICAL ERROR: All blueprint fields (Title, Type, Description) must be synchronized before submission.");
    } else {
      alert(`PROPOSAL LOGGED: ${formState.title.toUpperCase()} has been entered into the Foundry review cycle.`);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div ref={mainRef} className="bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#00e5ff] selection:text-black overflow-x-hidden tracking-tight">
      
      {/* 1. ATMOSPHERIC OVERLAY */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

      <Navbar />

      <main className="relative z-10 pt-40 min-h-screen">
        {/* HERO: SUBMISSION HEADER */}
        <header className="px-8 md:px-20 lg:px-40 mb-20 max-w-6xl">
          <span className="hero-line text-[10px] uppercase tracking-[1em] text-[#ffcc33] mb-8 block font-bold italic">Module // Open Source Intelligence</span>
          <h2 className="hero-line text-[10vw] md:text-[7vw] leading-[0.85] font-black tracking-tighter uppercase italic mb-8">
            Contribute to <br/> the <span className="text-[#00e5ff]">Forge.</span>
          </h2>
          <p className="hero-line max-w-2xl text-lg opacity-40 font-medium leading-relaxed uppercase italic border-l-2 border-[#ff4d4d] pl-10">
            Every proposal is a node in the expansion of Mevlint. We build based on demand, region, and creative interest.
          </p>
        </header>

        {/* PROPOSAL FORM: HIGH-CONTRAST INDUSTRIAL */}
        <section className="form-card px-8 md:px-20 lg:px-40 pb-40">
          <div className="border border-white/10 bg-[#e5e5e5] text-black relative overflow-hidden p-10 md:p-20">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(black_1px,transparent_1px),linear-gradient(90deg,black_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Proposal // Title</label>
                  <input type="text" onChange={(e) => setFormState({...formState, title: e.target.value})} placeholder="e.g. Lore-Sync 2.0 Integration" className="w-full bg-black/5 border-b-2 border-black/10 p-4 font-bold uppercase tracking-widest text-sm focus:border-[#00e5ff] focus:outline-none transition-all placeholder-black/10" />
                </div>

                {/* FIXED SELECT COMPONENT */}
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Category // Classification</label>
                  <select 
                    id="type" 
                    value={formState.type} // Controlled value from state
                    onChange={handleSelectChange} 
                    className={`w-full bg-black/5 border-b-2 border-black/10 p-4 font-bold uppercase tracking-widest text-sm appearance-none cursor-pointer focus:border-[#ff4d4d] ${formState.type === "" ? "text-black/20" : "text-black"}`}
                  >
                    {/* Placeholder option without 'selected' attribute */}
                    <option value="" disabled>Select Sector...</option> 
                    <option value="ui">Interface Optimization</option>
                    <option value="backend">Infrastructure / API</option>
                    <option value="workflow">Creative Workflow</option>
                    <option value="legal">IP / Rights Protection</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30 block mb-6">Execution // Priority</label>
                  <div className="flex gap-10">
                    {["Standard", "Urgent", "Future"].map((val) => (
                      <label key={val} className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="priority" value={val.toLowerCase()} checked={formState.priority === val.toLowerCase()} onChange={(e) => setFormState({...formState, priority: e.target.value})} className="hidden" />
                        <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${formState.priority === val.toLowerCase() ? "border-[#ff4d4d]" : "border-black/10"}`}>
                           <div className={`w-2 h-2 rounded-full bg-[#ff4d4d] transition-all ${formState.priority === val.toLowerCase() ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}></div>
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.2em]">{val}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">The Blueprint // Technical Detail</label>
                  <textarea 
                    onChange={(e) => setFormState({...formState, description: e.target.value})}
                    placeholder="Provide a deep-dive into the cinematic vanguard workflow..." 
                    className="w-full bg-black/5 border border-black/10 p-4 font-bold uppercase tracking-widest text-xs focus:border-[#00e5ff] focus:outline-none transition-all placeholder-black/10 resize-none h-[220px]"
                  />
                </div>

                <button type="submit" className="group w-full bg-black text-white p-6 font-black uppercase tracking-[0.4em] transition-all duration-500 hover:bg-[#00e5ff] hover:text-black hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] flex items-center justify-center gap-6 mt-12 relative overflow-hidden">
                  <span className="relative z-10">Submit Proposal</span>
                  <MoveRight size={20} className="relative z-10 group-hover:translate-x-4 transition-transform duration-500" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* 6. BALANCED FOOTER */}
      <footer className="footer-fade bg-black px-8 md:px-20 py-24 border-t border-white/10 font-sans min-h-[500px] flex flex-col justify-between">
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
            <h5 className="text-[10px] uppercase tracking-[0.5em] opacity-40 border-b border-white/10 pb-4 font-bold font-sans">The Directory</h5>
            <ul className="text-[10px] font-black uppercase space-y-6 tracking-widest font-sans">
              <li><a href="/" className="hover:text-[#00e5ff]">System Home</a></li>
              <li><a href="/explore" className="hover:text-[#00e5ff]">Foundry Explore</a></li>
              <li><a href="/vision" className="hover:text-[#ff4d4d]">Vision Manifesto</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between items-end border-l border-white/5 pl-8 h-full min-h-[250px]">
            <div className="text-5xl font-black opacity-[0.05] [writing-mode:vertical-rl] tracking-tighter uppercase mb-auto h-fit text-white">Proposal</div>
          </div>
        </div>
      </footer>
    </div>
  );
}