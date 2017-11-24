const webpack = require('webpack')
const path = require('path')
const express = require('express')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const proxyMiddleware = require('http-proxy-middleware')
const WebpackNotifierPlugin = require('webpack-notifier')

// webpack dev server 配置
const WebpackDevServer = require('webpack-dev-server')
// const errorOverlayMiddleware = require('react-error-overlay')

// 粉笔
const chalk = require('chalk')

// 服务配置
const proxyTable = {
  '/activity': {
    target: 'https://bbs-dev.jzb.com',
    changeOrigin: true,
    pathRewrite: {
      '^/activity': '/activity'
    }
  }
}
const serverConfig = {
  host: 'localhost',
  port:  process.env.PORT || 8080
}

// webpack dev server 配置
for (var i in webpackConfig.entry) {
  webpackConfig.entry[i].unshift('react-hot-loader/patch', `webpack-dev-server/client?http://${serverConfig.host}:${serverConfig.port}`, 'webpack/hot/only-dev-server')
}

const config = merge(webpackConfig, {
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  // devtool: 'inline-source-map',
  devtool: '#eval-source-map',
  plugins: [
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


new WebpackDevServer(webpack(config), {
    hot: true,
    compress: true,
    historyApiFallback: true,
    publicPath: '/build/',
    watchOptions: {
        ignored: /node_modules/,
    },
    stats: {
        modules: false,
        chunks: false
    }
    // setup (app) {
    //     app.use(errorOverlayMiddleware())
    //     if (process.env.NODE_ENV !== 'production') {
    //         app.use('/book/*', proxy({
    //             target: 'https://www.easy-mock.com/mock/593611b991470c0ac101d474',
    //             secure: false
    //         }))
    //     }
    // }
}).listen(serverConfig.port, serverConfig.host, function (err, result) {
    if (err) {
        return console.log(err)
    }
    console.log(`Listening at http://${serverConfig.host}:${serverConfig.port}/`)
})