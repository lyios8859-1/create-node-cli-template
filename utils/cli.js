const meow = require("meow");
const { green, yellow, cyan, dim } = require("chalk");

const helpText = `
  Usage
    ${dim("$")} ${green("npx yun-node")} ${yellow("[options]")} ${cyan(
  "<commands>"
)}
  
  Options
    ${yellow("social")}        Print the social info ${dim("(DEFATULT: true)")}
    ${yellow("--no-social")}   Don't print the social info
    ${yellow("bio")}           Print the bio info ${dim("(DEFATULT: true)")}
    ${yellow("--no-bio")}      Don't print the bio info
    ${yellow("ad")}            Print the Ad info ${dim("(DEFATULT: true)")}
    ${yellow("--no-ad")}       Don't print the Ad info
    ${yellow("clear")}         Clear the console ${dim("(DEFATULT: true)")}
    ${yellow("--no-clear")}    Don't clear the console
    ${yellow("-s")}, ${yellow("--stats")}   Print stats info
    ${yellow("-p")}, ${yellow("--posts")}   Print posts info
    ${yellow("-d")}, ${yellow("--debug")}   Print debug info
    ${yellow("-m")}, ${yellow("--minimal")} Print minimal info
    ${yellow("-v")}, ${yellow("--version")} Print CLI version

  Commands
    ${cyan("help")}          Print CLI help info

  Examples
    ${dim("$")} ${green("npx yun-node")} ${yellow("--no-social")}
    ${dim("$")} ${green("npx yun-node")} ${cyan("help")}
`;
const options = {
  inferType: true, // 保证输入的数字或者数字字符串是数字: 5, "5" => 5
  hardRejection: false, // 是否使用自己的错误打印信息
  flags: {
    minimal: {
      type: "boolean",
      alias: "m",
    },
    clear: {
      type: "boolean",
      default: true,
    },
    bio: {
      type: "boolean",
      default: true,
    },
    social: {
      type: "boolean",
      default: true,
    },
    ad: {
      type: "boolean",
      default: true,
    },
    posts: {
      type: "boolean",
      alias: "p",
    },
    stats: {
      type: "boolean",
      alias: "s",
    },
    debug: {
      type: "boolean",
      alias: "d",
    },
    version: {
      type: "boolean",
      alias: "v",
    },
  },
};

module.exports = meow(helpText, options);
