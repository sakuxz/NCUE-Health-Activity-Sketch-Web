var webpack = require("webpack");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    a: './js/album.jsx'
  },
  output: {
    filename: './js/[name].js',
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),

    // BrowserSync
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'localhost:8000',
      files: ['*.html', './css/*.css'] //監聽html檔案
    })
  ]
};