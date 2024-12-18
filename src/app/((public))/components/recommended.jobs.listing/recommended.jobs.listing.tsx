"use client";
import JobCard from "@/components/common/job.card/job.card";
import GridTemplate from "@/components/common/templates/grid.template/grid.template";
import { RECOMMENDED_JOBS } from "@/components/common/util/util";

export default function RecommendedJobsListing() {
  return (
    <GridTemplate>
      {RECOMMENDED_JOBS.map((job: any, index: any) => (
        <JobCard {...job} key={index} />
      ))}
    </GridTemplate>
  );
}
