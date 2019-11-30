import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default function JobItem({ job }) {
  return (
    <Paper className={"job-item"}>
      <div>
        <Typography variant="h6" style={{ textAlign: "left" }}>
          {job.title}
        </Typography>
        <Typography
          variant="h7"
          style={{ textAlign: "left", fontStyle: "bold" }}
        >
          <b>{job.company}</b>{" "}
        </Typography>
        <Typography
          variant="h7"
          style={{ fontStyle: "italic", textAlign: "left" }}
        >
          {job.location}
        </Typography>
      </div>
      <div>
        <Typography>
          {job.created_at
            .split(" ")
            .slice(0, 3)
            .join(" ")}
        </Typography>
      </div>
    </Paper>
  );
}
