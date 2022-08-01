const alerts = require("./cli-alerts");

const log = console.log;

module.exports = ({ input, flags }, isDebug) => {
  if (!isDebug) return;

  alerts({ type: "warning", msg: "Debugging Log ↓" });
  log("input:", input);
  log("flags:", flags);
  log();
};
