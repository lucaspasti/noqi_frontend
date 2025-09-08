"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatedLogo } from "./animatedLogo";

interface NavbarProps {
  isLoggedIn?: boolean;
}

export const Navbar = ({ isLoggedIn = true }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Checa se a animação já rodou nesta sessão
    const hasAnimated = sessionStorage.getItem("navbarAnimated");
    if (!hasAnimated) {
      setAnimate(true);
      sessionStorage.setItem("navbarAnimated", "true");
    }
  }, []);

  return (
    <nav className="bg-gray-800 text-white shadow-md fixed w-full z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center ">
          <Link href="/" className="flex-shrink-0">
            <AnimatedLogo />
          </Link>

          {/* Menu Desktop */}
          <ul
            className={`hidden md:flex space-x-6 text-xl ${
              animate ? "animate__animated animate__fadeInRight" : ""
            }`}
          >
            {!isLoggedIn && (
              <li>
                <Link href="/login">
                  <span className="hover:text-gray-300">Login</span>
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <Link href="/posts">
                    <span className="hover:text-gray-400 font-semibold cursor-pointer">
                      Issues
                    </span>
                  </Link>
                </li>
                <li>
                  <button className="  hover:text-red-400 cursor-pointer font-semibold ">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-4 py-4 flex flex-col space-y-2">
          {!isLoggedIn && (
            <li>
              <Link href="/login" className="hover:text-gray-300 font-semibold">
                Login
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link href="/posts" className="hover:text-gray-300">
                  Issues
                </Link>
              </li>
              <li>
                <button className="text-red-400 hover:text-red-600 cursor-pointer">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};
