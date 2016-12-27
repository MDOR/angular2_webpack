'use strict';

const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpack = require('html-webpack-plugin');
      ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname, '..');

module.exports = {
  debug: true,
  devServer: {
      contentBase: path.resolve(rootDir, 'dist'),
      port: 9000
  },
  devtool: 'source-map',
  entry: {
      app: [ path.resolve(rootDir, 'app', 'bootstrap') ],
      vendor: [ path.resolve(rootDir, 'app', 'vendor') ]
  },
  module: {
      loaders: [
          { loader: 'raw', test: /\.(css|html)$/ },
          { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
      ]
  },
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(rootDir, 'dist')
  },
  plugins: [
      new ChunkWebpack({
          filename: 'vendor.bundle.js',
          minChunks: Infinity,
          name: 'vendor'
      }),
      new HtmlWebpack({
          filename: 'index.html',
          inject: 'body',
          template: path.resolve(rootDir, 'src', 'index.html')
      })
  ],
  resolve: {
      extensions: [ '', '.js', '.ts' ]
    }
};
