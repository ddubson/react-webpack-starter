const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-bootstrap',
      'react-redux',
      'redux',
      'prop-types',
      'immutability-helper'
    ],
    app: ['./src/index.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
});