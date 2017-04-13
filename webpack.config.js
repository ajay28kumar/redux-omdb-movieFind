var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/app.js'
  ],
 
 
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
   
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
 
  devtool: 'cheap-module-eval-source-map'
};
