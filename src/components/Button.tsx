import React from "react";

type ButtonProps = {
  name: string;
  className? : string;
  icon?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ name, icon, className = "",  ...props }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${className}`}
      {...props}
    >
      {
        icon && <img src={icon}/>
      }
      {name}
    </button>
  );
};

export default Button;
