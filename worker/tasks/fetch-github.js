"use strict";

const fetch = require("node-fetch");

const setAsync = promisify(client.set).bind(client);

const baseURL = "https://jobs.github.com/positions.json";

async function fetchGithub() {
  console.log(">>> start fetchGithub()");
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];

  // fetch all pages
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log("got", resultCount, "jobs");
    onPage++;
  }
  console.log("got", allJobs.length, "jobs total");
  console.log("total ", allJobs.length);

  // filter out managers/senior roles
  // also filter by location(no seatttle work seen tho) and skillsets

  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();
    const jobLocation = job.location.toLowerCase();
    const jobDesc = job.description.toLowerCase();

    if (
      (jobTitle.includes("senior") ||
        jobTitle.includes("manager") ||
        jobTitle.includes("sr.") ||
        jobTitle.includes("architect")) &&
      (jobDesc.includes("angular") ||
        jobDesc.includes("ruby") ||
        jobDesc.includes("rail") ||
        !jobDesc.includes("remote"))
    ) {
      return false;
    }
    return true;
  });
  console.log("After filtering Junior Jobs", jrJobs.length);

  // set in redis
  const success = await setAsync("github", JSON.stringify(allJobs));
  console.log({ success });
}

// fetchGithub();
module.exports = fetchGithub;
