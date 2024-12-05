"use client";

import AppButton from "@/components/common/app.button/app.button";
import AppDropdown from "@/components/common/app.dropdown/app.dropdown";
import AppInput from "@/components/common/app.input/app.input";

export default function JobsFilter() {
  return (
    <div className="box-container mt-3">
      <div className="w-12 relative"></div>
      <div className="pb-4 pt-4">
        <div className="flex">
          <div className="flex-1">
            <AppInput
              background="#ffffff"
              placeholder="Job Title, Company, or Keywords"
            />
          </div>
          <div className="w-3">
            <AppDropdown disabled placeholder="Select Location" />
          </div>
          <div className="w-2">
            <AppDropdown disabled  placeholder="Job type" />
          </div>
          <div className="w-2">
            <AppButton icon="pi pi-search" iconPos="left" label="Search" />
          </div>
        </div>
      </div>
    </div>
  );
}
