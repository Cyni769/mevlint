'use client';

import React from "react";
import type { Metadata } from "next";
import Navbar from "../../components/layout/Navbar";
import Link from "next/link";

const Landing = () => {
  return (
    <>
    {/* Landing Page */}
      <div className="top-0 flex flex-col items-center m-6 justify-center bg-background text-primary">
        {/* Navigation */}
        <div className="w-full justify-center bg-background dark:bg-background text-primary dark:text-primary">
          <Navbar />
        
      </div>
    </div>
    </>
  );
};

export default Landing;