const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  plugins: [new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-us/)]
};


