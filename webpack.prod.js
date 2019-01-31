const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    vendor: [
      '@babel/polyfill',
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
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
});
