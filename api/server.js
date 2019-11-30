"use strict";

const express = require("express");
const app = express();

const DEFAULT_PORT = process.env.PORT || 8080;
// const port = parseInt(process.argv[2]) || DEFAULT_PORT;

const redis = require("redis"),
  client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get("/jobs", async (req, res) => {
  const jobs = await getAsync("github");
  // console.log(">>> getAsync()", JSON.parse(jobs).length);
  res.header("Access-Control-Allow-Origin", "*");
  return res.send(jobs);
  // return res.send("HELLO");
});

app.listen(DEFAULT_PORT, () =>
  console.log(`server listening on port ${DEFAULT_PORT}`)
);
