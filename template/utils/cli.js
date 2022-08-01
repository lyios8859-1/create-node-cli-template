const meow = require("meow");
const meowHelper = require("./cli-meow-help");

const flags = {
  clear: {
    type: "boolean",
    default: true,
    alias: "c",
    desc: "Clear the console",
  },
  debug: {
    type: "boolean",
    default: false,
    alias: "d",
    desc: "Print debug info",
  },
  version: {
    type: "boolean",
    alias: "v",
    desc: "Print CLI version",
  },
};

const commands = {
  help: {
    desc: "Print CLI help info",
  },
};

const helpText = meowHelper({
  name: "{{command}}",
  flags,
  commands,
  defaults: true, // 显示默认值
  desc: "CLI Options Docs",
  // header: "This is Header...",
  // footer: "This is Footer...",
});

const options = {
  inferType: true,
  hardRejection: false,
  description: false,
  flags,
};

module.exports = meow(helpText, options);
