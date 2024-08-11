import { VisitPagesData } from "@/lib/data";
import MaxWidthWrapper from "./max-width-wrapper";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700", "800"],
});

function LearnMoreButton() {
  return (
    <button className="mt-[40px] flex w-full items-center justify-center gap-[10px] rounded-[6px] border-2 border-grey-15 bg-orange-90 py-[16px] text-[16px] font-medium shadow-bold transition-transform duration-300 ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] lg:rounded-[8px] lg:py-[18px] lg:text-[18px] xl:rounded-[10px] xl:text-[20px]">
      <p>Learn More</p>
      <ArrowRightIcon className="size-5 lg:size-6 xl:size-[30px]" />
    </button>
  );
}

function CustomPipe() {
  return (
    <div className="flex items-center justify-center">
      <div className="size-5 rounded-full border-2 border-grey-15"></div>
      <div className="flex max-w-full gap-[8px] border-grey-15">
        <div className="flex h-[12px] w-[32px] items-center justify-start bg-orange-80">
          <div className="h-[2px] w-[85%] border-grey-15 bg-grey-15"></div>
        </div>
        <div className="flex h-[12px] w-[32px] items-center justify-start bg-orange-80">
          <div className="h-[2px] w-[85%] border-grey-15 bg-grey-15"></div>
        </div>
        <div className="flex h-[12px] w-[32px] items-center justify-start bg-orange-80">
          <div className="h-[2px] w-[85%] border-grey-15 bg-grey-15"></div>
        </div>
        <div className="flex h-[12px] w-[32px] items-center justify-start bg-orange-80">
          <div className="h-[2px] w-[85%] border-grey-15 bg-grey-15"></div>
        </div>
        <div className="flex h-[12px] w-[32px] items-center justify-start bg-orange-80">
          <div className="h-[2px] w-[85%] border-grey-15 bg-grey-15"></div>
        </div>
        <div className="hidden h-[12px] w-[32px] items-center justify-start bg-orange-80 lg:flex">
          <div className="h-[2px] w-[85%] border-grey-15 bg-grey-15"></div>
        </div>{" "}
        <div className="hidden h-[12px] w-[32px] items-center justify-start bg-orange-80 lg:flex">
          <div className="h-[2px] w-[85%] border-grey-15 bg-grey-15"></div>
        </div>{" "}
        <div className="hidden h-[12px] w-[32px] items-center justify-start bg-orange-80 xl:flex">
          <div className="h-[2px] w-[85%] border-grey-15 bg-grey-15"></div>
        </div>
      </div>
      <div className="size-5 rounded-full border-2 border-grey-15"></div>
    </div>
  );
}
function CustomCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="group flex flex-col justify-center gap-[30px] rounded-[6px] border-2 border-grey-15 p-[40px] text-center shadow-bold transition-transform duration-300 hover:-translate-y-5 lg:rounded-[8px] lg:p-[60px] xl:rounded-[10px] xl:p-[80px]">
      <h3 className="text-[28px] font-bold leading-[130%] text-grey-10 group-hover:text-orange-70 lg:text-[34px] xl:text-[48px]">
        {title}
      </h3>
      <CustomPipe />
      <p className="font-medium text-grey-30 xl:text-[20px]">{body}</p>
      <LearnMoreButton />
    </div>
  );
}

const NavigatePages = () => {
  return (
    <section className="mt-[80px] lg:mt-[150px] xl:mt-[200px]">
      <MaxWidthWrapper>
        <div>
          <div className="flex flex-col items-center justify-center gap-[10px] text-center lg:gap-[14px] xl:gap-[19px]">
            <div className="rounded-md border-2 border-black px-[14px] py-[8px] xl:rounded-[10px] xl:px-[20px] xl:py-[10px]">
              <p className="text-sm font-medium text-grey-20 lg:text-[20px]">
                Explore More
              </p>
            </div>
            <h3
              className={`text-[38px] font-bold leading-[130%] text-grey-10 lg:text-[48px] xl:text-[58px] ${raleway.className}`}
            >
              Navigate through our Pages
            </h3>
            <p className="max-w-[992px] font-medium text-grey-20">
              Your gateway to discovering a wealth of valuable information about
              our kindergarten school, Feel free to explore and learn more about
              the enriching experiences that await your child at our
              kindergarten school
            </p>
          </div>
          <div className="mt-[50px] grid grid-cols-1 gap-[40px] lg:mt-[80px] lg:grid-cols-2 xl:mt-[100px] xl:gap-[60px]">
            {VisitPagesData.map(({ title, body, id }) => (
              <CustomCard key={id} title={title} body={body} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default NavigatePages;
