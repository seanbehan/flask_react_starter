var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app.jsx',
  output: { path: __dirname, filename: 'static/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
