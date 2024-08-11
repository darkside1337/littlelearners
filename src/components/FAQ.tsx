"use client";
import { useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { AccordionData } from "@/lib/data";
import { AccordionDataType } from "@/lib/types";
import { raleway } from "./hero";
//

function AccordionItem({
  id,
  title,
  body,
  isOpen,
  className,
  toggleActive,
}: {
  id: number;
  title: string;
  body: string;
  className?: string;
  isOpen: boolean;
  toggleActive: (id: number) => void;
}) {
  return (
    <div
      className={cn(
        "flex h-fit flex-col rounded-[10px] border-2 border-grey-15 px-[24px] py-[30px] transition-colors duration-300 xl:p-[40px]",
        { "gap-[24px] bg-white": isOpen },
        { "gap-[0px] bg-orange-97": !isOpen },
        className,
      )}
    >
      <button
        className="flex w-full items-center justify-between gap-[10px] xl:gap-[30px]"
        onClick={() => toggleActive(id)}
      >
        <p className="text-left">{title}</p>
        <div className="rounded-[10px] border-2 border-grey-15 bg-orange-97 p-[6px] xl:p-[8px]">
          {isOpen ? (
            <MinusIcon className="size-5 xl:size-6" />
          ) : (
            <PlusIcon className="size-5 xl:size-6" />
          )}
        </div>
      </button>
      <div
        className={cn("h-[2px] w-full bg-grey-15", {
          block: isOpen,
          hidden: !isOpen,
        })}
      ></div>
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          {
            "pointer-events-auto max-h-[251px] opacity-100": isOpen,
          },
          {
            "pointer-events-none max-h-0 opacity-0": !isOpen,
          },
        )}
      >
        <p className="h-fit w-fit">{body}</p>
      </div>
    </div>
  );
}

function Accordion({ data }: { data: AccordionDataType[] }) {
  const [tabsData, setTabsData] = useState(
    data.map((item) => ({ ...item, isOpen: item.id === 1 ? true : false })),
  );

  const toggleActive = (id: number) => {
    const updatedData = tabsData.map((tab) => {
      if (tab.id === id) {
        return { ...tab, isOpen: !tab.isOpen };
      }
      return { ...tab, isOpen: false };
    });
    console.log({ id, updatedData });
    return setTabsData(updatedData);
  };

  return (
    <div className="flex flex-wrap gap-8">
      {tabsData.map(({ id, title, body, isOpen }) => (
        <AccordionItem
          key={id}
          title={title}
          body={body}
          id={id}
          isOpen={isOpen}
          toggleActive={toggleActive}
          className="max-h-fit grow basis-full xl:basis-1/3"
        />
      ))}
    </div>
  );
}

const FAQ = () => {
  return (
    <section className="mt-[80px] lg:mt-[150px] xl:mt-[200px]">
      <MaxWidthWrapper>
        <div>
          <div className="flex flex-col items-center justify-center gap-[10px] text-center lg:gap-[14px] xl:gap-[19px]">
            <div className="rounded-md border-2 border-black px-[14px] py-[8px] xl:rounded-[10px] xl:px-[20px] xl:py-[10px]">
              <p
                className={`text-sm font-medium text-grey-20 lg:text-[20px] ${raleway.className}`}
              >
                Solutions For The Doubts
              </p>
            </div>
            <h3 className="text-[38px] font-bold leading-[130%] text-grey-10 lg:text-[48px] xl:text-[58px]">
              Frequently Asked Questions
            </h3>
            <p className="max-w-[992px] font-medium text-grey-20">
              Find all the essential information you need in our FAQ section,
              designed to address the most frequently asked questions and help
              you make informed decisions for your childs education.
            </p>
          </div>
          <div className="mt-[50px] lg:mt-[80px] xl:mt-[100px]">
            <Accordion data={AccordionData} />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FAQ;
