var webpack = require('webpack');

var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app', 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './src'
    }], {
      ignore: ['*.js']
    })
  ]
};
