import { LegendProps } from "recharts";

export const CustomLegend = (props: LegendProps) => {
  const { payload } = props;
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <ul className="flex justify-center gap-4 mt-[-45px]">
      {payload?.map((entry, index) => (
        <li key={`item-${index}`} className=" flex items-center">
          <div
            style={{ backgroundColor: entry.color }}
            className="size-[10px] rounded-full mr-[5px]"
          />
          <span className=" text-[14px] font-josefin text-[#667085]">
            {capitalizeFirstLetter(entry.value)}
          </span>
        </li>
      ))}
    </ul>
  );
};
