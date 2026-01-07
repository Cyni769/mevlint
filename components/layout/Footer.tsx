import Link from "next/link";

const Footer = () => {
    return (
         <div className="flex items-center h-16 justify-center p-6 border-primary border gap-x-22 media:max-lg:gap-x-6 max-md:gap-x-4 max-sm:gap-x-2 max-sm:flex-wrap max-sm:justify-center max-sm:p-4 media:max-sm:h-auto max-sm:mb-0">
            <div>
                <Link href="/" className="text-x text-mono hover:bg-primary hover:text-white px-3 py-1 transition">
                    About
                </Link>
                <Link href="/" className="text-x text-mono hover:bg-primary hover:text-white px-3 py-1 transition">
                    Explore
                </Link>
                 <Link href="/" className="text-x text-mono hover:bg-primary hover:text-white px-3 py-1 transition">
                    Partners
                </Link>
                 <Link href="/" className="text-x text-mono hover:bg-primary hover:text-white px-3 py-1 transition">
                    FQA
                </Link>
          </div>
        </div>
    );
};

export default Footer;