"use client";
import JobCard from "@/components/common/job.card/job.card";
import GridTemplate from "@/components/common/templates/grid.template/grid.template";
import { FEATURED_JOBS } from "@/components/common/util/util";

export default function FeaturedJobsListing() {
  return (
    <GridTemplate>
      {FEATURED_JOBS.map((job: any, index: any) => (
        <JobCard {...job} key={index} />
      ))}
    </GridTemplate>
  );
}
