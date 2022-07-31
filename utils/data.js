const chalk = require("chalk");
const logSymbols = require("log-symbols");

const jueJinClr = chalk.hex("#1da1f2").bold.inverse;
const gitHubClr = chalk.hex("#6cc644").bold.inverse;
const blogClr = chalk.hex("#6937ff").bold.inverse;
const hrefClr = chalk.dim.underline;
const italic = chalk.italic;

const args = process.argv.slice(2);

const socialInfo = `
${jueJinClr(" Gitee ")} ${hrefClr("https://gitee.com/www-ly-cn")}
${gitHubClr(" Github ")} ${hrefClr("https://github.com/lyios8859-1")}
${blogClr(" Blog ")}   ${hrefClr("https://juejin.cn/user/3852307870780157")}
`;
const printSocial = !args.includes("--no-social");
const social = printSocial ? socialInfo : "";

const bio = italic(`Open-source NodeJS CLI Tools.
xx, xxxxxx, xxxxxx, xxxxxx, xxxxxx, xxxxxx
xxxx, xxxxxxxx, xxxxxxxx, xxxxxxxx, xxxxxx
xxx, xxxxxx.`);

const ad = "可视化编辑器: https://liuyunyun.xyz";

const blog = "https://juejin.cn/user/3852307870780157";
const blogName = "博客帖子";

module.exports = {
  bio,
  ad,
  social,
  blog,
  blogName,
};
