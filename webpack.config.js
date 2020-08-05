module.exports = {
  entry: "./index.js",
  output: {
    libraryTarget: "commonjs",
    filename: "./webpack.bundle.js",
  },
  optimization: {
    minimize: false,
  },
};
