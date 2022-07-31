/**
 * Cli Strip Html.
 *
 * 忽略 html 相关的信息
 *
 * Strip HTML in a JavaScript/Node.js string.
 *
 */
module.exports = (str = "") => {
  const html = /<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi;
  const doubleSpace = /\s{2,}/g;
  return str.replace(html, "").replace(doubleSpace, " ").trim();
};
