"use client";

import UserCalendar from "./components/user.calendar/user.calendar";
import UserProfileAnalytics from "./components/user.profile.analytics/user.profile.analytics";
import UserProfile from "./components/user.profile/user.profile";

export default function HomePage() {
  return (
    <main>
      <div className="m-5 flex gap-2 flex-column">
        <div className="w-4">
          <UserProfile />
        </div>
        <div className="w-4">
          <UserProfileAnalytics />
        </div>
        <div className="w-4">
            <UserCalendar />
        </div>
      </div>
    </main>
  );
}
