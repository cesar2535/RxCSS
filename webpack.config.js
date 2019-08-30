/* eslint strict:0 */
var path = require('path');

('use strict');

module.exports = {
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    library: 'RxCSS',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [],
  optimization: {}
  // devtool: 'inline-source-map'
};
