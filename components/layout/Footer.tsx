import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <>
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
              <li><a href="/" className="hover:text-[#00e5ff]">Home</a></li>
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
        </>
    );
};

export default Footer;