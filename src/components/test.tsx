"use client";
import MaxWidthWrapper from "./max-width-wrapper";
import { StarIcon } from "lucide-react";
import DavidKIcon from "@/assets/davidK.svg";
import EmilyLIcon from "@/assets/emilyL.svg";
import JenniferBIcon from "@/assets/jenniferB.svg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReactElement } from "react";
import Autoplay from "embla-carousel-autoplay";

interface TestimonyCardProps {
  id?: number;
  icon: ReactElement;
  name: string;
  stars: number;
  text: string;
}

const TestimonyCardsData: TestimonyCardProps[] = [
  {
    id: 1,
    icon: <JenniferBIcon />,
    name: "Jennifer B",
    stars: 5,
    text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    id: 2,
    icon: <DavidKIcon />,
    name: "David K",
    stars: 5,

    text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    id: 3,
    icon: <EmilyLIcon />,
    stars: 5,
    name: "Emily L",
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
];

function TestimonyCard({ icon, name, stars, text }: TestimonyCardProps) {
  return (
    <div className="flex min-h-[322px] flex-col items-center justify-center gap-[20px] rounded-[10px] border-2 border-grey-15 p-[30px] text-center text-grey-20 shadow-bold lg:gap-[24px] lg:p-[40px] xl:gap-[30px] xl:rounded-[12px] xl:p-[50px]">
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
function CarouselSection() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[Autoplay({ delay: 3000 })]}
      className="carousel"
    >
      <CarouselContent className="carouselcontent">
        {TestimonyCardsData.map(({ id, icon, stars, name, text }) => (
          <CarouselItem key={id} className="carouselitem basis-[90%]">
            <TestimonyCard icon={icon} stars={stars} name={name} text={text} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-8">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
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
            <h3 className="text-[38px] font-bold leading-[130%] text-grey-10 lg:text-[48px] xl:text-[58px]">
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
