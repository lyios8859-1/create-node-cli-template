#!/usr/bin/env node

/**
 * {{name}}
 * {{descripton}}
 *
 * @author {{authorName}} <{{authorUrl}}>
 */
const init = require("./utils/init");
const cli = require("./utils/cli");
const logge = require("./utils/logge");
const { flags, input } = cli;

!(async () => {
  init(flags.minimal, flags.clear);
  input.includes("help") && cli.showHelp(0);

  logge({ flags, input }, flags.debug);
})();
