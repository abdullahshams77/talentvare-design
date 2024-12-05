"use client";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";

export default function UserCalendar() {
  const headerTemplate = () => {
    return (
      <div className="pt-2 pb-2 pl-3 pr-1 flex align-items-center justify-content-between">
        <div>
          <div className="item-heading">My Calendar</div>
          <div className="item-text">Upcoming Interviews</div>
        </div>

        <div>
          <Button
            icon="pi pi-chevron-down"
            className="h-1rem"
            style={{
              background: "#ffffff",
              color: "#333333",
              border: "none",
            }}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="box-container">
      <div className="w-12 relative"></div>
      <div className="pb-2">
        <Panel
          collapsed={true}
          headerTemplate={headerTemplate}
          toggleable={true}
        ></Panel>
      </div>
    </div>
  );
}
