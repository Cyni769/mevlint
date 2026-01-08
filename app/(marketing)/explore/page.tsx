'use client';

import React, { use } from 'react';
import { ArrowUpRight, Zap, Shield, Users, Globe, PenTool, Film, Mic, Layers } from 'lucide-react';
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


// Shared Navbar Component (You would typically extract this to a separate file)
const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 border-b border-[#1a2e2e] sticky top-0 bg-[#0a1414]/80 backdrop-blur-md z-50">
    <div className="flex gap-8 text-sm uppercase tracking-widest text-[#00b4d8]/70">
      <a href="/" className="hover:text-[#00b4d8] transition-colors">Home</a>
      <a href="/explore" className="text-[#00b4d8] font-bold">Explore</a>
      <a href="/vision" className="hover:text-[#00b4d8] transition-colors">Vision</a>
      <a href="/updates" className="hover:text-[#00b4d8] transition-colors">Updates</a>
    </div>
    <a href="/waitlist" className="border border-[#00b4d8] px-6 py-1 text-sm font-bold hover:bg-[#00b4d8] hover:text-black transition-all">
      JOIN US
    </a>
  </nav>
);

// Shared Footer Component
const Footer = () => (
  <footer className="border-t border-[#1a2e2e] p-12 bg-black/40">
    <div className="max-w-7xl mx-auto flex justify-between items-start">
      <div>
        <h2 className="text-5xl font-black italic mb-12 text-[#00b4d8]">MEVLINT</h2>
        <p className="text-sm text-[#00b4d8]/60">@2026 Mevlint. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function ExplorePage() {
  const features = [
    { icon: Users, title: "Collaborative Hubs", desc: "Persistent project spaces for teams to share assets, scripts, and real-time feedback." },
    { icon: Shield, title: "IP Protection", desc: "Built-in rights management and crediting systems to secure your creative work." },
    { icon: Globe, title: "Global Talent Pool", desc: "Discover and connect with specialized creators from around the world." },
    { icon: Zap, title: "Rapid Prototyping", desc: "Tools to quickly storyboard, animatic, and visualize concepts together." },
  ];

  const categories = [
    { icon: Film, title: "Animation & Cinematic Media", desc: "For directors, animators, VFX artists, and cinematographers building visual stories." },
    { icon: PenTool, title: "Art & Illustration", desc: "Concept artists, character designers, and background painters defining the look." },
    { icon: Mic, title: "Sound & Storytelling", desc: "Writers, voice actors, composers, and sound designers crafting the narrative audio." },
    { icon: Layers, title: "Worldbuilding & Lore", desc: "Dedicated tools for wikis, timelines, and asset management for expansive universes." },
  ];

  return (

    <div className="bg-[#0a1414] text-[#00b4d8] min-h-screen font-mono selection:bg-[#00b4d8] selection:text-black">
          {/* Marquee Section */}
          <Marquee text="MEVLINT" />
    
    <div className="bg-[#0a1414] text-[#00b4d8] min-h-screen font-mono selection:bg-[#00b4d8] selection:text-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <header className="mb-20">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-80">Discover the Ecosystem</p>
          <h1 className="text-6xl font-black italic tracking-tighter mb-4">EXPLORE MEVLINT</h1>
          <p className="text-xl opacity-80 max-w-3xl leading-relaxed">
            Dive into the tools and communities designed to take your cinematic projects from concept to reality.
          </p>
        </header>

        {/* Core Features Grid */}
        <section className="mb-24">
          <h3 className="text-2xl font-black uppercase mb-8 tracking-widest">Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {features.map((item, i) => (
              <div key={i} className="border border-[#1a2e2e] p-10 hover:bg-[#00b4d8]/5 transition-all group">
                <item.icon size={32} className="mb-6 opacity-70 group-hover:text-[#00b4d8] group-hover:opacity-100 transition-all" />
                <h4 className="text-xl font-black uppercase mb-3">{item.title}</h4>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-24">
          <h3 className="text-2xl font-black uppercase mb-8 tracking-widest">Creator Categories</h3>
          <div className="grid grid-cols-1 gap-1">
            {categories.map((item, i) => (
              <div key={i} className="grid grid-cols-12 border border-[#1a2e2e] hover:border-[#00b4d8] transition-all group min-h-38">
                <div className="col-span-12 md:col-span-3 border-r border-[#1a2e2e] bg-[#00b4d8]/10 flex items-center justify-center p-8 group-hover:bg-[#00b4d8] transition-all">
                  <item.icon size={48} className="text-[#00b4d8] group-hover:text-black transition-all" />
                </div>
                <div className="col-span-12 md:col-span-9 p-10 flex flex-col justify-center">
                  <h4 className="text-2xl font-black uppercase mb-2">{item.title}</h4>
                  <p className="text-base opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="grid grid-cols-1 md:grid-cols-2 border border-[#1a2e2e] bg-[#00b4d8] text-black">
          <div className="p-12 border-r border-black/20 flex flex-col justify-center">
            <h2 className="text-5xl font-black italic tracking-tighter mb-4">READY TO BUILD?</h2>
            <p className="text-lg font-bold opacity-80">Join the new wave of cinematic creators.</p>
          </div>
          <a href="/waitlist" className="p-12 flex items-center justify-center gap-4 uppercase font-black tracking-widest hover:bg-black/10 transition-all text-xl">
            Join Waitlist <ArrowUpRight size={32} />
          </a>
        </section>
      </main>
      <Footer />
    </div>

    </div>
  );
}