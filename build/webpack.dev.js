const webpack = require('webpack')
const path = require('path')
// const express = require('express')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const proxyMiddleware = require('http-proxy-middleware')
const WebpackNotifierPlugin = require('webpack-notifier')

// webpack hot reload 配置
Object.keys(webpackConfig.entry).forEach(function (name) {
  // webpackConfig.entry[name] = ['./dev-client'].concat(webpackConfig.entry[name])
  webpackConfig.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(webpackConfig.entry[name])
})

module.exports = merge(webpackConfig, {
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
      }
    ]
  },
  // devtool: 'inline-source-map',
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"development"' },
      'DEV': true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // 标签提示构建信息
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ]
})