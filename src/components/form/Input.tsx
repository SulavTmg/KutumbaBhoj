import React, { useId } from "react";
import Exclamation from "../../assets/icons/Exclamation";

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
              width="11px"
              fill="red"
              className="mr-1 flex-shrink-0"
            />
            <span className="text-red-500 text-[10px] mt-1 leading-tight">
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
