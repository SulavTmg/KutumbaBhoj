import React, { useId } from "react";
import Exclamation from "../common/icon/Exclamation";

type InputProps = {
  label?: string;
  name: string;
  type: string;
  className?: string;
  labelCss?: string;
  errorMsg?: null | string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, name, type, errorMsg, labelCss, className = "", ...props },
    ref
  ) => {
    const id = useId();
    return (
      <>
        <div>
          {label && (
            <label
              htmlFor={id}
              className={` text-[8px] sm:text-[11px] leading-4 text-[#0D693C] ${labelCss}`}
            >
              {label}
            </label>
          )}
          <input
            type={type}
            name={`${name}`}
            id={id}
            className={`text-[12px] sm:text-base outline-none px-4 py-2 ${className}`}
            ref={ref}
            {...props}
          />
        </div>
        {errorMsg ? (
          <div className="pl-2 flex items-center text-[#CC3D3D] text-xs mt-1">
            <Exclamation
              fill="red"
              className="mr-1 size-2 sm:size-[10px]"
            />
            <span className="text-[#CC3D3D] text-[8px] sm:text-[10px] leading-tight">
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

export default Input;
