const fs = require("fs");
const { Input } = require("enquirer");
const to = require("await-to-js").default;
const handleError = require("./cli-handle-error");
const shouldCancel = require("./cli-should-cancel");

module.exports = async ({ name, hint, message, initial }) => {
  const [err, inputName] = await to(
    new Input({
      name,
      message,
      hint,
      initial,
      validate(value, state) {
        // 验证用户是否输入,没有输入不允许继续
        if (state && state.name === "command") return true;
        if (state && state.name === "name") {
          if (fs.existsSync(value)) {
            return `Directory already exists: ./${value}`;
          } else {
            return true;
          }
        }

        // 没有输入时候提示要输入
        return !value ? "Please input a value" : true;
      },
    })
      // .on("cancel", () => process.exit(1)) // Ctrl + C 退出控制台时，不继续下面的操作，中断
      .on("cancel", () => shouldCancel()) // Ctrl + C 退出控制台时， 友好的提示：不继续下面的操作，中断
      .run()
  );
  handleError("INPUT", err);

  return inputName;
};
