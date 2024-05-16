import type { NextPage } from "next";
import FrameComponent6 from "./frame-component6";

const FrameComponent5: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-end justify-center gap-[2.5rem] max-w-full z-[1] text-left text-[1.5rem] text-dimgray font-manrope mq750:gap-[1.25rem]">
      <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[5.625rem] box-border gap-[2.125rem] max-w-full mq750:gap-[1.063rem] mq750:pl-[1.375rem] mq750:box-border mq1050:pl-[2.813rem] mq1050:box-border">
        <div className="relative tracking-[-0.02em] uppercase font-semibold mq450:text-[1.188rem]">
          Our Services
        </div>
        <h1 className="m-0 w-[52.25rem] h-[5.938rem] relative text-[3rem] tracking-[-0.05em] text-white inline-block max-w-full font-inherit mq450:text-[1.813rem] mq1050:text-[2.375rem]">
          <b>{`We're your partners in digital success, `}</b>
          <i className="font-medium font-stix-two-text">
            committed to crafting unique experiences
          </i>
        </h1>
      </div>
      <div className="w-[94.5rem] overflow-x-auto flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[5.625rem] box-border gap-[1.875rem] max-w-full text-white lg:pl-[2.813rem] lg:box-border mq750:gap-[0.938rem] mq750:pl-[1.375rem] mq750:box-border">
        <FrameComponent6 />
        <FrameComponent6 />
        <FrameComponent6 />
        <FrameComponent6 />
        <FrameComponent6 />
      </div>
      <div className="flex flex-row items-center justify-start py-[1rem] px-[5.625rem] gap-[1.875rem] mq450:gap-[0.938rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="h-[2.75rem] w-[2.75rem] rounded-2981xl box-border flex flex-row items-start justify-start py-[0.625rem] px-[0.5rem] border-[1.6px] border-solid border-white">
          <div className="flex flex-row items-center justify-center py-[0.475rem] px-[0.437rem] box-border w-[1.5rem] h-[1.5rem]">
            <img
              className="h-[0.55rem] w-[0.625rem] relative"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
        <div className="h-[2.75rem] w-[2.75rem] rounded-2981xl box-border flex flex-row items-start justify-start py-[0.625rem] px-[0.5rem] border-[1.6px] border-solid border-white">
          <div className="flex flex-row items-center justify-center py-[0.475rem] px-[0.437rem] box-border w-[1.5rem] h-[1.5rem]">
            <img
              className="h-[0.55rem] w-[0.625rem] relative"
              alt=""
              src="/icon-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
