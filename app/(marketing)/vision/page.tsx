"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowDown, MoveRight, Box, Radio, Component, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VisionMasterpiece() {

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

gsap.registerPlugin(ScrollTrigger);

  function AnimatedBento() {
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

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Scramble/Reveal Animation
      gsap.from(".brutal-title", {
        xPercent: -100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.1
      });

      // 2. Bento Box "Pop" Animation
      gsap.utils.toArray(".bento-card").forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          scale: 0.95,
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "back.out(1.7)"
        });
      });

      // 3. Horizontal Marquee Loop
      gsap.to(".marquee-inner", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-[#00e5ff] min-h-screen font-mono overflow-x-hidden selection:bg-[#00e5ff] selection:text-black">
            {/* Marquee Section */}
            <Marquee text="MEVLINT" />
      {/* HEADER / NAV */}
      <div className="bg-[#0a1414] text-[#00b4d8] min-h-screen font-mono selection:bg-[#00b4d8] selection:text-black">
        
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-[#1a2e2e] sticky top-0 bg-[#0a1414]/80 backdrop-blur-md z-50">
        <div className="flex gap-8 text-sm uppercase tracking-widest text-[#00b4d8]/70">
          <a href="/" className="hover:text-[#00b4d8] transition-colors">Home</a>
          <a href="/explore" className="hover:text-[#00b4d8] transition-colors">Explore</a>
          <a href="/vision" className="hover:text-[#00b4d8] transition-colors">Vision</a>
          <a href="/updates" className="hover:text-[#00b4d8] transition-colors">Updates</a>
        </div>
        <button className="border border-[#00b4d8] px-6 py-1 text-sm font-bold hover:bg-[#00b4d8] hover:text-black transition-all">
          <a href="/waitlist">JOIN US</a>
        </button>
      </nav>


      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-20 relative border-b-4 border-[#00e5ff]">
        <div className="overflow-hidden">
          <h1 className="brutal-title text-[15vw] leading-[0.8] font-black italic tracking-tighter uppercase">
            Creative<br/>Gravity
          </h1>
        </div>
        <div className="mt-12 max-w-2xl border-l-8 border-[#00e5ff] pl-8">
          <p className="text-xl md:text-3xl font-bold uppercase leading-tight">
            Mevlint is a purpose-built collaboration foundry for the cinematic vanguard.
          </p>
          <p className="mt-4 opacity-70 text-sm">EST. 2026 / ABHISHEK MALIK</p>
        </div>
        <ArrowDown className="absolute bottom-10 right-10 animate-bounce" size={48} />
      </section>

      {/* MARQUEE SEPARATOR */}
      <div className="bg-[#00e5ff] text-black py-4 overflow-hidden whitespace-nowrap border-b-4 border-black">
        <div className="marquee-inner flex gap-20 font-black italic text-2xl uppercase">
          {[...Array(10)].map((_, i) => (
            <span key={i}>Imagination Needs Infrastructure</span>
          ))}
        </div>
      </div>

      {/* PHILOSOPHY GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-4 border-[#00e5ff]">
        <div className="bento-card p-10 border-r-4 border-[#00e5ff] bg-[#00e5ff] text-black">
          <h2 className="text-6xl font-black mb-6">01</h2>
          <h3 className="text-xl font-bold uppercase mb-4">The Mandate</h3>
          <p className="text-sm font-bold">Creators deserve a home—not a battlefield. We replace algorithmic noise with creative signal.</p>
        </div>
        <div className="bento-card p-10 border-r-4 border-[#00e5ff]">
          <h2 className="text-6xl font-black mb-6">02</h2>
          <h3 className="text-xl font-bold uppercase mb-4">Infrastructure</h3>
          <p className="text-sm opacity-80">We build the tools that social media forgot. Built for lore, cinematic assets, and technical collaboration.</p>
        </div>
        <div className="bento-card p-10 border-r-4 border-[#00e5ff]">
          <h2 className="text-6xl font-black mb-6">03</h2>
          <h3 className="text-xl font-bold uppercase mb-4">The Niche</h3>
          <p className="text-sm opacity-80">Dedicated exclusively to Animation, Cinema, Sound, and World-building. No slop. No clutter.</p>
        </div>
        <div className="bento-card p-10">
          <h2 className="text-6xl font-black mb-6">04</h2>
          <h3 className="text-xl font-bold uppercase mb-4">Foundry</h3>
          <p className="text-sm opacity-80">Move from Idea → Team → Execution. We aren't here for the 'likes'. We are here for the 'made'.</p>
        </div>
      </section>

      {/* CONTENT: THE PROBLEM RE-DEFINED */}
      <section className="py-32 px-6 md:px-20 border-b-4 border-[#00e5ff]">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-10 leading-none">
              Engagement<br/>vs.<br/>Excellence
            </h2>
            <p className="text-xl opacity-80 leading-relaxed">
              Mainstream platforms prioritize retention over craft. On Mevlint, skill builds the profile—not the trend. We’ve removed the professional friction from the artistic process.
            </p>
          </div>
          <div className="space-y-1">
             {[
               { t: "Clogged Algorithms", icon: Radio },
               { t: "Fragmented Teams", icon: Box },
               { t: "IP Vulnerability", icon: Component },
               { t: "Creative Exhaustion", icon: Zap }
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-between p-8 border-4 border-[#00e5ff] hover:bg-[#00e5ff] hover:text-black transition-colors group">
                 <span className="text-2xl font-black uppercase italic">{item.t}</span>
                 <item.icon size={32} />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL: BRUTALIST CTA */}
      <section className="flex flex-col md:flex-row min-h-[60vh]">
        <div className="flex-1 p-12 md:p-24 border-r-4 border-[#00e5ff] flex flex-col justify-center">
          <h2 className="text-6xl md:text-9xl font-black uppercase italic mb-8">BUILD<br/>WORLDS.</h2>
          <p className="text-xl max-w-md">Mevlint provides the gravity. You provide the imagination.</p>
        </div>
        <a href="/waitlist" className="flex-1 bg-[#00e5ff] text-black p-12 md:p-24 flex flex-col justify-between hover:bg-white transition-colors group">
          <MoveRight size={80} className="group-hover:translate-x-12 transition-transform" />
          <div>
            <span className="text-4xl md:text-6xl font-black uppercase leading-none italic">Join the<br/>Waitlist</span>
            <p className="mt-4 font-bold uppercase tracking-widest">Execute your dreams today</p>
          </div>
        </a>
      </section>

      {/* FOOTER */}
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

      {/* BRUTALIST OVERLAY MESH */}
      <div className="fixed inset-0 pointer-events-none z-200 border-20px border-[#00e5ff]/10"></div>
    </div>
    </div>

  );
}