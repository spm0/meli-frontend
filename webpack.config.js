const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  devtool: "inline-source-map",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { targets: { node: "current" } }],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/shared/assets/images", to: "shared/assets/images" },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
