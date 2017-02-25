var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var ngToolsWebpack = require('@ngtools/webpack');
var baseWebpackConfig = require('./webpack.config');

module.exports = merge.smart(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      }
    ]
  },
  plugins: [
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: path.join(__dirname, 'src', 'app', 'main.ts'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ]
});
