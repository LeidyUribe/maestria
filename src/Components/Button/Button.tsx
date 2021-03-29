import React from "react";
import Icon from "../Icon/Icon";

interface ButtonProps {
  id: string;
  width?: number;
  height: number;
  color: string;
  size?: number;
  children: typeof Icon;
  type: "button" | "submit" | "reset";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  id,
  width,
  height,
  color,
  children,
  type,
  size,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        style={{
          fontSize: size,
          backgroundColor: color,
          height,
          width,
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
