import React from "react";
import { InputText, InputTextProps } from "primereact/inputtext";
import { Button } from "primereact/button";

interface AppInputProps extends InputTextProps {
  label?: string;
  error?: string;
  leftIcon?: any;
}

const AppInput: React.FC<AppInputProps> = (props) => {
  const { value, error, label, onChange, leftIcon, ...rest } = props;
  return (
    <div
      className="flex align-items-center"
      style={{ borderColor: "#F6F9FF", backgroundColor: "#F6F9FF" }}
    >
      {
        leftIcon?
        <Button
        icon="pi pi-search"
        className="h-1rem"
        style={{
          background: "#F6F9FF",
          color: "#000",
          border: "none"
        }}
      /> : null
      }
      <InputText
        style={{
          backgroundColor: "#F6F9FF",
          borderColor: "#F6F9FF",
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
