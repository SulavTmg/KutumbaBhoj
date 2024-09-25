import React from "react";
import { tailspin } from "ldrs";
import { useGlobalStore } from "../store";
tailspin.register();

type ButtonProps = {
  name: string;
  className?: string;
  icon?: string;
  loadingSize?: string;
  loadingStroke?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  name,
  loadingSize,
  loadingStroke,
  icon,
  className = "",
  ...props
}: ButtonProps) => {
  const loading = useGlobalStore((state) => state.loading);
  return (
    <button type="submit" className={`${className}`} {...props}>
      {icon && <img src={icon} />}
      <div className="flex justify-center">
        {loading ? (
          <l-tailspin
            size={`${loadingSize}`}
            stroke={`${loadingStroke}`}
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
