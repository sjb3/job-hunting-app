import React from "react";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import JobItem from "./JobItem";

export default function Jobs({ jobs }) {
  const [activeStep, setActiveStep] = React.useState[0];

  // step == 0, show 0-49
  // step == 1, show 50 - 99

  function handleClickOpen() {
    setActiveStep(prevActiveSteo => prevActiveSteo + 1);
  }
  function handleClose() {
    setActiveStep(prevActiveSteo => prevActiveSteo - 1);
  }
  return (
    <div className={"jobs"}>
      <h1 className="main-title" style={{ marginTop: "40px" }}>
        Job Searching Results
      </h1>
      <Typography variant="h4" style={{ marginTop: "40px" }}>
        Software Development Engineer
      </Typography>
      <hr />
      {jobs.map(job => (
        <JobItem job={job} />
      ))}

      <MobileStepper
        variant="progress"
        steps={6}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" disabled={activeStep === 5}>
            Next
            <KeyboardArrowLeft />
          </Button>
        }
        backButton={
          <Button size="small" disabled={activeStep === 0}>
            <KeyboardArrowRight />
            Back
          </Button>
        }
      />
    </div>
  );
}
