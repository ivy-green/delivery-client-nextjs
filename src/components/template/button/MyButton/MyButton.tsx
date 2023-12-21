import React, { useState } from "react";
import "./MyButton.css";
import * as Icon from "phosphor-react";

interface MyButtonProps {
  text: string;
  callback: () => void;
  prefix?: boolean | React.ReactNode | string;
  surfix?: boolean | React.ReactNode | string;
  bgColor?: string;
  fontColor?: string;
  height?: string;
  width?: string;
  fontSize?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  hoverColor?: string;
  borderColor?: string;
  hide?: boolean;
}

export function MyButton({
  text = "",
  callback = () => {},
  prefix = "",
  surfix = "",
  bgColor,
  fontColor = "#3d3d3d",
  height = "35px",
  width = "80px",
  fontSize = "14px",
  borderRadius = "2px",
  padding = "5px 10px",
  margin = "0",
  hoverColor,
  borderColor,
  hide = false,
}: MyButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    backgroundColor: isHovered && hoverColor ? hoverColor : bgColor,
    width: width,
    height: height,
    cursor: "pointer",
    fontSize: fontSize,
    fontWeight: "bold",
    color: isHovered && bgColor && hoverColor ? bgColor : fontColor,
    borderRadius: borderRadius,
    padding: padding,
    margin: margin,
    border: borderColor ? `1px solid ${borderColor}` : "",
    transition: "linear 0.1s",
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={callback}
      style={style}
      className={
        "mybutton d-inline-flex justify-content-around align align-items-center " +
        (hide ? "d-none" : "")
      }
    >
      {prefix !== "" && <div className="button-icon m-0">{prefix}</div>}
      {text !== "" && <div>{text}</div>}
      {surfix !== "" && <div className="button-icon m-0">{surfix}</div>}
    </button>
  );
}
