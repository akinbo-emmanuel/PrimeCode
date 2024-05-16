import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <footer className="self-stretch bg-black flex flex-col items-start justify-start py-[2.5rem] px-[5.625rem] box-border gap-[3.062rem] max-w-full text-center text-[1.25rem] text-white font-manrope mq450:py-[1.625rem] mq450:px-[1.25rem] mq450:box-border mq750:gap-[1.5rem] mq750:pl-[2.813rem] mq750:pr-[2.813rem] mq750:box-border">
      <div className="w-[35.813rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
        <img
          className="h-[6.25rem] w-[6.25rem] relative object-contain"
          loading="lazy"
          alt=""
          src="/image-16@2x.png"
        />
        <div className="w-[18.375rem] flex flex-row items-start justify-start gap-[2.937rem] mq450:gap-[1.438rem]">
          <div className="flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="relative font-semibold inline-block min-w-[6.438rem] mq450:text-[1rem]">
              Navigation
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.625rem] text-[1rem]">
              <div className="relative inline-block min-w-[5.438rem]">
                What we do
              </div>
              <div className="relative inline-block min-w-[3.813rem]">
                Contact
              </div>
              <div className="relative inline-block min-w-[2.813rem]">
                About
              </div>
              <div className="relative inline-block min-w-[2.375rem]">FAQs</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="relative font-semibold inline-block min-w-[3.25rem] mq450:text-[1rem]">
              Legal
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-[1rem]">
              <div className="relative">{`Terms & Conditions`}</div>
              <div className="relative inline-block min-w-[6.25rem]">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/line-7.svg"
      />
      <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] text-[1rem] mq750:flex-wrap">
        <div className="w-[13.438rem] relative tracking-[-0.05em] font-medium inline-block">
          © PrimeCode All rights reserved
        </div>
        <div className="w-[11.375rem] relative tracking-[-0.05em] font-medium inline-block">
          2023 Terms and Condtions
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
