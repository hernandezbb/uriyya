const HtmlWebpackPlugin = require("html-webpack-plugin");
const ClosurePlugin = require("closure-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

process.env.NODE_ENV = "production";

module.exports = [
  {
    mode: "production",
    target: "electron-main",
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
        }
      ]
    },
    optimization: {
      minimizer: [new ClosurePlugin({ mode: "STANDARD" }, {})]
    }
  },
  {
    mode: "production",
    target: "electron-renderer",
    entry: "./src/renderer-process/index.tsx",
    output: {
      filename: "renderer.js",
      path: __dirname + "/dist"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        templateParameters: {
          reactDependencies: ""
        },
        template: "src/renderer-process/index.html",
        minify: true
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
          use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }]
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
        }
      ]
    },
    optimization: {
      minimizer: [new ClosurePlugin({ mode: "STANDARD" }, {}), new OptimizeCSSAssetsPlugin({})]
    }
  }
];
