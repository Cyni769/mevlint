'use client';

import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { 
  Activity, ArrowRight, Terminal, Cpu, 
  GitBranch, ChevronRight, Scan, Sparkles, 
  Code, Shield, Zap, Globe, MoveRight 
} from 'lucide-react';
import Navbar from "@/components/layout/Navbar";

export default function UpdatePreviewVanguard() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Initial state reset for instant entrance
    gsap.set(".hero-line, .status-card, .log-preview, .footer-fade", { opacity: 0, y: 20 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".hero-line", { 
        y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" 
      })
      .to(".status-card", {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out"
      }, "-=0.4")
      .to(".log-preview", {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out"
      }, "-=0.4")
      .to(".footer-fade", {
        opacity: 1, duration: 1
      }, "-=0.3");
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#00e5ff] selection:text-black overflow-x-hidden tracking-tight">
      
      {/* 1. ATMOSPHERIC OVERLAY */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

      <Navbar />

      <main className="relative z-10 pt-40 min-h-screen">
        {/* HERO: PREVIEW HEADER */}
        <header className="px-8 md:px-20 lg:px-40 mb-20 max-w-6xl">
          <span className="hero-line text-[10px] uppercase tracking-[1em] text-[#ffcc33] mb-8 block font-bold italic">Audit // Live Transmission</span>
          <h2 className="hero-line text-[10vw] md:text-[7vw] leading-[0.85] font-black tracking-tighter uppercase italic mb-8">
            Foundry <br/> <span className="text-[#00e5ff]">Status.</span>
          </h2>
          <p className="hero-line max-w-2xl text-lg opacity-40 font-medium leading-relaxed uppercase italic border-l-2 border-[#ff4d4d] pl-10">
            Real-time telemetry from the cinematic forge. Monitoring the expansion of the executable imagination.
          </p>
        </header>

        {/* 3. SYSTEM DIAGNOSTICS BENTO */}
        
        <section className="px-8 md:px-20 lg:px-40 mb-32 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="status-card md:col-span-2 border border-white/10 bg-[#0a0f1a] p-10 flex flex-col justify-between group hover:border-[#00e5ff] transition-all">
            <div className="flex justify-between items-start">
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#00e5ff]">System_Core</span>
              <Cpu size={20} className="text-[#00e5ff] animate-pulse" />
            </div>
            <div>
              <h4 className="text-4xl font-black uppercase tracking-tighter italic mb-4">v1.0.26 Active</h4>
              <p className="text-[10px] opacity-30 font-bold uppercase tracking-widest">Masterpiece Deployment // Verified</p>
            </div>
          </div>

          <div className="status-card border border-white/10 p-10 flex flex-col justify-between hover:bg-white/5 transition-all">
            <Activity size={20} className="text-[#ff4d4d] opacity-40" />
            <div>
              <span className="text-3xl font-black tracking-tighter italic">99.8%</span>
              <p className="text-[10px] opacity-30 font-bold uppercase tracking-widest">Sync Uptime</p>
            </div>
          </div>

          <div className="status-card border border-white/10 p-10 flex flex-col justify-between hover:bg-white/5 transition-all">
            <Globe size={20} className="text-[#ffcc33] opacity-40" />
            <div>
              <span className="text-3xl font-black tracking-tighter italic">12 Nodes</span>
              <p className="text-[10px] opacity-30 font-bold uppercase tracking-widest">Global Clusters</p>
            </div>
          </div>
        </section>

        {/* 4. RECENT COMMITS PREVIEW */}
        
        <section className="px-8 md:px-20 lg:px-40 pb-40">
          <div className="mb-16 flex justify-between items-end border-b border-white/10 pb-8">
            <h3 className="text-4xl font-black uppercase italic tracking-tighter">Latest Commits.</h3>
            <a href="/updates" className="text-[10px] font-black uppercase tracking-widest text-[#00e5ff] hover:text-white transition-colors flex items-center gap-4">
              View Full Archive <MoveRight size={16} />
            </a>
          </div>

          <div className="space-y-4">
            {[
              { v: "v1.0.26", t: "Masterpiece Architecture Sync", d: "Unified Obsidian-Cyan palette across all modules.", c: "text-[#00e5ff]" },
              { v: "v1.0.25", t: "Film-Strip Horizontal Engine", d: "High-fidelity scroll logic for creator archetypes.", c: "text-[#ff4d4d]" },
              { v: "v1.0.24", t: "Gravity Bento Hub Expansion", d: "Asymmetric grid modules for IP security protocols.", c: "text-[#ffcc33]" }
            ].map((log, i) => (
              <div key={i} className="log-preview group border border-white/5 bg-white/[0.02] p-8 md:p-12 hover:bg-[#0d1425] transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                <div className="flex gap-10 items-center">
                  <span className={`text-2xl font-black italic ${log.c}`}>{log.v}</span>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">{log.t}</h4>
                    <p className="text-[10px] opacity-30 font-bold uppercase tracking-[0.2em] mt-1">{log.d}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#00e5ff] group-hover:text-[#00e5ff] transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 5. BALANCED FOOTER */}
      <footer className="footer-fade bg-black px-8 md:px-20 py-24 border-t border-white/10 font-sans min-h-[500px] flex flex-col justify-between relative">
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
              <li><a href="/" className="hover:text-[#00e5ff] transition-colors">System Home</a></li>
              <li><a href="/explore" className="hover:text-[#00e5ff] transition-colors">Foundry Explore</a></li>
              <li><a href="/vision" className="hover:text-[#ff4d4d]">Vision Manifesto</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}