const path = require("path");
const execa = require("execa");
const ora = require("ora");
const { green: g, yellow: y, dim: d } = require("chalk");

const copy = require("./copy-template-dir");
const alert = require("./cli-alerts");
const questions = require("./questions");

const spinner = ora({ text: "" });

module.exports = async () => {
  const vars = await questions();
  // const inDir = path.join(process.cwd(), "template"); // process.cwd() 这里注意虽然本地可以,但是发布包 到 npm 后还是有问题
  const inDir = path.join(__dirname, "../template"); // 选择 __dirname
  const outDir = path.join(process.cwd(), vars.name);

  copy(inDir, outDir, vars, async (err, createdFiles) => {
    if (err) throw err;
    console.log(g(`\nCreating files in ${d(outDir)} directory:\n`));
    createdFiles.forEach(filePath => {
      const fileName = path.basename(filePath);
      console.log(`${g("CREATED")} ${fileName} ${g("FILE")}.`);
      // console.log(`Created ${filePath}`);
    });

    console.log();
    spinner.start(
      `${y("DEPENDENCIES")} install...\n\n${d("It may take moment...")}`
    );

    // 切换到目录中在去执行下面的 npm 命令
    process.chdir(outDir);

    // 暂时不安装
    if (false) {
      // 生成的项目需要的安装包配置
      const pkgs = ["chalk@4", "log-symbols@4", "cli-table3@0", "meow@7"];
      // 执行安装命令
      await execa("npm", ["install", ...pkgs]);
      await execa("npm", ["install", "prettier@2", "-D"]);
    }

    // fix: package.json 中模板生成有重复选项的问题, npm dedupe 的文档中描述可以,但是现在处理不了,有 bug
    await execa("npm", ["dedupe"]);

    spinner.succeed(`${g("DEPENDENCIES")} installed!`);

    alert({
      type: "success",
      name: "ALL DONE!",
      msg: `\n\n${createdFiles.length} files created in ${d(
        `${outDir}`
      )} directory.`,
    });
  });
};
