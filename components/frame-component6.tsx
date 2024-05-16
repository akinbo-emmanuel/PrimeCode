import type { NextPage } from "next";

const FrameComponent6: NextPage = () => {
  return (
    <div className="w-[25.188rem] rounded-xl bg-gray-200 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[1.5rem] px-[1.562rem] box-border max-w-full text-left text-[1.5rem] text-white font-manrope">
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem]">
        <div className="rounded-8xs flex flex-row items-start justify-start p-[0.625rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative"
            loading="lazy"
            alt=""
            src="/settings.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.187rem]">
          <div className="w-[16.688rem] relative font-semibold whitespace-pre-wrap inline-block mq450:text-[1.188rem]">
            Backend Engineering
          </div>
          <div className="self-stretch relative text-[1rem] tracking-[0.01em]">
            From sleek corporate websites to engaging e-commerce platforms, our
            portfolio showcases the quality of our work.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
