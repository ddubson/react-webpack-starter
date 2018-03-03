const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: ['babel-polyfill', './src/index.jsx'],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public'
  }
});