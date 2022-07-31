#!/usr/bin/env node

/**
 * step1: chmod +x index.js  设置该文件为可执行文件
 * setp2: npm link 到全局
 * setp3: 执行 package.json 中的 bin 字段中的命令, 这里设置 bin: {"yun": "index.js"}, 就可以执行 `yun` 命令
 */

const chalk = require("chalk");

const init = require("./utils/init");
const cli = require("./utils/cli");
const debug = require("./utils/debug");
const alert = require("./utils/cli-alerts");

const stats = require("./utils/stats");
const posts = require("./utils/posts");
const { bio, ad, social, blog, blogName } = require("./utils/data");

const log = console.log;
const { flags, input } = cli;

!(async () => {
  init(flags.minimal, flags.clear);
  input.includes("help") && cli.showHelp(0);

  flags.bio && log(chalk.dim(bio));
  flags.social && log(social);
  flags.ad && alert({ type: "info", msg: ad, name: "Ad." });

  if (flags.posts) {
    alert({ type: "info", msg: blog, name: blogName });
    // 请求文档帖子;
    await posts();
  }

  // 请求 github, 获取统计数据
  flags.stats && (await stats());

  debug({ flags, input }, flags.debug);

  log("Node CLI - Test\n");
})();

// 查看包的大小: https://packagephobia.com/
/*
使用了 @timly/yun 的包命名方式,npm 发布包的时候报错:
ERR! 402 Payment Required - PUT https://registry.npmjs.org/@timly%2fyun - You must sign up for private packages

需要 `--access public` 的选项

npm publish --access public
*/
