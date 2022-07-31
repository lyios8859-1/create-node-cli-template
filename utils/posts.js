const axios = require("axios");
const ora = require("ora");
const to = require("await-to-js").default;
const { yellow, green, dim } = require("chalk");

const cliHandleError = require("./cli-handle-error");
const stripHtml = require("./cli-strip-html");

const log = console.log;
const apiURL = "https://api.xxx.com/posts/10";

const spinner = ora({ text: "" });
module.exports = async () => {
  spinner.start(yellow("Fetching posts...\n\n"));

  // try {
  //   const res = await axios.get(apiURL);
  //   const posts = res.data;
  //   log("posts: ", posts);
  // } catch (error) {
  //   cliHandleError("API CALL FAILED", error, false, false);
  // }

  // const [error, res] = await to(axios.get(apiURL));
  // cliHandleError("API CALL FAILED", error, false, false);
  const posts = [
    { url: "https://www.aaa.com", title: "Javascript Study \n" },
    { url: "https://www.bbb.com", title: "React <br/> Study \n" },
    { url: "https://www.ccc.com", title: "Vue3.0 <br/> Study \n" },
  ]; // res.data;
  spinner.succeed(green("Fetched"));

  // log(stripHtml('http M<br/>  \ndfdf'))

  posts.forEach(({ title, url }, index) => {
    log(`${dim(`#${++index}`)} ${stripHtml(title)} \n   ${dim(url)} \n`);
  });
  log();
};
