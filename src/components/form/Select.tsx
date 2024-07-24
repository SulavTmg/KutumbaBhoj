import React, { useId } from "react";
import Exclamation from "../common/icon/Exclamation";

type SelectProps = {
  label?: string;
  name: string;
  className?: string;
  labelCss?: string;
  placeholder?: string;
  errorMsg?: string | null;
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, name, errorMsg,placeholder, labelCss, className = "", options = [], ...props },
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
          className={`border h-[56px] rounded-[10px] px-4 text-[#9CA3AF] outline-none ${className}`}
          ref={ref}
          {...props}
        >
          <option value="" disabled selected hidden>
           {placeholder}
          </option>
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
