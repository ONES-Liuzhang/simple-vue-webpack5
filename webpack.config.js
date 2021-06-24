const path = require('path');
const name = require("./package.json");
const HtmlWebpaclPlugin = require('html-webpack-plugin');
const VueLoadePlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === 'development'

const config = {
  entry: {
    app: "./src/main.js"
  },
  output: {
    // publicPath: ".",
    path: path.join(__dirname, "dist"),
    filename: isDev ? "bundle.js" : "[name].[contenthash:8].js",
    library: `${name}-[name]`,
    libraryTarget: "umd",
    // jsonpFunction: `webpackJsonp_${name}`  // webpack5废弃该属性 , 会根据package.json自动添加uniqueName属性
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '@': path.join(__dirname, 'src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    hot: true,
    progress: true, // 打包进度条
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    port: 3334
  },
  module: {
    // noParse: /vue(-router)?$/,
    rules: [{
      test: /\.js$/,
      exclude: /node_module/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                corejs: 3,
                modules: false,
                useBuiltIns: "usage"
            }]],
            plugins: ['@babel/transform-arrow-functions', 'syntax-dynamic-import']
          }
        }
      ]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]},
  plugins: [
    new HtmlWebpaclPlugin({
      filename: 'index.html',
      template: path.join(__dirname, "index.html"),
      inject: "body"
    }),
    new VueLoadePlugin()
  ]
}

if(isDev) {
  config.devtool = "inline-source-map"
}

module.exports = config;