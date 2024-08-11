import MaxWidthWrapper from "./max-width-wrapper";

import Logo from "@/assets/Logo.svg";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-[80px] lg:mt-[200px]">
      <MaxWidthWrapper>
        <div className="mb-5 rounded-[12px] border-2 border-grey-15 px-[30px] py-[60px] text-[16px] font-medium shadow-bold lg:p-20 xl:p-[100px] xl:text-[20px]">
          <div className="flex flex-col lg:mb-[50px] lg:flex-row lg:gap-[80px]">
            <div className="flex flex-col justify-center gap-[18px]">
              <Logo
                className="mx-auto h-[40px] w-[182px] bg-cover lg:mx-0 lg:h-[50px] lg:w-[228px]"
                alt="little learners logo"
              />
              <p className="text-center text-grey-30 lg:max-w-[519px] lg:text-left">
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </p>
              <div className="flex flex-col gap-[24px]">
                <div className="flex items-center gap-[8px] lg:gap-[10px]">
                  <div className="rounded-md border-2 border-grey-15 bg-orange-97 p-2">
                    <EnvelopeIcon className="size-5 xl:size-6" />
                  </div>
                  <p>hello@littlelearners.com</p>
                </div>
                <div className="flex items-center gap-[8px] lg:gap-[10px]">
                  <div className="rounded-md border-2 border-grey-15 bg-orange-97 p-2">
                    <PhoneIcon className="size-5 xl:size-6" />
                  </div>
                  <p>+91 91813 23 2309</p>
                </div>
                <div className="flex items-center gap-[8px] lg:gap-[10px]">
                  <div className="rounded-md border-2 border-grey-15 bg-orange-97 p-2">
                    <MapPinIcon className="size-5 xl:size-6" />
                  </div>
                  <p>Somewhere in the World</p>
                </div>
              </div>
            </div>
            <div className="mt-[40px] grid grid-cols-2 gap-y-[50px] text-grey-20 lg:mt-0 lg:grid-cols-4 lg:gap-x-[30px]">
              <div className="flex flex-col lg:gap-[14px]">
                <h3 className="font-semibold text-grey-15">Home</h3>
                <Link href="/#features">Features</Link>
                <Link href="/#our-testimonials">Our Testimonials</Link>
                <Link href="/#faq">FAQ</Link>
              </div>
              <div className="flex flex-col lg:gap-[14px]">
                <h3 className="font-semibold text-grey-15">About Us</h3>
                <Link href="/about-us#our-mission">Our Mission</Link>
                <Link href="/about-us#our-vision">Our Vision</Link>
                <Link href="/about-us#awards-and-recognitions">
                  Awards And Recognitions
                </Link>
                <Link href="/about-us#history">History</Link>
                <Link href="/about-us#teachers">Teachers</Link>
              </div>
              <div className="flex flex-col gap-[14px]">
                <h3 className="font-semibold text-grey-15">Academics</h3>
                <Link href="/academics#special-features">Special Features</Link>
                <Link href="/academics#gallery">Gallery</Link>
              </div>
              <div className="flex flex-col gap-[14px]">
                <h3 className="font-semibold text-grey-15">Contact Us</h3>
                <Link href="/contact-us#information">Information</Link>
                <Link href="/contact-us#map-and-direction">
                  Map & Direction
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative mb-[32px] mt-[30px] flex flex-col items-center justify-center gap-[20px] lg:flex-row lg:justify-between">
              <div className="flex gap-[12px] text-sm xl:text-lg">
                <p className="border-r-2 border-grey-15 pr-[6px] lg:pr-[16px]">
                  Terms of Service
                </p>
                <p className="border-r-2 border-grey-15 pr-[6px]">
                  Privacy Policy
                </p>
                <p>Cookie Policy</p>
              </div>
              <div className="flex gap-[10px] lg:gap-[14px]">
                <div className="rounded-md border-2 border-grey-15 bg-orange-90 p-3">
                  <FaFacebook size={24} className="size-5 xl:size-6" />
                </div>
                <div className="rounded-md border-2 border-grey-15 bg-orange-90 p-3">
                  <FaTwitter size={24} className="size-5 xl:size-6" />
                </div>
                <div className="rounded-md border-2 border-grey-15 bg-orange-90 p-3">
                  <FaLinkedin size={24} className="size-5 xl:size-6" />
                </div>
              </div>
              <div className="absolute top-[-16px] h-[1px] w-full bg-grey-15"></div>
              <div className="absolute bottom-[-16px] h-[1px] w-full bg-grey-15"></div>
            </div>
            <p className="text-center text-grey-40 lg:mt-[30px]">
              Copyright © {new Date().getFullYear()} Little Learners Academy.
              All rights reserved.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
