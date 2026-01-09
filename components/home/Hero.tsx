import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Plus, X, PenTool, Film,
  Mic, UserCircle, Palette, ArrowRight, Bookmark,
  Command, Globe, Sparkles, MoveRight, Layers, Cpu, Scan, Activity,
  ChevronDown, Workflow, Shield, Zap, Map, Moon, Sun, Cross
} from 'lucide-react';

const ALL_PROFESSIONS = [
  { id: "home", title: "Writing & Storytelling", icon: PenTool, hook: "Adaptation-ready lore.", details: "Infrastructure to turn scripts into series. Mevlint provides lore-management tools to keep your world-building consistent.", benefit: "Pipeline to animators seeking source material." },
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

const Hero = () => {
    const pathname = usePathname();

    return (
        <>
        {/* 3. HERO (ADDING PADDING TOP TO PREVENT CROP) */}
        {pathname == '/' &&
        <section className="h-screen flex flex-col justify-center px-8 md:px-20 lg:px-40 pt-32 border-b border-white/5 relative">
          <div className="max-w-6xl">
            <span className="hero-line text-[10px] uppercase tracking-[1em] opacity-30 mb-8 block text-[#ffcc33]">Sequence 01 // The Foundry Initialized</span>
            <h2 className="hero-line text-[12vw] md:text-[9vw] leading-[0.85] font-black text tracking-tighter uppercase mb-12 italic">
              Imagine <br/> <span className="text-[#00e5ff]">Executable.</span>
            </h2>
            <div className="hero-line flex flex-col md:flex-row gap-16 items-start md:items-end mt-12 border-l border-[#ff4d4d] pl-10">
              <p className="max-w-md text-lg opacity-40 font-medium leading-relaxed uppercase italic">
                "Infrastructure for creators who build worlds, not just posts. We provide the gravity, you provide the vision."
              </p>
            </div>
          </div>
        </section>}
        </>
    );
};

export default Hero;