"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";
import { navItems } from "../constant";

const HeaderHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const isActive = (path) => {
    if (path === "/" && path.href === "/") return true;
    if (path !== "/" && path.href === path) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* <div
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? "bg-orange-500" : "bg-white"
              }`}
            >
              <Dumbbell
                className={`h-6 w-6 ${
                  isScrolled ? "text-white" : "text-orange-500"
                }`}
              />
            </div> */}
            <span
              // className={`text-sm font-bold transition-colors duration-300 ${
              //   isScrolled ? "text-gray-900" : "text-white"
              // }`}
            >
              <img
              className="w-45 "
              src={`https://i0.wp.com/platinumfitnesspk.com/wp-content/uploads/2023/09/cropped-cropped-cropped-cropped-rsz_logo_black-1-1.webp?fit=351%2C104&ssl=1 ${
                isScrolled ? "https://platinumfitnesspk.com/wp-content/uploads/2023/09/Platinum-Fitness-Logo-Final-white.png" : "https://i0.wp.com/platinumfitnesspk.com/wp-content/uploads/2023/09/cropped-cropped-cropped-cropped-rsz_logo_black-1-1.webp?fit=351%2C104&ssl=1"
              }`} />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                  isActive(item.href)
                    ? "text-orange-500"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
              <Link href="/pricing">
              Join Now
              </Link>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                    isActive(item.href)
                      ? "text-orange-500"
                      : isScrolled
                      ? "text-gray-700"
                      : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 w-fit">
                Join Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderHome;
