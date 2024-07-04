import React from "react";

type ButtonProps = {
  name: string;
  className? : string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ name, className = "",  ...props }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`border bg-[#0D693C] text-base rounded-[10px] text-white font-medium h-[56px] mt-4 w-full ${className}`}
      {...props}
    >
      {name}
    </button>
  );
};

export default Button;
