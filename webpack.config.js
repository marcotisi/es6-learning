var webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};

