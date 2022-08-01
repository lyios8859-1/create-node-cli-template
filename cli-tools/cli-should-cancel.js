/**
 * CLI Should Cancel
 */

const chalk = require("chalk");
const yellow = chalk.bold.yellow;

module.exports = async action => {
  if (action === undefined) {
    console.log(yellow("\n❯ Cancelled!\n"));
    process.exit(0);
  }
};
