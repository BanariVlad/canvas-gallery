const merge = require('webpack-merge')
const path = require('path')

const config = require('./webpack.config')

module.exports = merge(config, {
  node: {
    fs: "empty"
  },

  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    writeToDisk: true
  },

  output: {
    path: path.join(__dirname, 'InifniteAutoScrollingGallery')
  }
})
