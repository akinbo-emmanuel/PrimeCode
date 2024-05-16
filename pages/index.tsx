import type { NextPage } from "next";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const HomePageDesktop: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-300 overflow-hidden flex flex-col items-start justify-start gap-[1.062rem] leading-[normal] tracking-[normal] text-left text-[3.5rem] text-white font-manrope">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden z-[0]"
        alt=""
        src="/vimalssigamo1aj2yunsplash-1@2x.png"
      />
      <FrameComponent7 />
      <div className="w-[57.438rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[34.125rem] box-border max-w-full mq750:pb-[14.438rem] mq750:box-border mq1050:pb-[22.188rem] mq1050:box-border">
        <div className="w-[46.563rem] flex flex-col items-start justify-start gap-[1.437rem] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-inherit mq450:text-[2.125rem] mq1050:text-[2.813rem]">
            <span className="font-semibold">{`Unlock the power of `}</span>
            <i className="font-medium font-stix-two-text">captivating</i>
            <span className="font-semibold">
              {" "}
              web design and digital solutions.
            </span>
          </h1>
          <div className="w-[45.813rem] h-[3.625rem] relative text-[1.25rem] font-semibold inline-block shrink-0 max-w-full mq450:text-[1rem]">
            Transforming ideas into extraordinary online experiences. With a
            focus on innovation and collaboration, we're here to bring your
            digital dreams to life.
          </div>
          <button className="cursor-pointer [border:none] py-[1rem] px-[2rem] bg-mediumblue-200 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumblue-100">
            <div className="relative text-[1.25rem] font-semibold font-manrope text-aliceblue text-left inline-block min-w-[6.5rem]">
              Book a Call
            </div>
          </button>
        </div>
      </div>
      <section className="ml-[-0.063rem] mb-[8.687rem] self-stretch flex flex-row items-start justify-between py-[0rem] px-[5.625rem] box-border max-w-full gap-[1.25rem] text-center text-[3rem] text-white font-manrope lg:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[2.813rem] mq750:pr-[2.813rem] mq750:box-border">
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1.813rem] mq1050:text-[2.375rem]">
          ABOUT US
        </h1>
        <h1 className="m-0 w-[44.938rem] relative text-[2.5rem] tracking-[-0.02em] font-bold font-inherit text-left inline-block shrink-0 max-w-full mq450:text-[1.5rem] mq1050:text-[2rem]">
          <p className="[margin-block-start:0] [margin-block-end:39px]">
            We're your partners in digital success, committed to crafting
            unique, user-centric experiences that drive results.
          </p>
          <p className="m-0 whitespace-pre-wrap">
            Our team of passionate designers, developers, and strategists blend
            creativity with technical expertise to deliver customized solutions
            tailored to the needs of your ideas
          </p>
        </h1>
      </section>
      <FrameComponent5 />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[8.75rem] pr-[1.25rem] pl-[1.875rem] box-border max-w-full text-center text-[2.25rem] text-white font-manrope">
        <div className="w-[64.375rem] flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[19.263rem] w-[39.375rem] absolute !m-[0] top-[-4.875rem] left-[11.25rem] object-contain"
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
          <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[1] mq450:text-[1.375rem] mq1050:text-[1.813rem]">
            Our team of passionate designers, developers, and strategists blend
            creativity with technical expertise to deliver customized solutions
            tailored to the needs of your ideas
          </h2>
        </div>
      </section>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-center text-[3rem] text-white font-manrope mq750:pb-[2.625rem] mq750:box-border">
        <div className="flex-1 flex flex-col items-center justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[83.25rem] rounded-[30px] bg-mediumblue-200 flex flex-col items-center justify-center py-[8.625rem] px-[1.25rem] box-border gap-[2.25rem] max-w-full mq750:gap-[1.125rem] mq750:pt-[5.625rem] mq750:pb-[5.625rem] mq750:box-border">
            <h1 className="m-0 w-[56.188rem] h-[8.063rem] relative text-inherit tracking-[-0.02em] inline-block max-w-full font-inherit mq450:text-[1.813rem] mq1050:text-[2.375rem]">
              <p className="m-0">
                <b>Ready to Elevate your digital Prescence?</b>
              </p>
              <p className="m-0 font-stix-two-text">
                <i className="font-semibold">Let’s Connect!</i>
              </p>
            </h1>
            <button className="cursor-pointer [border:none] py-[1rem] px-[1.5rem] bg-white rounded-mini flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro">
              <div className="w-[11.438rem] relative text-[1.25rem] tracking-[-0.02em] font-semibold font-manrope text-navy text-center inline-block">
                Schedule a meeting
              </div>
            </button>
          </div>
        </div>
      </section>
      <FrameComponent />
      <section className="w-[87.688rem] h-[30rem] absolute !m-[0] top-[33.75rem] right-[1.188rem]">
        <img
          className="absolute top-[4rem] left-[0rem] rounded-mini w-[83.25rem] h-[26rem] object-cover"
          alt=""
          src="/footer-background@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[79.563rem] w-[8.125rem] h-[8.063rem] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/frame-503@2x.png"
        />
      </section>
    </div>
  );
};

export default HomePageDesktop;
