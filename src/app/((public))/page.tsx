"use client";
import AppTitle from "@/components/common/app.title/app.title";
import JobsAdditionalFilter from "./components/jobs.filter/jobs.additional.filter";
import JobsFilter from "./components/jobs.filter/jobs.filter";
import UserCalendar from "./components/user.calendar/user.calendar";
import UserProfileAnalytics from "./components/user.profile.analytics/user.profile.analytics";
import UserProfile from "./components/user.profile/user.profile";
import RecommendedJobsListing from "./components/recommended.jobs.listing/recommended.jobs.listing";
import FeaturedJobsListing from "./components/featured.jobs.listing/featured.jobs.listing";
import { Divider } from "primereact/divider";

export default function HomePage() {
  return (
    <main>
      <div className="w-12 md:w-12 flex flex-wrap md:flex-nowrap gap-4 py-4">
        <div className="w-12 pr-5 md:pr-0 md:w-5 lg:w-3 pl-5">
          <div className="flex gap-2 flex-column">
            <div className="w-12">
              <UserProfile />
            </div>
            <div className="w-12">
              <UserProfileAnalytics />
            </div>
            <div className="w-12">
              <UserCalendar />
            </div>
          </div>
        </div>

        <div className="w-12 pl-5 pr-5  md:w-7 lg:w-9 md:pl-0 md:pr-2">
          <div className="pt-2 item-heading-big flex gap-1">
            Find your Dream Job,{" "}
            <div className="item-heading-big-blue"> Albert</div>
          </div>
          <div className="item-text">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </div>
          <JobsFilter />
          <JobsAdditionalFilter />
          <AppTitle title="Featured Jobs" hrefTitle="See Featured Jobs" />
          <FeaturedJobsListing />
          <Divider className="mt-3 mb-3" />
          <div>
            <AppTitle
              title="Recommended Jobs"
              hrefTitle="See Recommended Jobs"
            />
            <RecommendedJobsListing />
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
