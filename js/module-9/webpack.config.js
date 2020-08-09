const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),

  },
  plugins: [new MiniCssExtractPlugin({ filename: 'style.css' }),
  new HtmlWebpackPlugin(
    { template: './src/index.html' }
  )],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.scss$/, use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
    ]
  },
  devServer: { port: 1234 },
}
