"use client";
import React from "react";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AppButton from "../app.button/app.button";
import { NAV_ITEMS } from "../util/util";
import AppInput from "../app.input/app.input";
import { Button } from "primereact/button";

export default function AppHeader() {
  const pathname = usePathname();
  const navItems: any = NAV_ITEMS.map((item, index) => {
    return {
      label: item.label,
      path: item.path,
      command: (e: any) => {},
      className: pathname === item.path && "p-menu-item-active",
    };
  });

  const start = (
    <Link href="/dashboard">
      {" "}
      <Image
        alt="Talentvare logo"
        src="/assets/images/talentvare.svg"
        height={40}
        width={40}
        className="ml-5 mr-5"
      ></Image>
    </Link>
  );
  const endContent = (
    <React.Fragment>
      <div className="w-12 flex align-items-center justify-content-end flex-wrap gap-0">
        <div className="mr-2 flex-grow-1">
          <AppInput
            placeholder="Search"
            leftIcon={
              <Button
                icon="pi pi-search"
                className="h-1rem"
                style={{
                  background: "#F6F9FF",
                  color: "#000",
                  border: "none",
                }}
              />
            }
          />
        </div>
        <div className="mr-2 mt-1 flex gap-2 align-items-center pr-3">
          <AppButton label="Resume Builder" />
          <div>
            <Avatar
              image="/assets/images/profile-logo.png"
              icon="pi pi-user"
              shape="circle"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  const menubarPtOptions = {
    button: {
      className: "outline-none focus:outline-none focus:shadow-none",
    },
    root: {
      className: "custom-menubar-root",
    },
  };

  return (
    <>
      <div>
        <Menubar
          model={navItems}
          start={start}
          end={endContent}
          pt={menubarPtOptions}
        />
      </div>
    </>
  );
}
