import React from "react";
import { tailspin } from "ldrs";
import { globalStore } from "../store";
tailspin.register();

type ButtonProps = {
  name: string;
  className?: string;
  icon?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ name, icon, className = "", ...props }: ButtonProps) => {
  const loading = globalStore((store) => store.loading);
  return (
    <button type="submit" className={`${className}`} {...props}>
      {icon && <img src={icon} />}
      <div className="flex justify-center">
      {loading ? (
        <l-tailspin
          size="32"
          stroke="5"
          speed="0.9"
          color="white"
          ></l-tailspin>
      ) : (
        `${name}`
      )}
          </div>
    </button>
  );
};

export default Button;
