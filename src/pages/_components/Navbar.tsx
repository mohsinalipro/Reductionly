"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../_assets/svgs/logo.svg";
import MenuIcon from "../../_assets/svgs/menu-icon.svg";
import CancelIcon from "../../_assets/svgs/cancel-icon.svg";
import GlobalBtn from "./GlobalBtn";

const navItems = [
  { label: "HOME", href: "/home" },
  { label: "HOW IT WORKS", href: "/how-it-works" },
  { label: "FAQS", href: "/faqs" },
  { label: "CONTACT", href: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 relative z-50 ">
      <nav className="w-full py-7 flex items-center justify-between text-white">
        <div
          className="text-2xl font-bold tracking-wide cursor-pointer"
          onClick={() => router.push("/home")}
        >
          <Image src={Logo} alt="Brand Logo" className="w-28 md:w-32 lg:w-[160px]" />
        </div>

        <div className="hidden md:flex md:space-x-6 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="hover:text-[#BADA50] transition text-sm font-semibold RightGrotesk"
            >
              {item.label}
            </button>
          ))}
          <div className="flex gap-2">
            <GlobalBtn
              className="h-14 w-[135px] bg-[#F8FDE9] !text-[#062014] justify-center rounded-xl text-center text-sm md:h-12 md:max-w-[148px] uppercase font-semibold"
              text="GET STARTED"
            />
            <GlobalBtn
              className="h-14 w-[98px] bg-[#BADA50] !text-[#062014] justify-center rounded-xl text-center text-sm md:h-12 md:max-w-[148px] uppercase font-semibold"
              text="Login"
            />
          </div>
        </div>

        <button
          className="md:hidden text-white"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="relative block w-6 h-6">
            <Image
              src={MenuIcon}
              alt="open menu"
              className={`absolute inset-0 w-6 h-6 transition-all duration-200 ease-out ${isOpen ? 'opacity-0 scale-90 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
            />
            <Image
              src={CancelIcon}
              alt="close menu"
              className={`absolute inset-0 w-6 h-6 transition-all duration-200 ease-out ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 -rotate-90 scale-90'}`}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full flex flex-col items-center space-y-6 px-6 py-6 bg-[#004725] md:hidden">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="hover:text-[#BADA50] transition text-base font-semibold"
            >
              {item.label}
            </button>
          ))}
          <div className="flex gap-2 flex-wrap">
            <GlobalBtn
              className="h-12 w-[135px] bg-[#F8FDE9] !text-[#062014] justify-center rounded-xl text-center text-sm md:h-12 md:max-w-[148px] uppercase font-semibold"
              text="GET STARTED"
            />
            <GlobalBtn
              className="h-12 w-[98px] bg-[#BADA50] !text-[#062014] justify-center rounded-xl text-center text-sm md:h-12 md:max-w-[148px] uppercase font-semibold"
              text="Login"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
