"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { 
  ArrowDown, MoveRight, Fingerprint, Zap, Shield, 
  Command, Globe, Scan, Sparkles, Cpu, Code, 
  Activity, Binary, Workflow, ArrowRight, Layers,
  Compass, Eye
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VisionMasterpiece() {
  const mainRef = useRef(null);
  const circleRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. TYPOGRAPHIC ENTRANCE
      gsap.from(".hero-line", {
        y: 100, opacity: 0, stagger: 0.2, duration: 1.5, ease: "power4.out"
      });

      // 2. REVEAL ENGINE (MICRO-INTERACTIONS)
      gsap.utils.toArray(".reveal-up").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 90%" },
          y: 60, opacity: 0, duration: 1.2, ease: "power3.out"
        });
      });

      // 3. DUAL MARQUEE
      gsap.to(".marquee-inner-1", { xPercent: -50, repeat: -1, duration: 25, ease: "none" });
      gsap.to(".marquee-inner-2", { xPercent: 50, repeat: -1, duration: 30, ease: "none" });

      // 4. CIRCLE ORBITAL ANIMATION
      gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  // CIRCLE HOVER INTERACTION
  const onCircleEnter = () => {
    gsap.to(circleRef.current, { scale: 1.05, borderColor: "#00e5ff", duration: 0.5, ease: "power2.out" });
    gsap.to(orbitRef.current, { timeScale: 4, duration: 1 }); // Accelerate orbit
  };

  const onCircleLeave = () => {
    gsap.to(circleRef.current, { scale: 1, borderColor: "rgba(0, 229, 255, 0.2)", duration: 0.5, ease: "power2.out" });
    gsap.to(orbitRef.current, { timeScale: 1, duration: 1 }); // Normalize orbit
  };

  return (
    <div ref={mainRef} className="bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#00e5ff] selection:text-black overflow-x-hidden tracking-tight">
      
      {/* 1. ATMOSPHERIC OVERLAYS (BACKGROUND LAYER) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

      {/* 2. NAVIGATION (HEADER CROP FIX) */}
      <nav className="fixed top-0 w-full px-8 md:px-20 py-10 flex justify-between items-center z-[200] bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <h1 className="text-xl font-black tracking-tighter uppercase"><a href="/">MEVLINT</a></h1>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest hidden md:flex opacity-40">
          <a href="/" className="hover:text-[#00e5ff] transition-colors">Home</a>
          <a href="/explore" className="hover:text-[#00e5ff] transition-colors">Explore</a>
          <a href="/vision" className="text-[#00e5ff]">Vision</a>
          <a href="/updates" className="hover:text-[#ffcc33] transition-colors">Logs</a>
        </div>
        <a href="/waitlist" className="bg-[#00e5ff] text-black px-8 py-2 rounded-full font-black text-[10px] tracking-widest hover:bg-white transition-all uppercase">Join Production</a>
      </nav>

      <main className="relative z-10">
        
        {/* 3. HERO (PADDING TOP ADDED) */}
        <section className="h-screen flex flex-col justify-center px-8 md:px-20 lg:px-40 pt-32 relative">
          <div className="max-w-6xl">
            <span className="hero-line text-[10px] uppercase tracking-[1em] opacity-30 mb-8 block text-[#ffcc33]">Vision 01 // The Philosophy</span>
            <h2 className="hero-line text-[12vw] md:text-[9vw] leading-[0.85] font-black tracking-tighter uppercase mb-12 italic">
              Imagination <br/> <span className="text-[#00e5ff]">Executable.</span>
            </h2>
            <div className="hero-line flex flex-col md:flex-row gap-16 items-start md:items-end mt-12 border-l-2 border-[#ff4d4d] pl-10">
              <p className="max-w-xl text-lg md:text-2xl opacity-40 font-medium leading-relaxed uppercase italic">
                "Infrastructure for creators who build worlds, not just posts. We provide the gravity, you providing the vision."
              </p>
            </div>
          </div>
          <ArrowDown className="absolute bottom-10 right-10 opacity-20 animate-bounce" size={32} />
        </section>

        {/* 4. DUAL MARQUEE (SWISS PUNK STYLE) */}
        <div className="bg-[#ff4d4d] text-black py-4 overflow-hidden whitespace-nowrap border-y-4 border-black relative z-10 rotate-[-1deg] scale-105">
          <div className="marquee-inner-1 flex gap-20 font-black italic text-4xl uppercase tracking-tighter w-fit">
            {[...Array(8)].map((_, i) => (
              <span key={i}>No Slop • Skill Over Engagement • Forge Ahead • </span>
            ))}
          </div>
        </div>

        {/* 5. THE MANDATE (GLASSMORPISM) */}
        <section className="reveal-up py-40 px-8 md:px-20 lg:px-40 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00e5ff]/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="mb-20 text-center">
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-4">The Mandate.</h3>
            <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 font-bold">02 // CREATIVE SANCTUARY</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { t: "Excellence", d: "Skill builds the profile. We reward the frame, not the click.", icon: Zap, color: "text-[#ffcc33]" },
               { t: "IP Hashing", d: "Immutable attribution for every asset. Your work is a protected blueprint.", icon: Shield, color: "text-[#00e5ff]" },
               { t: "Unity", d: "Collaborative hubs that sync script beats to production frames.", icon: Workflow, color: "text-[#ff4d4d]" }
             ].map((item, i) => (
               <div key={i} className="p-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 group">
                  <item.icon className={`${item.color} mb-20 group-hover:scale-110 transition-transform`} size={32} />
                  <h4 className="text-2xl font-black uppercase italic mb-4">{item.t}</h4>
                  <p className="text-xs opacity-40 uppercase tracking-widest leading-loose">{item.d}</p>
               </div>
             ))}
          </div>
        </section>

        {/* 6. INDUSTRIAL FORGE (HIGH CONTRAST) */}
        <section className="reveal-up py-40 flex flex-col md:flex-row bg-[#e5e5e5] text-black border-y border-black">
          <div className="flex-1 p-8 md:p-24 border-r border-black/10 flex flex-col justify-center">
            <h3 className="text-8xl md:text-[12vw] font-black uppercase italic leading-[0.8] tracking-tighter mb-12">The <br/> Forge.</h3>
            <div className="flex gap-4 items-center">
              <Compass className="animate-spin-slow" />
              <p className="text-xl font-bold uppercase">Mapping execution across disciplines.</p>
            </div>
          </div>
          <div className="flex-1 p-8 md:p-24 space-y-20 flex flex-col justify-center">
            <div className="border-l-4 border-black pl-8 hover:translate-x-4 transition-transform duration-500">
              <h4 className="text-4xl font-black uppercase italic tracking-tighter">Lore Manifest</h4>
              <p className="text-sm font-medium opacity-60 mt-4 leading-relaxed">Integrated wiki tools to keep your universe's logic synchronized for every team member.</p>
            </div>
            <div className="border-l-4 border-black pl-8 hover:translate-x-4 transition-transform duration-500">
              <h4 className="text-4xl font-black uppercase italic tracking-tighter">Contract Forge</h4>
              <p className="text-sm font-medium opacity-60 mt-4 leading-relaxed">Automated agreements that protect creative equity and credit on-chain by default.</p>
            </div>
          </div>
        </section>

        {/* 7. SYSTEM GRAVITY (BENTO HUD) */}
        
        <section className="reveal-up py-40 px-8 md:px-20 lg:px-40 bg-[#05080d] relative border-b border-white/5">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(#00e5ff_1px,transparent_1px),linear-gradient(90deg,#00e5ff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="mb-20 relative">
            <div className="w-16 h-[2px] bg-[#ff4d4d] mb-6"></div>
            <h3 className="text-6xl font-black tracking-tighter leading-none uppercase italic">System <br/> <span className="text-[#ffcc33]">Gravity.</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="md:col-span-2 md:row-span-2 border border-[#00e5ff]/20 p-12 bg-[#05080d] flex flex-col justify-between group overflow-hidden hover:border-[#00e5ff] transition-all">
              <Binary size={40} className="text-[#00e5ff] opacity-10 group-hover:opacity-40 transition-opacity" />
              <p className="text-2xl font-medium opacity-80 leading-relaxed uppercase italic">
                "Specialized infrastructure for cinematic execution. No slop, no noise."
              </p>
              <div className="flex gap-4 items-center">
                <Cpu size={32} className="text-[#00e5ff] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40">Core_Engine_Running</span>
              </div>
            </div>
            
            {[
              { t: "Global Sync", d: "Discovery via craft.", icon: Globe, c: "text-[#00e5ff]" },
              { t: "Velocity", d: "Editorial handoffs.", icon: Activity, c: "text-[#ff4d4d]", f: "bg-[#ff4d4d]"},
              { t: "Security", d: "On-chain attribution.", icon: Shield, c: "text-[#ffcc33]", f: "bg-[#ffcc33]"}
            ].map((box, i) => (
              <div key={i} className={`border border-white/10 p-10 hover:bg-white/5 transition-all group ${i === 0 ? 'md:col-span-2' : ''}`}>
                 <box.icon className={`${box.c} mb-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all`} size={24} />
                 <h4 className="text-xl uppercase font-black tracking-tighter mb-2">{box.t}</h4>
                 <div className={`${box.f} h-[1px] w-8 mb-4 bg-{b.f} group-hover:w-full transition-all`}></div>
                 <p className="text-[10px] opacity-30 font-bold uppercase tracking-widest">{box.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. DIGITAL SYNAPSE (REACTIVE HOVER CIRCLE) */}
        <section className="reveal-up py-40 bg-[#050505] border-b border-white/5 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-20 px-8 md:px-20">
            <div className="flex-1 flex justify-center items-center">
              <div 
                ref={circleRef}
                onMouseEnter={onCircleEnter}
                onMouseLeave={onCircleLeave}
                className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-[#00e5ff]/20 rounded-full flex items-center justify-center relative transition-all duration-700 cursor-crosshair"
              >
                <Code size={100} className="text-[#00e5ff] opacity-10" />
                <div ref={orbitRef} className="absolute inset-0">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ff4d4d] rounded-full shadow-[0_0_20px_#ff4d4d]"></div>
                  <div className="absolute bottom-1/4 right-0 w-3 h-3 bg-[#ffcc33] rounded-full shadow-[0_0_20px_#ffcc33]"></div>
                </div>
                <Eye size={40} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00e5ff] animate-pulse opacity-20" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-6xl font-black tracking-tighter uppercase italic mb-8">Narrative <br/> Synapse.</h3>
              <p className="text-lg opacity-40 uppercase italic leading-loose max-w-md">Every collaborator is a synapse. We map the connections between script beats and concept frames in real-time. Hover to synchronize vision.</p>
              <div className="flex items-center gap-6 mt-12 group cursor-pointer">
                <Scan className="text-[#00e5ff] group-hover:scale-125 transition-transform" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">Scanning_Node_026...</span>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FINAL CALL */}
        <section className="reveal-up min-h-screen flex flex-col justify-center items-center text-center px-8 bg-white text-black">
          <span className="text-[10px] uppercase tracking-[1em] font-black mb-12">Execute Your Vision</span>
          <h2 className="text-[18vw] md:text-[14vw] font-black italic tracking-tighter uppercase leading-none hover:text-[#ff4d4d] transition-colors duration-700 cursor-pointer">
            FIN.
          </h2>
          <div className="mt-20">
            <a href="/waitlist" className="group flex items-center gap-8 text-2xl uppercase tracking-[0.2em] font-black border-b-8 border-black pb-4 hover:border-[#00e5ff] transition-all">
              Join Waitlist <ArrowRight className="group-hover:translate-x-4 transition-transform" />
            </a>
          </div>
        </section>

        {/* 10. BALANCED FOOTER */}
        <footer className="reveal-up bg-black px-8 md:px-20 py-24 border-t border-white/10 font-sans min-h-[500px] flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
            <div className="md:col-span-6 flex flex-col justify-between h-full min-h-[250px]">
              <div>
                <h2 className="text-6xl font-black italic tracking-tighter mb-8 text-[#00e5ff]">MEVLINT</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-20 leading-loose max-w-sm font-bold">
                  Infrastructure for the cinematic vanguard. Built to support craft, credit, and community.
                </p>
              </div>
              <p className="text-[10px] opacity-40 mt-auto font-black tracking-[0.2em] uppercase">© 2026 Mevlint Foundry</p>
            </div>
            
            <div className="md:col-span-3 space-y-10">
              <h5 className="text-[10px] uppercase tracking-[0.5em] opacity-40 border-b border-white/10 pb-4 font-bold">The Layout</h5>
              <ul className="text-[10px] font-black uppercase space-y-6 tracking-widest">
                <li><a href="/" className="hover:text-[#00e5ff] transition-colors">Home</a></li>
                <li><a href="/explore" className="hover:text-[#ff4d4d] transition-colors">Foundry Explore</a></li>
                <li><a href="/updates" className="hover:text-[#ffcc33] transition-colors">Dev Logs</a></li>
              </ul>
            </div>

            <div className="md:col-span-3 flex flex-col justify-between items-end border-l border-white/5 pl-8 h-full min-h-[250px]">
              <div className="text-5xl font-black opacity-[0.05] [writing-mode:vertical-rl] tracking-tighter uppercase mb-auto h-fit">Vision</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}