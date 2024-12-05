import React from "react";

const AppTab: any = (props: any) => {
  const { data, className, selectedTab } = props;
  return (
    <div className="flex flex-wrap">
      {data && data.map((item: any, index: any) => (
        <button
          key={index}
          type="button"
          className={`text-sm	
          cursor-pointer py-2 mx-1 px-2 border-round 
          transition-colors transition-duration-300 flex 
          align-items-center justify-content-center mt-1 sm:mt-0
                     ${
                       selectedTab?.value === item?.data?.value
                         ? "bg-primary text-white"
                         : "tab-background"
                     } 
                     ${className} `}
          onClick={(e) => props?.onTabChange(item)}
        >
          {/* <i className={`${item.icon} mr-2`}></i> */}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AppTab;
