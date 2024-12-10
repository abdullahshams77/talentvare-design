"use client";

import AppButton from "@/components/common/app.button/app.button";
import AppDropdown from "@/components/common/app.dropdown/app.dropdown";
import AppInput from "@/components/common/app.input/app.input";
import { Divider } from "primereact/divider";

export default function JobsFilter(props:any) {
  return (
    <div className="box-container mt-3">
      <div className="w-12 relative"></div>
      <div className="pl-2 pb-4 pt-4 pr-2">
        <div className="flex flex-wrap md:flex-column lg:flex-row">
          <div className="w-12 md:w-12 lg:flex-1 md:w-3">
            <AppInput
              background="#ffffff"
              placeholder="Job Title, Company, or Keywords"
            />
          </div>
          <div className="w-12 lg:w-3 flex">
            <Divider className="hidden lg:block" layout="vertical" />
            <AppDropdown disabled placeholder="Select Location" />
          </div>
          <div className="w-12 lg:w-2 flex">
            <Divider className="hidden lg:block" layout="vertical" />
            <AppDropdown disabled placeholder="Job type" />
          </div>
          <div className="w-12 lg:w-2">
            <AppButton showSearchIcon={true} iconPos="left" label="Search" />
          </div>
        </div>
      </div>
    </div>
  );
}
