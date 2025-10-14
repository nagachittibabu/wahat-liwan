"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [viewProjects, setViewProjects] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 642
  );
  const [closeBtn, setCloseBtn] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [slideText, setSlideText] = useState("");
  const pathname = usePathname();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 642;
      setIsMobile(mobile);
      setMenuButton(true);
      setIsNavVisible(!mobile);
    };

    handleResize(); // initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle close nav
  const closeNav = () => {
    setSlideText("slide-right");
    setCloseBtn(false);
    setIsNavVisible(false);
    setIsMobile(true);
    setMenuButton(true);
  };

  // Handle open menu
  const menuClick = () => {
    setIsNavVisible(true);
    setCloseBtn(true);
    setIsMobile(false);
    setSlideText("slide-left");
    setMenuButton(false);
  };

  // Prevent background scroll when nav open
  useEffect(() => {
    document.body.style.overflow =
      !isMobile && isNavVisible && closeBtn ? "hidden" : "";
  }, [isMobile, isNavVisible, closeBtn]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header className="w-full h-[100px] flex justify-center bg-transparent absolute left-0 top-0 z-50 text-white">
      {/* Logo */}
      <div className="w-1/3 h-full flex items-center justify-center companylogo">
        <Link
          href="/"
          className="w-full h-[90%] xl:w-[95%] xl:h-[90%] lg:w-[90%] lg:h-[80%] md:w-full md:h-3/4 sm:w-full sm:h-[70%] relative overflow-hidden"
        >
          <Image src="/images/logo.png" alt="Company Logo" fill className="object-fit" />
        </Link>
      </div>

      {/* Menu button (Mobile only) */}
      {isMobile && menuButton && (
        <button onClick={menuClick} className="menu_button cursor-pointer">
          <i className="bx bx-menu"></i>
        </button>
      )}

      {/* Navbar */}
      {isNavVisible && (
        <nav
          id="navbar"
          className={`w-3/4 h-full flex justify-center items-center relative ${slideText}`}
        >
          {closeBtn && (
            <div
              className="absolute top-4 left-4 z-[999] text-white text-[22px] cursor-pointer"
              onClick={closeNav}
            >
              &times;
            </div>
          )}

          <ul className="navbar w-full h-full flex justify-end pr-8 items-center space-x-4 xl:space-x-20 lg:space-x-12 md:space-x-6 sm:space-x-8 text-white font-semibold xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[11px]">
            <li className="h-full flex justify-center items-center">
              <Link href="/">HOME</Link>
            </li>

            <li className="h-full flex justify-center items-center">
              <Link href="/about-us">ABOUT US</Link>
            </li>

            {/* Projects Dropdown */}
            <li
              className="h-full flex justify-center items-center"
              onMouseLeave={() => setViewProjects(false)}
            >
              <div
                className="more_features relative"
                onMouseEnter={() => setViewProjects(true)}
                onClick={() => setViewProjects(!viewProjects)}
              >
                <button className="mr-0 pr-2">PROJECTS</button>
                <i
                  className={viewProjects ? "bx bx-chevron-up" : "bx bx-chevron-down"}
                ></i>
                {viewProjects && (
                  <div className="w-max absolute top-8 flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-2 text-gray-200 left-0 text-[10px]">
                    <Link href="/ongoing-projects">ONGOING PROJECTS</Link>
                    <Link href="/completed-projects">COMPLETED PROJECTS</Link>
                  </div>
                )}
              </div>
            </li>

            {/* Services */}
            <li
              className={`h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400 ${
                pathname === "/services"
                  ? "text-green-300 underline underline-offset-[12px]"
                  : ""
              }`}
            >
              <Link href="/services">SERVICES</Link>
            </li>

            {/* More Dropdown */}
            <li
              className="h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400"
              onMouseLeave={() => setMoreDetails(false)}
            >
              <div
                className="more_features relative"
                onMouseEnter={() => setMoreDetails(true)}
                onClick={() => setMoreDetails(!moreDetails)}
              >
                <button className="mr-0 pr-2">MORE</button>
                <i
                  className={moreDetails ? "bx bx-chevron-up" : "bx bx-chevron-down"}
                ></i>

                {moreDetails && (
                  <div className="w-[140px] absolute top-8 flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-2 text-gray-200 left-0 text-[10px]">
                    <Link href="/groups">GROUPS</Link>
                    <Link href="/pre-cast">CAST</Link>
                    <Link href="/commitment">COMMITMENT TO QUALITY</Link>
                    <Link href="/PETRA_PROFILE.pdf">PROFILE</Link>
                  </div>
                )}
              </div>
            </li>

            {/* Contact Button */}
            <button className="w-[160px] p-2 px-6 rounded-2xl flex justify-center items-center text-black bg-green-500 font-bold">
              <Link href="/contact-us">GET IN TOUCH</Link>
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;