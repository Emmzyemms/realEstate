import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // this useEffect prevent webpage from scrowlling when mobile menu-open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto fixed top-0 flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-gray-900 opacity-50  ">
        <img src={assets.logo} alt="logo" />

        {/* -----Desktop-menu---- */}
        <ul className="hidden  md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-300">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-300">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-300">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-300"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer hover:bg-gray-400">
          Sign Up
        </button>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7  cursor-pointer"
          alt="menu-open"
        />
      </div>

      {/* --------Mobile-menu----- */}

      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full " : "h-0 w-o"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="menu-close"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            href="#Header"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 rounded-full inline-block"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 rounded-full inline-block"
          >
            About
          </a>
          <a
            href="#Projects"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            href="Testimonials"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
