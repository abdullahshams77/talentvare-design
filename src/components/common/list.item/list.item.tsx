import './list.item.css'
import { Divider } from "primereact/divider";
import React from "react";

const ListItem: React.FC<any> = (props: any) => {
  const { label, value, showDivider = true } = props;
  return (
    <div className="pl-3 pr-3">
      <div className="flex justify-content-between w-12 pt-2 pb-2">
        <div className='label-style'>{label}</div>
        <div className='value-style'>{value}</div>
      </div>
      {showDivider ? (
        <Divider
          style={{
            margin: 0,
          }}
        />
      ) : null}
    </div>
  );
};

export default ListItem;
