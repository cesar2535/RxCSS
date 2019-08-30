/* eslint strict:0 */
'use strict';
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    library: 'RxCSS',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [],
  optimization: {}
  // devtool: 'inline-source-map'
};
