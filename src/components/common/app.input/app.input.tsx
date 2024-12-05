import React from "react";
import { InputText, InputTextProps } from "primereact/inputtext";
import { Button } from "primereact/button";

interface AppInputProps extends InputTextProps {
  label?: string;
  error?: string;
  leftIcon?: any;
  background?: string;
}

const AppInput: React.FC<AppInputProps> = (props) => {
  const { value, error, label, onChange, leftIcon, background, ...rest } =
    props;
  return (
    <div
      className="flex align-items-center"
      style={{ borderColor: "#F6F9FF", backgroundColor: "#F6F9FF" }}
    >
      {leftIcon ? leftIcon : null}
      <InputText
        style={{
          backgroundColor: background ? background : "#F6F9FF",
          borderColor: background ? background : "#F6F9FF",
          minWidth: "100px",
        }}
        value={value}
        className="w-full text-xs"
        placeholder={label}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default AppInput;
