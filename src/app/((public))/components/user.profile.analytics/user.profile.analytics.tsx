"use client";
import ListItem from "@/components/common/list.item/list.item";

export default function UserProfileAnalytics() {
  return (
    <div className="box-container">
      <div
        className="w-12 relative">
      </div>
      <div className="pb-2">
        <ListItem label="Profile Visitors" value="140" />
        <ListItem label="Resume Viewers" value="20" />
        <ListItem showDivider={false} label="My Jobs" value="88" />
      </div>
    </div>
  );
}
