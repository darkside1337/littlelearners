"use client";
import HeroImage from "@/assets/HeroImage.png";
import Image from "next/image";

import MaxWidthWrapper from "./max-width-wrapper";

import { Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const Hero = () => {
  return (
    <section className="mb-20 mt-[50px] lg:mt-[60px] xl:mt-[80px]">
      <MaxWidthWrapper className="flex h-full flex-col items-center justify-center bg-white lg:flex-row">
        <div className="relative">
          <Image
            src={HeroImage}
            alt="two children hugging each other"
            quality={90}
            draggable={false}
          />
        </div>
        {/*   right side  */}
        <div className="lg:w-[50%]">
          <div
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="mt-[40px] text-center lg:ml-[50px] lg:text-left xl:ml-[60px]"
          >
            <div className="relative mx-auto w-fit lg:mx-0">
              <p className="lg font-medium leading-normal text-grey-15 lg:text-[18px] xl:text-[22px]">
                Welcome to Little Learners Academy
              </p>
              <div className="absolute bottom-[-6px] h-[2px] w-full bg-grey-15"></div>
            </div>

            <h1
              className={`${raleway.className} mt-[10px] text-[30px] font-extrabold text-grey-10 lg:text-[40px] xl:text-[54px]`}
            >
              Where Young Minds Blossom and
              <span className="text-orange-65"> Dreams Take Flight.</span>
            </h1>
            <p className="lg: mt-[10px] font-medium text-grey-20 lg:text-[20px]">
              Our kinder garden school provides a nurturing and stimulating
              environment, fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!
            </p>

            <div
              style={{
                boxShadow: "4px 4px 0px 1px #FFBE99",
                border: "2px solid #262626",
              }}
              className="mt-[40px] flex flex-col gap-[40px] rounded-[10px] bg-orange-95 p-[40px] lg:flex-row lg:p-[20px] xl:p-[40px]"
            >
              <div className="relative text-grey-15">
                <p className="text-[34px] font-extrabold lg:text-[44px]">
                  +7000
                </p>
                <p className="font-medium">Students Passed Out</p>
                <div className="absolute bottom-[-20px] h-[2px] w-full bg-grey-15 lg:hidden"></div>
              </div>
              <div className="relative text-grey-15">
                <p className="text-[34px] font-extrabold lg:text-[44px]">+37</p>
                <p className="font-medium">Awards & Recognitions</p>
                <div className="absolute bottom-[-20px] h-[2px] w-full bg-grey-15 lg:hidden"></div>
              </div>
              <div className="relative text-grey-15">
                <p className="text-[34px] font-extrabold lg:text-[44px]">+15</p>
                <p className="font-medium">Experience Educators</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
