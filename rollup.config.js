import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./index.js",
  output: {
    file: "./dist/rollup.bundle.js",
    format: "es",
  },
};
