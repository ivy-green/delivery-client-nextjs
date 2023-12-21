import React, { ChangeEventHandler } from "react";

//css
import "../../../assets/css/input/input.css";
import { MyButton } from "../../index";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
  boxShadow?: string;
  icon?: string | React.ReactNode | null;
  value: string;
  className?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  setDisabled?: boolean;
}

export function Input({
  label = "",
  placeholder = "",
  type = "text",
  width = "100%",
  height = "50px",
  borderRadius = "3px",
  border = "",
  boxShadow = "0 0 5px var(--box-shadow-color)",
  icon,
  value = "",
  className = "",
  onChange = function (v) {},
  setDisabled = false,
}: InputProps) {
  let style = {
    width: width,
    borderRadius: borderRadius,
  };
  let inputStyle = {
    width: width,
    height: height,
    border: border,
    borderRadius: borderRadius,
    boxShadow: boxShadow,
  };

  return (
    <div
      className={"input_container flex-direction-column" + className}
      style={style}
    >
      {label && <label className="text_dark text_gray">{label}</label>}
      <div className="d-flex input_content m-0" style={inputStyle}>
        {icon && (
          <MyButton
            bgColor="transparent"
            callback={() => {}}
            prefix={icon}
            text=""
          />
        )}
        <input
          className="text_dark"
          placeholder={placeholder}
          value={value}
          type={type}
          defaultValue={value}
          onChange={onChange}
          disabled={setDisabled}
        />
      </div>
    </div>
  );
}
