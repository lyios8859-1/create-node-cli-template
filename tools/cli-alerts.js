/**
 * CLI Alerts.
 *
 * 跨平台的控制台颜色答应提示.
 * Works on macOS, Linux, and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 */
const chalk = require("chalk");
const sym = require("log-symbols");

const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.bold.inverse;
const orange = chalk.keyword("orange");
const orangeI = chalk.keyword("orange").inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;

const log = console.log;

module.exports = options => {
  const defaultOptions = {
    type: "error",
    msg: "You forgot to define all options.",
    name: "",
  };
  const opts = { ...defaultOptions, ...options };
  const { type, msg, name } = opts;
  const printName = name ? name : type.toUpperCase();

  if (type === "success") {
    log(`\n${sym.success} ${greenI(printName)} ${green(msg)}\n`);
  }

  if (type === "warning") {
    log(`\n${sym.warning} ${orangeI(printName)} ${orange(msg)}\n`);
  }

  if (type === "info") {
    log(`\n${sym.info} ${blueI(printName)} ${blue(msg)}\n`);
  }

  if (type === "error") {
    log(`\n${sym.error} ${redI(printName)} ${red(msg)}\n`);
  }
};

/**
alerts({
  type: "success",
  msg: "success.",
  name: "",
});
alerts({
  type: "warning",
  msg: "warning.",
  name: "",
});
alerts({
  type: "info",
  msg: "info.",
  name: "",
});
alerts({
  type: "error",
  msg: "error.",
  name: "",
});
*/
