/**
 *
 * 跨平台清空控制台. 类似 ubuntu 中 clear
 *
 * Platform: macOS, Windows, and Linux.
 *
 * @returns
 */
module.exports = () =>
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );
