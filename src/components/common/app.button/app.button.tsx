import { Button, ButtonProps } from "primereact/button";

const AppButton: React.FC<ButtonProps> = (props: any) => {
  const { label, disabled, style, showLoader = false, ...rest } = props;
  return (
    <>
      <Button
        loading={showLoader}
        onClick={props.onClick}
        disabled={disabled}
        className="flex w-full"
        style={style ? style : { backgroundColor: "#0154AA", height: '39px', borderRadius: '8px', fontSize: '14px', lineHeight: '19.2px' }}
        label={label}
        {...rest}
      />
    </>
  );
};

export default AppButton;
