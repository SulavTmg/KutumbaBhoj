import React, {useId} from "react";
import Exclamation from "../common/Exclamation";

type SelectProps = {
  label?: string;
  name: string;
  className?: string;
  labelCss?: string;
  errorMsg?: string | null;
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, name, errorMsg, labelCss, className = "", options = [], ...props },
    ref
  ) => {
    const id = useId();
    return (
      <>
        {label && (
          <label
            htmlFor={name}
            className={`mb-2 font-bold tracking-[2.72px] text-[12px] sm:text-sm md:text-[16px] mr-4 ${labelCss}`}
          >
            {label}
          </label>
        )}
        <select
          id={id}
          name={name}
          className={`border  h-full rounded-[10px] px-4 text-[#9CA3AF] outline-none ${className}`}
          ref={ref}
          {...props}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errorMsg ? (
          <div className="flex items-center text-red-500 text-xs mt-1">
            <Exclamation
              width="11px"
              fill="red"
              className="mr-1 flex-shrink-0"
            />
            <span className="text-red-500 text-[10px] leading-tight">
              {errorMsg}
            </span>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
);

export default Select;
