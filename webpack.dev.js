const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = "development";

module.exports = [
  {
    mode: "development",
    devtool: "cheap-module-source-map",
    target: "electron-main",
    devtool: "cheap-module-source-map",
    entry: "./src/main-process/index.ts",
    output: {
      filename: "main.js",
      path: __dirname + "/dist"
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          exclude: /node_modules/
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
          exclude: /node_modules/
        }
      ]
    }
  },
  {
    mode: "development",
    target: "electron-renderer",
    devtool: "cheap-module-source-map",
    entry: "./src/renderer-process/renderer.ts",
    output: {
      filename: "renderer.js",
      path: __dirname + "/dist"
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "bundle.css"
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          exclude: /node_modules/
        },
        {
          test: /(\.css)$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: "css-loader" }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts"
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts"
              }
            }
          ]
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
          exclude: /node_modules/
        }
      ]
    },
    externals: {
      react: "React",
      "react-dom": "ReactDOM"
    }
  }
];
