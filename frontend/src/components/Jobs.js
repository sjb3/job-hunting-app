import React from "react";
import Typography from "@material-ui/core/Typography";
import JobItem from "./JobItem";

export default function Jobs({ jobs }) {
  return (
    <div className={"jobs"}>
      <Typography variant="h2" style={{ "margin-top": "40px" }}>
        Job Searching Results
      </Typography>
      <Typography variant="h4" style={{ "margin-top": "40px" }}>
        Software Development Engineer
      </Typography>
      {jobs.map(job => (
        <JobItem job={job} />
      ))}
    </div>
  );
}
