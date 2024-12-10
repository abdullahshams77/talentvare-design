import Image from "next/image";
import { Button, ButtonProps } from "primereact/button";

const AppButton: React.FC<any> = (props: any) => {
  const {
    label,
    showSearchIcon = false,
    disabled,
    style,
    height,
    showLoader = false,
    ...rest
  } = props;
  return (
    <>
      <Button
        icon="/assets/images/search-icon.svg"
        loading={showLoader}
        onClick={props.onClick}
        disabled={disabled}
        className="flex w-full"
        style={
          style
            ? style
            : {
                backgroundColor: "#0154AA",
                height: height ? height : "39px",
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "19.2px",
              }
        }
        //label={label}
        {...rest}
      >
        {showSearchIcon === true ? (
          <Image
            width={5}
            height={5}
            layout="responsive"
            className="search-icon-image mr-2"
            src="/assets/images/search-icon.svg"
            alt="search"
          />
        ) : null}

        {label}
      </Button>
    </>
  );
};

export default AppButton;
