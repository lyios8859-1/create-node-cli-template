const axios = require("axios");
const ora = require("ora");
const to = require("await-to-js").default;
const { yellow, green } = require("chalk");

const cliHandleError = require("./cli-handle-error");
const log = console.log;

// const apiURL = "https://error.api.github.com/users/lyios8859-1";
const apiURL = "https://api.github.com/users/lyios8859-1";

const spinner = ora({ text: "" });
module.exports = async () => {
  spinner.start(yellow("Fetching Github followers...\n"));

  // try {
  //   const res = await axios.get(apiURL);
  //   const ghFollowers = res.data;
  //   spinner.succeed(green('Fetching Github followers success!\n'));
  //   log("GitHub Followers: ", ghFollowers.followers);
  //   log();
  // } catch (error) {
  //   cliHandleError("API CALL FAILED", error, false, false);
  // }

  const [error, res] = await to(axios.get(apiURL));
  cliHandleError("API CALL FAILED", error, false, false);
  const ghFollowers = res.data;

  spinner.succeed(green("Fetching Github followers success!\n"));
  log("GitHub Followers: ", ghFollowers.followers);
  log();
};
