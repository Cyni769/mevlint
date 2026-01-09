'use client';
import Link from "next/link";
import { Activity } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  // Shared styles for nav links
  const baseLinkStyles = "text-x text-mono px-3 py-1 transition";
  const navLinkStyles = `${baseLinkStyles} text-secondary hover:bg-secondary hover:text-white`;
  const ctaStyles = `${baseLinkStyles} font-bold text-background bg-primary hover:bg-secondary hover:text-white`;
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/vision", label: "Vision" },
    { href: "/updates", label: "Updates" },
  ];

  return (
    <>
    {/* 2. NAVIGATION */}
      <nav className="fixed top-0 w-full px-8 md:px-20 py-10 flex justify-between items-center z-[250] bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <h1 className="text-xl font-black tracking-tighter uppercase"><a href="/">MEVLINT</a></h1>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest hidden md:flex opacity-40">
          {pathname !== '/' && <Link href="/" className="hover:text-[#00e5ff]">Home</Link>}
          <Link href="/explore" className="hover:text-[#00e5ff] transition-colors">Explore</Link>
          <Link href="/vision" className="hover:text-[#ff4d4d] transition-colors">Vision</Link>
          <div className="flex items-center gap-2 text-[#00e5ff]">
            <Activity size={10} className="animate-pulse" />
            <Link href="/updates">Logs</Link>
          </div>
            {/* PROPOSAL (ADDING NEW PROTOCOL) */}
            {pathname == '/proposal' && <div className="text-[#ffcc33] font-black text-[10px] tracking-[0.3em] uppercase animate-pulse">
              Protocol 05 // Proposal
        </div>}
           {/* WAITLIST (ADDING STATUS) */}
           {pathname == '/waitlist' && <div className="text-[#00e5ff] font-black text-[10px] tracking-[0.3em] uppercase animate-pulse">
          Status // Recruitment
        </div>}
        </div>
          {/* CTA (! FOR PROPOSAL & WAITLIST) */}
          {pathname !== '/proposal' && pathname !== '/waitlist' && <a href="/waitlist" className="bg-[#00e5ff] text-black px-8 py-2 rounded-full font-black text-[10px] tracking-widest hover:bg-white transition-all">JOIN PRODUCTION</a>}
      </nav>
    </>
  );
};

export default Navbar;