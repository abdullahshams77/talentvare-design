import './app.title.css';
import React from "react";

const AppTitle: React.FC<any> = (props: any) => {
  const { title, hrefTitle, href } = props;
  return (
    <div className="pl-2">
      <div className="flex align-items-center w-12 pt-2 pb-2">
        <div className='title-style'>{title}</div>
        <div className='href-title pl-2'>{hrefTitle}</div>
      </div>
    </div>
  );
};

export default AppTitle;
