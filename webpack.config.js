const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/javascript/script.js",
    bundleResult: "./src/javascript/result.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  }
};
