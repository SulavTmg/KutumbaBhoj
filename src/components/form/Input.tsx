import React, { useId } from "react";
import Exclamation from "../common/Exclamation";

type InputProps = {
  label?: string;
  name: string;
  type: string;
  className?: string;
  labelCss?: string;
  errorMsg?: null | string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, type, errorMsg, labelCss, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <>
        <div>
          {label && (
            <label
              htmlFor={`${name}`}
              className={`text-[11px] leading-4 text-[#0D693C] ${labelCss}`}
            >
              {label}
            </label>
          )}
          <input
            type={type}
            name={`${name}`}
            id={id}
            className={`outline-none px-4 py-2 ${className}`}
            ref={ref}
            {...props}
          />
        </div>
        {errorMsg ? (
          <div className="flex absolute items-center text-[#CC3D3D] text-xs mt-1">
            <Exclamation
              fill="red"
              width="11px"
              className="mr-1 flex-shrink-0 border-[#CC3D3D]"
            />
            <span className="text-[#CC3D3D] text-[10px] mt-px leading-tight">
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
