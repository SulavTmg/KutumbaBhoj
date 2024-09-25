import { useState } from "react";

const TimeNav = () => {
  const [activeButton, setActiveButton] = useState("All Time");
  const time = ["All Time", "12 Months", "30 Days", "7 Days", "24 hours"];
  return (
    <div className=" bg-white rounded-lg w-fit shadow-md">
      <ul className="flex text-sm px-1 py-1">
        {time.map((timeStamp) => (
          <li className="flex justify-center" key={timeStamp}>
            <button
              className={`${
                activeButton === timeStamp
                  ? "bg-[#00B074] text-[#00B074] bg-opacity-10"
                  : "text-[#667085]"
              }  px-3 py-1 rounded-md `}
              onClick={() => setActiveButton(timeStamp)}
            >
              <span>{timeStamp}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeNav;
