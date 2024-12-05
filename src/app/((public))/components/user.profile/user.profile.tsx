"use client";
import "./user.profile.css";
import Image from "next/image";
import { Avatar } from "primereact/avatar";
export default function UserProfile() {
  //const element = document && document.getElementById("image-profile-background");
  //const height = element && element.offsetHeight - 19 || 0;
  return (
    <div className="profile-container">
      <div
        className="w-12"
        style={{
          position: "relative",
        }}
      >
        <Image
          width={100}
          id="image-profile-background"
          layout="responsive"
          height={50}
          src="/assets/images/profile-background.svg"
          alt="Image"
        />
        <Avatar
          className="avatar-profile-pic"
          size="xlarge"
          image="/assets/images/profile-pic.png"
          shape="circle"
        />
      </div>
      <div className="flex justify-content-center align-items-center pt-3 p-4 pb-0">
        <h3>Albert Flores</h3>
      </div>
      <div className="flex justify-content-center align-items-center pt-0 pb-2">
        <div className="profile-details text-center">
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
        </div>
      </div>
      <div className="flex justify-content-center align-items-center pt-0 pb-4">
        <div className="user-profile-city text-center">Clinton, Maryland</div>
      </div>
    </div>
  );
}
