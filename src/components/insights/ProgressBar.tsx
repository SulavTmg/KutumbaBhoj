import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "../../providers/ProgressProvider";
import { useState } from "react";

type PropsType = {
  progress: number;
  trailColor: string;
  title: string;
  pathColor: string;
};
const ProgressBar = ({ progress, trailColor, title, pathColor}: PropsType) => {
  const [valueEnd] = useState(progress);
  return (
    <div className="font-josefin">
    <div className=" size-[100px] sm:size-[120px] md:size-[160px]">
      <ProgressProvider valueStart={0} valueEnd={valueEnd}>
        {(value: number) => (
          <CircularProgressbarWithChildren
            value={value}
            strokeWidth={24}
            styles={buildStyles({
              trailColor: trailColor,
              pathColor: pathColor,
              strokeLinecap: "butt",
              pathTransition: "1.2s ease-out",
            })}
          >
            <span className="text-xl font-semibold">{value}%</span>
          </CircularProgressbarWithChildren>
        )}
      </ProgressProvider>
    </div>
    <div className="text-center text-[10px] sm:text-base mt-6 md:mt-8">{title}</div>
    </div>
  );
};

export default ProgressBar;
