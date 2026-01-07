'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  
  // Shared styles for nav links
  const baseLinkStyles = "text-x text-mono px-3 py-1 transition";
  const navLinkStyles = `${baseLinkStyles} text-secondary hover:bg-secondary hover:text-white`;
  const ctaStyles = `${baseLinkStyles} font-bold text-background bg-primary hover:bg-secondary hover:text-white`;
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/vision", label: "Vision" },
    { href: "/updates", label: "Updates" },
    { href: "/partners", label: "Partners" },
  ];

  return (
    <nav className="flex items-center justify-center h-16 gap-x-22 p-6 border border-secondary lg:gap-x-6 md:gap-x-4 sm:flex-wrap sm:justify-center sm:gap-x-2 sm:p-4 sm:h-auto sm:mb-0">
      {navItems.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={label}
            href={href}
            className={`${baseLinkStyles} ${isActive ? 'text-primary' : 'text-secondary'} hover:bg-secondary hover:text-white`}
          >
            {label}
          </Link>
        );
      })}
      <Link href="/join" className={ctaStyles}>
        JOIN US
      </Link>
    </nav>
  );
};

export default Navbar;