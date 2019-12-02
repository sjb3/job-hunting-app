import React from "react";
import "./App.css";
import Jobs from "./components/Jobs";

const JOB_API_URL = "http://localhost:8080/jobs";

// const mockJobs = [
//   { title: "SED1", company: "Amazon", location: "Seattle, WA" },
//   { title: "SED1", company: "Apple", location: "Seattle, WA" }
// ];

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  const data = await res.json();

  updateCb(data);
}

function App() {
  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className={"App"}>
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
