const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/javascript/script.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
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
