import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default function JobItem({ job, onClick }) {
  return (
    <Paper onClick={onClick} className={"job-item"}>
      <div>
        <Typography variant="h6" style={{ textAlign: "left" }}>
          {job.title}
        </Typography>
        <Typography
          variant="h6"
          style={{ textAlign: "left", fontStyle: "bold" }}
        >
          <b>{job.company}</b>{" "}
        </Typography>
        <Typography
          variant="h6"
          style={{ fontStyle: "italic", textAlign: "left" }}
        >
          {job.location}
        </Typography>
      </div>
      <div>
        <Typography variant="caption">
          {job.created_at
            .split(" ")
            .slice(0, 3)
            .join(" ")}
        </Typography>
      </div>
    </Paper>
  );
}
