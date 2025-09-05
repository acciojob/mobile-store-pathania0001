const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
    publicPath: "/", // 👈 important for React Router
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8000, // 👈 keep same port you’re using
    historyApiFallback: true, // 👈 fixes Cannot GET /admin
    hot: true,
    open: true,
  },
};
