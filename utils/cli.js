const meow = require("meow");
const meowHelper = require("./cli-meow-help");

const flags = {
  ad: {
    type: "boolean",
    default: true,
    desc: "Print Ad. info",
  },
  "no-ad": {
    type: "boolean",
    default: false,
    desc: "Don't Print Ad. info",
  },
  bio: {
    type: "boolean",
    default: true,
    desc: "Print bio info",
  },
  "no-bio": {
    type: "boolean",
    default: false,
    desc: "Don't print bio info",
  },
  clear: {
    type: "boolean",
    default: true,
    desc: "Clear the console",
  },
  "no-clear": {
    type: "boolean",
    default: false,
    desc: "Don't clear the console",
  },
  social: {
    type: "boolean",
    default: true,
    desc: "Print social info",
  },
  "no-social": {
    type: "boolean",
    default: false,
    desc: "Don't print social info",
  },
  minimal: {
    type: "boolean",
    alias: "m",
    desc: "Print minimal info",
  },
  posts: {
    type: "boolean",
    alias: "p",
    desc: "Print posts info",
  },
  stats: {
    type: "boolean",
    alias: "s",
    desc: "Print stats info",
  },
  debug: {
    type: "boolean",
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
  name: "npx @timly/yun",
  flags,
  commands,
  defaults: true, // 显示默认值
  desc: "CLI Options Docs",
});

const options = {
  inferType: true,
  hardRejection: false,
  description: false,
  flags,
};

module.exports = meow(helpText, options);
