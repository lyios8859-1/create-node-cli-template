/**
 * Cli Handle Unhandled.
 *
 * 自定义错误处理错误。
 */
const handleError = require("./cli-handle-error");

module.exports = () => {
  process.on("unhandledRejection", err => {
    handleError("UNHANDLED ERROR", err);
  });
};
