"use client";
import Logo from "@/assets/Logo.svg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
const NavLinks: { id: number; text: string; href: string }[] = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "About Us",
    href: "/about-us",
  },
  {
    id: 3,
    text: "Academics",
    href: "/academics",
  },
  {
    id: 4,
    text: "Admissions",
    href: "/admissions",
  },
  {
    id: 5,
    text: "Student Life",
    href: "/student-life",
  },
  {
    id: 6,
    text: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  // menu state
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  //

  return (
    <header className="mt-[40px] w-full overflow-hidden lg:mt-4">
      <MaxWidthWrapper>
        {/* banner */}
        <div className="relative flex items-center justify-center overflow-hidden rounded-md border-2 border-grey-15 bg-orange-90 px-[42.5px] py-3 shadow-md">
          <p className="lg:text-md flex items-center justify-center gap-1 text-xs font-medium sm:text-sm lg:gap-4">
            Admission is Open, Grab your seat now
            <Link
              href="/admissions"
              className="transition-transform duration-300 hover:translate-x-1"
            >
              <ArrowRightIcon className="h-[24px] w-[24px]" />
            </Link>
          </p>
          {/* decorations */}
          {/* left */}
          <div className="absolute -bottom-[25px] -right-[25px] z-10 size-[50px] bg-deco-globe bg-cover lg:bottom-[-16px] lg:left-[978px] lg:size-[32px]"></div>
          <div className="lg: absolute left-[0] top-[0] size-[50px] bg-deco-abstract bg-cover opacity-50 lg:left-[0px] lg:top-[-87px] lg:size-[180px]"></div>
          {/* right */}
          <div className="absolute left-[4px] top-[-25px] z-10 size-[50px] bg-deco-globe bg-cover lg:left-[292px] lg:size-[50px]"></div>
          <div className="bg-fit absolute right-0 top-0 z-10 size-[50px] bg-deco-abstract bg-cover opacity-50 lg:right-[0px] lg:top-[-87px] lg:size-[180px]"></div>
        </div>
        {/* navbar */}
        <div className="mt-[14px] flex h-[62px] items-center rounded-lg border-2 border-grey-15 drop-shadow-md lg:h-[66px] xl:h-[80px]">
          <div className="flex h-full min-w-[178px] items-center justify-center rounded-l-md border-r-2 border-grey-15 bg-orange-65 px-[20px] py-[16px]">
            <Logo />
          </div>
          <div className="min-w-[52px] grow bg-white lg:mr-auto lg:grow-0"></div>
          {/* Links */}
          <div className="hidden h-full items-center justify-center lg:flex">
            {NavLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className={`xl:text-md flex h-full items-center justify-center border-l-2 border-grey-15 transition-colors duration-300 hover:bg-orange-65 lg:px-[30px] lg:py-5 xl:px-[34px] xl:py-[24px] ${
                  link.id === 1 && "bg-orange-95"
                } ${link.id === 6 && "rounded-r-lg bg-orange-75"}`}
              >
                {link.text}
              </Link>
            ))}
          </div>
          {/* Mobile button */}
          <button
            onClick={toggleMenu}
            className="flex h-full min-w-[88px] items-center justify-center rounded-r-lg border-l-2 border-grey-15 bg-orange-95 lg:hidden"
          >
            <Bars3BottomRightIcon className="size-7" />
          </button>
        </div>
      </MaxWidthWrapper>
      {/*  mobile menu */}
      <div
        className={cn(
          "absolute right-0 top-0 z-10 h-[70vh] w-screen origin-right bg-orange-80 transition-transform duration-300",
          {
            "scale-x-0": !isOpen,
          },
          {
            "scale-x-100": isOpen,
          },
        )}
      >
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Mobile exit menu button */}
          <button
            onClick={toggleMenu}
            className="absolute right-4 top-8 z-20 flex size-[48px] items-center justify-center"
          >
            <XMarkIcon className="size-7" />
          </button>
          {/* NAVLINKS */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-8">
            {NavLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className={`border-b-2 border-grey-15 px-2 py-0.5`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
