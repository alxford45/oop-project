const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./client/src/main.tsx"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "./client/src/"
  },
  devServer: {
    contentBase: "./client/dist",
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: ["babel-loader"]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name]-[hash:8].[ext]"
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
        include: /dist/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html"
    })
  ]
};
