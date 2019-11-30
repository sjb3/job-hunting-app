import React from "react";
import "./App.css";
import Jobs from "./components/Jobs";

const mockJobs = [
  { title: "SDE1", company: "Google" },
  { title: "SDE2", company: "Apple" }
];

function App() {
  return (
    <div className={"App"}>
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
