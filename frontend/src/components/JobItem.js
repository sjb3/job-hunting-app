import React from "react";

export default function JobItem({ job }) {
  return (
    <div className={"job-item"}>
      {job.title}
      {job.company}
    </div>
  );
}
