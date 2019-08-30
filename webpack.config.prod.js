/* eslint strict:0 */
'use strict';

var path = require('path');

const webpack = require('webpack');
const baseConfig = require('./webpack.config');

const config = Object.create(baseConfig);

config.plugins = config.plugins.concat([
  // The OccurrenceOrderPlugin is now enabled by default
  // new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]);

config.optimization.minimize = true; //Update this to true or false

module.exports = config;
