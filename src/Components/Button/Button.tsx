import React from "react";

interface ButtonProps {
  id: string;
  width?: number;
  height?: number;
  color?: string;
  size?: number;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick: () => void;
}

interface ButtonPropsII {
    width?: number;
    height?: 30| 15| 55;
    color: "black" | "orange" | "green";
    children: React.ReactNode;
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
