"use client";

import UserProfile from "./components/user.profile/user.profile";

export default function HomePage() {
  return (
    <main>
      <div className="m-5">
        <div className="w-4">
          <UserProfile />
        </div>
      </div>
    </main>
  );
}
