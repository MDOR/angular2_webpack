'use strict';

const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpack = require('html-webpack-plugin'),
      ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname);

console.log(rootDir)

module.exports = {
  debug: true,
  devServer: {
      contentBase: path.resolve(rootDir, 'assets'),
      port: 9000
  },
  devtool: 'source-map',
  entry: {
      app: [ path.resolve(rootDir, 'app', 'assets', 'js' , 'main.ts') ]
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
      new HtmlWebpack({
          filename: 'index.html',
          inject: 'body',
          template: path.resolve(rootDir, 'app', 'index.html')
      })
  ],
  resolve: {
      extensions: [ '', '.js', '.ts' ]
    }
};
