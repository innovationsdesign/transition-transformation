const path = require("path");

module.exports = {
  entry: "./Apps/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "Apps"),
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-simple-vars"),
                  require("autoprefixer"),
                  require("postcss-nested"),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
