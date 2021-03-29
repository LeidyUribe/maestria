import React from "react";

interface Iconprops {
  color?: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<Iconprops> = ({
  width,
  height,
  color,
}: Iconprops) => {
    const path = require('../../assets/home.png').default;
  return (
      <img
        alt="img"
        src={path}
        style={{
          color: color,
          height,
          width
        }}
      />
  );
};

export default Icon;
