"use client";
import MaxWidthWrapper from "./max-width-wrapper";

import { CardProps } from "@/lib/types";
import { BenefitsCardsData } from "@/lib/data";
import { raleway } from "./hero";
function BenefitsCard({ icon: Icon, title, text }: CardProps) {
  return (
    <div className="group relative flex flex-col gap-[16px] rounded-[10px] border-2 border-grey-15 p-[50px_40px_30px_30px] shadow-bold transition-transform duration-300 hover:-translate-y-5 lg:max-w-[400px] lg:gap-[20px] lg:p-[60px_40px_40px_40px] xl:max-w-[504px] xl:rounded-xl xl:p-[80px_50px_50px_50px]">
      <div className="absolute left-[24px] top-[-30px] rounded-lg border-2 border-grey-15 bg-orange-90 p-4 xl:top-[-38px] xl:rounded-xl xl:p-5">
        <Icon className="size-6 xl:size-[34px]" />
      </div>
      <h3 className="text-[22px] font-bold leading-[130%] text-grey-10 group-hover:text-orange-70 lg:text-[24px] lg:leading-normal xl:text-[28px]">
        {title}
      </h3>
      <p className="font-medium leading-[150%] text-grey-30 xl:text-[20px] xl:leading-[150%]">
        {text}
      </p>
    </div>
  );
}

const OurBenefits = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="mb-[78px] flex flex-col items-center justify-center gap-[10px] text-center text-grey-10 md:gap-[20px] lg:mb-[80px]">
          <div className="rounded-md border-2 border-black px-[14px] py-[8px] xl:rounded-[10px] xl:px-[20px] xl:py-[10px]">
            <p className="text-sm font-medium text-grey-20 lg:text-[20px]">
              Children Deserve Bright Future
            </p>
          </div>
          <h3
            className={`${raleway.className} text-[38px] font-bold leading-[130%] lg:text-[48px] xl:text-[58px]`}
          >
            Our Benefits
          </h3>
          <p className="mx-auto max-w-[992px] font-medium text-grey-20 lg:text-[20px]">
            With a dedicated team of experienced educators, state-of-the-art
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child&apos;s future.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[68px] md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[40px] lg:gap-y-[80px]">
          {BenefitsCardsData.map(({ id, icon, text, title }) => (
            <BenefitsCard
              id={id}
              key={id}
              icon={icon}
              text={text}
              title={title}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default OurBenefits;
