"use client";
import AppTab from "@/components/common/app.tab/app.tab";

export default function JobsAdditionalFilter() {
  const TABS = [
    {
      label: "Frontend",
      data: {
        value: "FRONTEND",
      },
    },
    {
      label: "Backend",
      data: {
        value: "BACKEND",
      },
    },
    {
      label: "Graphic Designer",
      data: {
        value: "GRAPHIC_DESIGNER",
      },
    },
  ];
  return (
    <div className="mt-1">
      <div className="w-12 relative"></div>
      <div className="pb-2 pt-2">
        <div className="pl-2 flex align-items-center">
          <div className="item-text pr-2">
            Similar:
          </div>
          <AppTab data={TABS} selectedTab={""} onTabChange={() => {}} />
        </div>
      </div>
    </div>
  );
}
