const debug = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

const devPath = path.resolve(__dirname, "src");

module.exports = {
  context: devPath,
  entry: "./index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules"),
    ],
  },
  output: {
    path: path.resolve(__dirname, "../server/src/static"),
    filename: "bundle.js",
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
    }),
  ].concat(
    debug
      ? []
      : [
          new webpack.optimize.OccurrenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false,
          }),
        ]
  ),
  devtool: "source-map",
  devServer: {
    contentBase: devPath,
    open: true,
  },
};
