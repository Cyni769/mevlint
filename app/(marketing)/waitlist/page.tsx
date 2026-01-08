'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { 
  ArrowUpRight, Activity, Globe, Shield, 
  Zap, MoveRight, Plus, ArrowRight 
} from 'lucide-react';



export default function WaitlistVanguard() {
  const mainRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "",
    level: "",
    country: "",
    lookingFor: "",
    genre: "",
    collaboration: "yes"
  });

  useEffect(() => {
    gsap.set(".entrance-line, .form-card, .footer-fade", { opacity: 0, y: 20 });
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".entrance-line", { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" })
        .to(".form-card", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .to(".footer-fade", { opacity: 1, duration: 1 }, "-=0.3");
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.role) {
      alert("CRITICAL ERROR: Identity fields (Name, Email, Role) must be synchronized before registration.");
    } else {
      alert(`SUCCESS: ${formState.name.toUpperCase()} has been added to the Vanguard cycle. Access pending.`);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    gsap.set(".entrance-line, .form-card, .footer-fade", { opacity: 0, y: 20 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".entrance-line", { 
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

  return (
    <div ref={mainRef} className="bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#00e5ff] selection:text-black overflow-x-hidden tracking-tight">
      
      {/* ATMOSPHERIC OVERLAY */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

      {/* 1. NAV */}
      <nav className="fixed top-0 w-full px-8 md:px-20 py-10 flex justify-between items-center z-[100] bg-[#050505]/95 backdrop-blur-md border-b border-white/5">
        <h1 className="text-xl font-black tracking-tighter uppercase"><a href="/">MEVLINT</a></h1>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest hidden md:flex opacity-40">
          <a href="/" className="hover:text-[#00e5ff] transition-colors">Home</a>
          <a href="/explore" className="hover:text-[#00e5ff] transition-colors">Explore</a>
          <a href="/vision" className="hover:text-[#ff4d4d] transition-colors">Vision</a>
          <a href="/updates" className="hover:text-[#ffcc33] transition-colors">Logs</a>
        </div>
        <div className="text-[#00e5ff] font-black text-[10px] tracking-[0.3em] uppercase animate-pulse">
          Status // Recruitment
        </div>
      </nav>

      <main className="relative z-10 pt-40 min-h-screen">
        {/* HERO: IMAGE CONTENT INTEGRATION */}
        <header className="px-8 md:px-20 lg:px-40 mb-20 max-w-6xl">
          <div className="flex items-center gap-6 mb-8 entrance-line">
             <span className="text-5xl font-light opacity-40">~</span>
             <h2 className="text-[12vw] md:text-[8vw] leading-none font-black tracking-tighter uppercase italic">Waitlist</h2>
          </div>
          <p className="entrance-line text-xl md:text-2xl font-black uppercase text-[#00e5ff] mb-6">
            Join the Founding Circle of Mevlint (Truth, Not Marketing Fluff)
          </p>
          <p className="entrance-line max-w-3xl text-lg opacity-40 font-medium leading-relaxed uppercase italic border-l-2 border-[#ff4d4d] pl-10 mb-12">
            Mevlint is a collaboration-first platform for cinematic and animation creators. We're onboarding in phases to protect quality, moderation, and creative safety.
          </p>
          
          <div className="entrance-line grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
               <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#ffcc33]">Early members will:</h4>
               <ul className="space-y-2 text-sm font-bold uppercase tracking-widest opacity-60">
                 <li className="flex items-center gap-3">● Shape platform features</li>
                 <li className="flex items-center gap-3">● Get priority access</li>
                 <li className="flex items-center gap-3">● Receive early collaboration visibility</li>
                 <li className="flex items-center gap-3">● Earn founding badges</li>
               </ul>
            </div>
          </div>
        </header>

        {/* COMPREHENSIVE FORM SECTION */}
        <section className="form-card px-8 md:px-20 lg:px-40 pb-40">
          <div className="border border-white/10 bg-[#0a0f1a] relative overflow-hidden p-10 md:p-20">
            {/* Blueprint Mesh */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(#00e5ff_1px,transparent_1px),linear-gradient(90deg,#00e5ff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              
              {/* LEFT COLUMN: IDENTITY */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">Full Name</label>
                  <input type="text" placeholder="e.g. Cyni769" className="w-full bg-white/5 border border-white/10 p-4 font-bold uppercase tracking-widest text-sm focus:border-[#00e5ff] focus:outline-none transition-all placeholder-white/20" />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">Email Address</label>
                  <input type="email" placeholder="e.g. cyrusmalik769@gmail.com" className="w-full bg-white/5 border border-white/10 p-4 font-bold uppercase tracking-widest text-sm focus:border-[#ff4d4d] focus:outline-none transition-all placeholder-white/20" />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">Primary Role</label>
                  <div className="flex gap-2">
                    <select className="w-full bg-white/5 border border-white/10 p-4 font-bold uppercase tracking-widest text-sm focus:border-[#ffcc33] appearance-none cursor-pointer">
                      <option className="bg-black">Select Discipline...</option>
                      <option className="bg-black">Scrip Writer</option>
                      <option className="bg-black">Animator</option>
                      <option className="bg-black">Director</option>
                    </select>
                    <div className="bg-white/5 border border-white/10 p-4 flex items-center justify-center">
                      <Plus size={16} className="opacity-40" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">Primary Role Level</label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 font-bold uppercase tracking-widest text-sm focus:border-[#00e5ff] appearance-none cursor-pointer">
                    <option className="bg-black">e.g. Intermediate</option>
                    <option className="bg-black">Beginner</option>
                    <option className="bg-black">Advanced</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">Country</label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 font-bold uppercase tracking-widest text-sm focus:border-[#ffcc33] appearance-none cursor-pointer">
                    <option className="bg-black">e.g. India</option>
                    <option className="bg-black">United States</option>
                    <option className="bg-black">Japan</option>
                  </select>
                </div>

                <div className="space-y-4 pt-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30 block mb-6">Open to Collaborations?</label>
                  <div className="flex gap-10">
                    {["Yes", "No"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border-2 border-white/20 group-hover:border-[#00e5ff] transition-colors relative flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#00e5ff] opacity-0 group-hover:opacity-100"></div>
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: INTENT */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">What Are You Looking For?</label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 font-bold uppercase tracking-widest text-sm focus:border-[#00e5ff] appearance-none cursor-pointer">
                    <option className="bg-black">e.g. Learning & mentorship</option>
                    <option className="bg-black">Job Opportunities</option>
                    <option className="bg-black">Team Sourcing</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">Preferred Genres</label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 font-bold uppercase tracking-widest text-sm focus:border-[#ff4d4d] appearance-none cursor-pointer">
                    <option className="bg-black">e.g. Anime-inspired</option>
                    <option className="bg-black">Sci-Fi / Cyberpunk</option>
                    <option className="bg-black">Dark Fantasy</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">Portfolio Link</label>
                  <input type="text" placeholder="e.g. Google Drive / Behance" className="w-full bg-white/5 border border-white/10 p-4 font-bold uppercase tracking-widest text-sm focus:border-[#ffcc33] focus:outline-none transition-all placeholder-white/20" />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">Why join Mevlint?</label>
                  <textarea 
                    placeholder="Mevlint is a collaboration-first platform..." 
                    className="w-full bg-white/5 border border-white/10 p-4 font-bold uppercase tracking-widest text-xs focus:border-[#00e5ff] focus:outline-none transition-all placeholder-white/10 resize-none h-[180px]"
                  />
                </div>

                {/* REGISTER BUTTON: BLACK BOX STYLE */}
                <button type="submit" className="group w-full bg-black border border-white/10 text-white p-6 font-black uppercase tracking-[0.4em] transition-all duration-500 hover:bg-[#00e5ff] hover:text-black hover:border-transparent hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] flex items-center justify-center gap-6 mt-12 relative overflow-hidden">
                  <span className="relative z-10">Register System</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-4 transition-transform duration-500" />
                </button>
              </div>

            </form>
          </div>
        </section>
      </main>

      {/* 4. BALANCED FOOTER */}
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
            <h5 className="text-[10px] uppercase tracking-[0.5em] opacity-40 border-b border-white/10 pb-4 font-bold font-sans">Directory</h5>
            <ul className="text-[10px] font-black uppercase space-y-6 tracking-widest font-sans">
              <li><a href="/" className="hover:text-[#00e5ff] transition-colors">Home</a></li>
              <li><a href="/explore" className="hover:text-[#00e5ff] transition-colors">Foundry Explore</a></li>
              <li><a href="/vision" className="hover:text-[#ff4d4d]">Vision Manifesto</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between items-end border-l border-white/5 pl-8 h-full min-h-[250px]">
            <div className="text-5xl font-black opacity-[0.05] [writing-mode:vertical-rl] tracking-tighter uppercase mb-auto h-fit text-white">Waitlist</div>
          </div>
        </div>
      </footer>
    </div>
  );
}