const boxen = require("boxen");

const welcome = require("./cli-welcome");
const checkNode = require("./cli-check-node-version");
const unhandled = require("./cli-handle-unhandled");

const pkgJson = require("./../package.json");

module.exports = (minimal, clear) => {
  // 检测有报错,退出进程
  unhandled();

  !minimal &&
    welcome({
      title: pkgJson.name,
      tagLine: "Hello, nice to meet you!",
      description: pkgJson.description,
      version: pkgJson.version,
      bgColor: "#6cc24a",
      color: "#000000",
      bold: true,
      clear,
    });

  minimal &&
    console.log(
      boxen(pkgJson.name, {
        padding: 1,
        margin: 1,
        borderStyle: "double",
        float: "center",
        backgroundColor: "magenta",
        dimBorder: true,
      })
    );

  // 检测 nodejs 版本
  checkNode("12", {fail: true});
};
