import React from "react";
import Image from "next/image";
import AppButton from "../app.button/app.button";
import "./job.card.css";

interface JobCardProps {
  tag?: string;
  title?: string;
  location?: string;
  applicants?: string;
  posted?: string;
}

const JobCard: React.FC<JobCardProps> = (props: any) => {
  const { tag, title, location, applicants, posted } = props;
  return (
    <div
      className="cursor-pointer flex gap-3 px-3 py-3 md:gap-0"
      style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
    >
      <div className="flex flex-column w-12">
        <div>
          <div className="tag-style line-clamp-2 text-overflow-ellipsis overflow-hidden">
            {tag}
          </div>
          <div className="mt-3 flex align-items-center justify-content-between">
            <div>
              <Image
                width={20}
                layout="responsive"
                height={20}
                src="/assets/images/teams-icon.svg"
                alt="Image"
              />
            </div>
            <div className="flex flex-column">
              <div className="title-style">{title}</div>
              <div className="text-style-small">Teams</div>
            </div>
          </div>
          <div className="mt-0 pl-2 flex align-items-center justify-content-between">
            <div>
              <Image
                width={20}
                layout="responsive"
                height={20}
                src="/assets/images/location-icon.svg"
                alt="location"
              />
            </div>
            <div>
              <div className="text-style-small">{location}</div>
            </div>
          </div>
          <div className="mt-0 pl-2 flex align-items-center justify-content-between">
            <div>
              <Image
                width={20}
                layout="responsive"
                height={20}
                src="/assets/images/timer-icon.svg"
                alt="location"
              />
            </div>
            <div>
              <div className="text-style-small flex">
                  <div className="pr-1">
                      {`${posted} |`}
                  </div>
                  <div className="href-style">
                     {`${applicants} applicants`}
                  </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex align-items-center justify-content-between">
            <div>
              <AppButton height="34px" label="Apply Now" />
            </div>
            <div>
              <Image
                width={20}
                layout="responsive"
                height={20}
                src="/assets/images/save-icon.svg"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
