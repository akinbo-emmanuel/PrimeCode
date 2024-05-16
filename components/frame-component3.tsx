import type { NextPage } from "next";
import FrameComponent4 from "./frame-component4";

const FrameComponent3: NextPage = () => {
  return (
    <section className="ml-[-0.063rem] mb-[3.062rem] self-stretch bg-gray-200 flex flex-col items-start justify-start py-[3.75rem] px-[0rem] box-border gap-[5.062rem] max-w-full text-left text-[2.625rem] text-white font-plus-jakarta-sans lg:pt-[2.438rem] lg:pb-[2.438rem] lg:box-border mq450:gap-[1.25rem] mq750:gap-[2.5rem] mq750:pt-[1.563rem] mq750:pb-[1.563rem] mq750:box-border">
      <div className="self-stretch flex flex-row items-start justify-between py-[0rem] px-[5.625rem] box-border max-w-full gap-[1.25rem] lg:flex-wrap lg:justify-center lg:pl-[2.813rem] lg:pr-[2.813rem] lg:box-border mq750:pl-[1.375rem] mq750:pr-[1.375rem] mq750:box-border">
        <h1 className="m-0 relative text-inherit font-extrabold font-inherit inline-block max-w-full mq450:text-[1.563rem] mq1050:text-[2.125rem]">
          RECENT PROJECTS
        </h1>
        <div className="w-[33.438rem] relative text-[1.5rem] font-semibold font-manrope inline-block shrink-0 max-w-full mq450:text-[1.188rem]">
          From sleek corporate websites to engaging e-commerce platforms, our
          portfolio showcases the diversity and quality of our work.
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center max-w-full text-[1.75rem] font-manrope">
        <div className="self-stretch overflow-x-auto flex flex-row flex-wrap items-center justify-center py-[0.625rem] px-[6.218rem] box-border gap-[3.187rem] min-h-[59.563rem] max-w-full lg:pl-[3.063rem] lg:pr-[3.063rem] lg:box-border mq750:gap-[1.563rem] mq750:pl-[1.5rem] mq750:pr-[1.5rem] mq750:box-border">
          <FrameComponent4 rectangle25="/rectangle-25@2x.png" />
          <FrameComponent4
            rectangle25="/rectangle-25-1@2x.png"
            propColor="#a0a0a0"
            propColor1="#a0a0a0"
            propColor2="#a0a0a0"
            propColor3="#a0a0a0"
            propColor4="#a0a0a0"
          />
          <FrameComponent4
            rectangle25="/rectangle-25-2@2x.png"
            propColor="#a0a0a0"
            propColor1="#a0a0a0"
            propColor2="#a0a0a0"
            propColor3="#a0a0a0"
            propColor4="#a0a0a0"
          />
          <FrameComponent4
            rectangle25="/rectangle-25-3@2x.png"
            propColor="#a0a0a0"
            propColor1="#a0a0a0"
            propColor2="#a0a0a0"
            propColor3="#a0a0a0"
            propColor4="#a0a0a0"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
