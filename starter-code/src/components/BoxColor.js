import React from "react";

export default function BoxColor(props) {
  const colorStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    height: "50px",
  };
  return (
    <div style={colorStyle} className="box">
      <p>{colorStyle.backgroundColor}</p>
      <p>
        {"#" +
          ((1 << 24) + (props.r << 16) + (props.g << 8) + props.b)
            .toString(16)
            .slice(1)}
      </p>
    </div>
  );
}
