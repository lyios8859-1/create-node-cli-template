/* CLI WELCOME */
const chalk = require("chalk");
const clearConsole = require("./clear-any-console");

const dim = chalk.dim;
const log = console.log;

/**
 * Welcome
 *
 * @param String 标题
 * @param String 子标题
 * @param Object 配置项
 */
module.exports = (options = {}) => {
  // 默认配置
  const defaultOptions = {
    title: "ADD A HEADING",
    tagLine: "",
    description: "",
    bgColor: "#ffffff",
    color: "#000000",
    bold: true,
    clear: true,
    version: "",
  };
  const opts = { ...defaultOptions, ...options };
  const { title, tagLine, description, bgColor, color, bold, clear, version } =
    opts;

  const bg = bold
    ? chalk.hex(bgColor).inverse.bold
    : chalk.hex(bgColor).inverse;
  const clr = bold ? chalk.hex(color).bold : chalk.hex(color);
  clear && clearConsole();

  log();
  log(`${clr(bg(title))} v${version} ${dim(tagLine)} \n${dim(description)}`);
  log();
};
