const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Split dev and prod configs based on this guide:
// https://webpack.js.org/guides/production/
module.exports = {
  entry: {
    index: './src/index.tsx',
    'firebase-messaging-sw': './src/firebase-messaging-sw.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
      // Setting { chunks: ["index"] } prevents the service worker from being
      // appended to the document, which is the default behavior of
      // HtmlWebpackPlugin.
      chunks: ['index']
    })
  ]
};
