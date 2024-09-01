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
  value?: string;
  defaultValue?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      name,
      errorMsg,
      placeholder,
      labelCss,
      className = "",
      options = [],
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <>
        {label && (
          <label
            htmlFor={id}
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
          value={value}
          defaultValue={defaultValue}
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errorMsg && (
          <div className="pl-2 flex items-center absolute text-[#CC3D3D] text-xs mt-1">
            <Exclamation fill="red" className="mr-1 size-2 sm:size-[10px]" />
            <span className="text-[#CC3D3D] text-[8px] sm:text-[10px] leading-tight">
              {errorMsg}
            </span>
          </div>
        )}
      </>
    );
  }
);

export default Select;
