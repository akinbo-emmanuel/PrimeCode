import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  rectangle25?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  rectangle25,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
}) => {
  const webDesignStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const mobileDesignStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const webDesign1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div className="w-[39.438rem] shrink-0 flex flex-col items-start justify-start gap-[1.125rem] max-w-full text-left text-[1.75rem] text-white font-manrope">
      <img
        className="self-stretch h-[22.188rem] relative rounded-mini max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={rectangle25}
      />
      <div className="flex flex-col items-start justify-start gap-[0.187rem] max-w-full">
        <h3 className="m-0 relative text-inherit tracking-[0.01em] font-bold font-inherit mq450:text-[1.375rem]">
          Perplexity
        </h3>
        <div className="flex flex-row items-center justify-start gap-[0.925rem] text-[1.25rem] text-silver mq750:flex-wrap">
          <div
            className="relative tracking-[0.01em] font-medium inline-block min-w-[7.063rem] mq450:text-[1rem]"
            style={webDesignStyle}
          >
            Web Design
          </div>
          <div
            className="h-[0.875rem] w-[0.875rem] relative tracking-[0.01em] font-medium inline-block mq450:text-[1rem]"
            style={divStyle}
          >
            •
          </div>
          <div
            className="relative tracking-[0.01em] font-medium mq450:text-[1rem]"
            style={mobileDesignStyle}
          >
            Mobile Design
          </div>
          <div
            className="h-[0.875rem] w-[0.875rem] relative tracking-[0.01em] font-medium inline-block mq450:text-[1rem]"
            style={div1Style}
          >
            •
          </div>
          <div
            className="relative tracking-[0.01em] font-medium inline-block min-w-[7.063rem] mq450:text-[1rem]"
            style={webDesign1Style}
          >
            Web Design
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
