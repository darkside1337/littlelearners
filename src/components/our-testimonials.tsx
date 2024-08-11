"use client";
import MaxWidthWrapper from "./max-width-wrapper";
import { StarIcon } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { TestimonyCardProps } from "@/lib/types";
import { TestimonyCardsData } from "@/lib/data";
import { raleway } from "./hero";

//

function TestimonyCard({ icon, name, stars, text }: TestimonyCardProps) {
  return (
    <div className="m-4 flex min-h-[322px] flex-col items-center justify-center gap-[20px] rounded-[10px] border-2 border-grey-15 p-[30px] text-center text-grey-20 shadow-bold lg:max-w-[340px] lg:gap-[24px] lg:p-[40px] xl:max-w-[462px] xl:gap-[30px] xl:rounded-[12px] xl:p-[50px]">
      <div className="flex flex-col items-center justify-center gap-[10px] xl:gap-[12px]">
        <div className="border-1 rounded-full border border-grey-20 p-[8px] xl:p-[10px]">
          {icon}
        </div>
        <div className="flex gap-[4px] xl:gap-[5px]">
          {Array.from({ length: stars }).map((_, i) => (
            <StarIcon
              key={i}
              size={24}
              className="size-5 xl:size-6"
              fill="#FF8D4D"
              strokeWidth={0}
            />
          ))}
        </div>
      </div>
      <h3 className="text-[20px] font-semibold xl:text-[24px]">{name}</h3>
      <p className="font-medium xl:text-[20px]">{text}</p>
    </div>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="rounded-[8px] border-2 border-grey-20 p-[12px] transition-transform duration-300 hover:scale-[.90] xl:p-[14px]"
      onClick={onClick}
    >
      <ArrowLeftIcon className="size-6 xl:size-[30px]" />
    </button>
  );
}
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="rounded-[8px] border-2 border-grey-20 p-[12px] transition-transform duration-300 hover:scale-[.90] xl:p-[14px]"
      onClick={onClick}
    >
      <ArrowRightIcon className="size-6 xl:size-[30px]" />
    </button>
  );
}

function CarouselSection() {
  let sliderRef = useRef(null);
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="flex flex-col gap-[40px]">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="testslidercomponent"
      >
        {TestimonyCardsData.map(({ id, icon, stars, name, text }) => (
          <TestimonyCard
            key={id}
            icon={icon}
            stars={stars}
            name={name}
            text={text}
          />
        ))}
      </Slider>
      <div className="mx-auto flex gap-4">
        <PrevArrow onClick={previous} />
        <NextArrow onClick={next} />
      </div>
    </div>
  );
}

const OurTestimonials = () => {
  return (
    <section className="mt-[80px] lg:mt-[150px] xl:mt-[200px]">
      <MaxWidthWrapper>
        <div>
          <div className="flex flex-col items-center justify-center gap-[10px] text-center lg:gap-[14px] xl:gap-[19px]">
            <div className="rounded-md border-2 border-black px-[14px] py-[8px] xl:rounded-[10px] xl:px-[20px] xl:py-[10px]">
              <p className="text-sm font-medium text-grey-20 lg:text-[20px]">
                Their Happy Words 🤗
              </p>
            </div>
            <h3
              className={`text-[38px] font-bold leading-[130%] text-grey-10 lg:text-[48px] xl:text-[58px] ${raleway.className}`}
            >
              Our Testimonials
            </h3>
            <p className="max-w-[992px] font-medium text-grey-20">
              Our testimonials are heartfelt reflections of the nurturing
              environment we provide, where children flourish both academically
              and emotionally.
            </p>
          </div>
          <div className="mt-[50px] lg:mt-[80px] xl:mt-[100px]">
            <CarouselSection />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default OurTestimonials;
