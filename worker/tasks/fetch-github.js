"use strict";

var fetch = require("node-fetch");
const baseURL = "https://jobs.github.com/positions.json";
const setAsync = promisify(client.set).bind(client);

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
    console.log(`got ${jobs.length} jobs`);
    onPage++;
  }
  console.log(`got total ${allJobs.length} jobs!`);
  // set in redis
  const success = await setAsync("github", JSON.stringify(allJobs));
  console.log({ success });

  // filter method
  const filteredJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();
    const jobDesc = job.description.toLowerCase();

    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr.") ||
      jobTitle.includes("architect") ||
      jobDesc.includes("angular") ||
      jobDesc.includes("ruby") ||
      jobDesc.includes("rail") ||
      jobDesc.includes("php") ||
      jobDesc.includes("c#") ||
      !jobDesc.includes("remote")
    ) {
      return false;
    }
    return true;
  });
  console.log(`After filtering ${filteredJobs.length} jobs`);
}
// fetchGithub();
module.exports = fetchGithub;
