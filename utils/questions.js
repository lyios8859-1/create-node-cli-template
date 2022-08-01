const ask = require("./ask");

module.exports = async () => {
  const name = await ask({
    name: "name",
    message: "CLI name?",
    hint: "(use keyboard only)",
  });
  const command = await ask({
    name: "command",
    message: "CLI command?",
    hint: "(optional: if different from CLI name)",
  });
  const descripton = await ask({
    name: "descripton",
    message: "CLI description?",
  });
  const version = await ask({
    name: "version",
    message: "CLI version?",
    initial: "0.0.1",
  });
  const authorName = await ask({
    name: "authorName",
    message: "CLI author name?",
  });
  const authorEmail = await ask({
    name: "authorEmail",
    message: "CLI author email?",
  });
  const authorUrl = await ask({
    name: "authorUrl",
    message: "CLI author url?",
  });
  const license = await ask({
    name: "license",
    message: "CLI license?",
    initial: "UNLICENSED",
  });

  const vars = {
    name,
    descripton,
    version,
    authorName,
    authorEmail,
    authorUrl,
    license,
    command: command ? command : name,
  };
  return vars;
};
