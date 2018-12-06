const path = require("path");

module.exports = {
  entry: "./src/index.js",
  // 将浏览器不认识的语句打包
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};
