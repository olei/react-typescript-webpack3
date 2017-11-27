const webpack = require('webpack')
const path = require('path')
const express = require('express')
const proxyMiddleware = require('http-proxy-middleware')
// 粉笔
const chalk = require('chalk')

const config = require('./webpack.dev')

const app = express()
const compiler = webpack(config)


const port = process.env.PORT || 8080

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})

const hotMiddleware = require('webpack-hot-middleware')(compiler)
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.use(devMiddleware)

app.use(hotMiddleware)

// const staticPath = path.posix.join('/', 'static')
// app.use(staticPath, express.static('./static'))
app.use(express.static(__dirname + config.output.publicPath))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log(chalk.green('Listening at ' + chalk.blue.underline.bold(uri) + '\n'))
})