import React, { useId } from "react";
import Exclamation from "../common/Exclamation";

type InputProps = {
  label?: string;
  name?: string;
  type: string;
  className?: string;
  labelCss?: string;
  errorMsg?: null | string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, type, errorMsg, labelCss, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div>
      <div>
        {label && (
          <label
            htmlFor={`${name}`}
            className={`text-[11px] leading-4 ${labelCss}`}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          name={`${name}`}
          id={id}
          className={`border-b-[3px] border-[#0D693C] w-full h-10  outline-none px-4 py-2 ${className}`}
          ref={ref}
          {...props}
        />
        </div>
        {errorMsg !== null ? (
          <div className="flex items-center text-red-500 text-xs mt-1">
            <Exclamation
              fill="red"
              width="11px"
              className="mr-1 flex-shrink-0 border-red-500"
            />
            <span className="text-red-500 text-[10px] mt-px leading-tight">
              {errorMsg}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
);

export default Input;
