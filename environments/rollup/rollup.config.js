import path from "path"
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/main.js",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [nodeResolve({ browser: true, preferBuiltins: false }), commonjs()],
  rootDir: path.join(process.cwd(), "..", ".."),
};
