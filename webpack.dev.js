const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const WebpackDevServer = require('webpack-dev-server')
const errorOverlayMiddleware = require('react-error-overlay/middleware')
const proxy = require('http-proxy-middleware')
// 粉笔
const chalk = require('chalk')

const serverConfig = {
  host: 'localhost',
  port:  process.env.PORT || 8080
}

// add hot-reload related code to entry chunks
Object.keys(webpackConfig.entry).forEach(function (name) {
  name.unshift('react-hot-loader/patch', `webpack-dev-server/client?http://${serverConfig.host}:${serverConfig.port}`, 'webpack/hot/only-dev-server')
})

const config = merge(webpackConfig, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // 标签提示构建信息
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ]
})