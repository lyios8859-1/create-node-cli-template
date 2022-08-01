#!/usr/bin/env node

/**
 * step1: chmod +x index.js  设置该文件为可执行文件
 * setp2: npm link 到全局
 * setp3: 执行 package.json 中的 bin 字段中的命令, 这里设置 bin: {"yun": "index.js"}, 就可以执行 `yun` 命令
 */

// 查看包的大小: https://packagephobia.com/
/**
 * 如果使用了 @timly/yun 的包命名方式,npm 发布包的时候报错:
 * ERR! 402 Payment Required - PUT https://registry.npmjs.org/@timly%2fyun - You must sign up for private packages
 *
 * 需要 `--access public` 的选项
 *
 * npm publish --access public
 */

const chalk = require("chalk");

const init = require("./utils/init");
const cli = require("./utils/cli");
const debug = require("./utils/debug");
const alert = require("./utils/cli-alerts");
const generate = require("./utils/generate");

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

  // 生成模板
  await generate();

  debug({ flags, input }, flags.debug);

  log("Node CLI - Test\n");
})();

/**
 * 
 #! /bin/bash

if [ $# -ne 1 ] ; then

echo "Usage: setbrightness <0.0-0.1>"

exit 1

fi

xrandr --output LVDS --brightness $1




输入xrandr，查看输出中状态是connected的显示设备，如LVDS。具体命令可以是：

xrandr | grep -v disconnected | grep connected

调整亮度：

xrand --output LVDS --brightness 0.5


所有用户加入执行权限：

chmod a+x setbrightness

移至应用程序目录下，以便可以直接使用：

mv setbrightness /usr/local/bin
 */
