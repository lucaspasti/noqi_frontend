"use client";

import Link from "next/link";
import { AnimatedLogo } from "./animatedLogo";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md fixed w-full z-50 h-20">
      <div className="mx-20">
        <Link href="/" className="flex-shrink-0">
          <AnimatedLogo />
        </Link>
      </div>
    </nav>
  );
};
