const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ( {locale}={} ) => {

  let ttag = {
    resolve: { 
      translations: `i18n/${locale}.po`,
      unresolved: 'skip'
    },
  }

  let config = {
    entry: { build: path.join(__dirname, "src/index.js") },
    output: {
      path: path.join(__dirname, "dist"),
      filename: `[name].js`,
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: [
                [ 'ttag', {extract: {output: 'i18n/poly.pot'}} ]
              ],
            },
          },
          exclude: /node_modules/
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    externals: {
      axios: "axios",
      jsonp: "jsonp",
      moment: "moment",
      react: "react",
      "react-dom": "react-dom",
      "p2pu-input-fields": "p2pu-input-fields"
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    }
  };

  if (locale != null){
    config.output.filename = `[name]-${locale}.js`,
    config.module.rules[0].use.options.plugins = [['ttag', ttag]];
  }

  return config;
}
