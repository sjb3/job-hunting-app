import React from "react";
import Typography from "@material-ui/core/Typography";
import JobItem from "./JobItem";
import JobModal from "./JobModal";
// Stppers
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

export default function Jobs({ jobs }) {
  // for pagination
  const [activeStep, setActiveStep] = React.useState(0);
  // step == 0, show 0-49
  // step == 1, show 50 - 99
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);
  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);

  // for modal
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState([]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="jobs">
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
      <h1 className="main-title" style={{ marginTop: "40px" }}>
        Job Searching Results
      </h1>
      <Typography variant="h4" component="h3" style={{ marginTop: "40px" }}>
        Software Development Engineer
      </Typography>
      <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
        found {numJobs} jobs{" "}
      </Typography>
      <hr />
      {jobsOnPage.map((job, i) => (
        <JobItem
          job={job}
          key={i}
          onClick={() => {
            console.log("clicked");
            handleClickOpen();
            selectJob(job);
          }}
        />
      ))}
      <div>
        Page {activeStep + 1} of {numPages}
      </div>
      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === numPages - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}
