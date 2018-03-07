const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const devServer = require('webpack-dev-server')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.ts'
  },
  output: {
    filename: 'bundle/[name].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devtool: 'inline-source-map', // 用于追踪错误
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','less-loader'],
          publicPath: '/dist'
        })
      },
      {
        test: /\.styl$/,
        use: [
          { loader: 'stylus-loader'}
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [ 'ts-loader' ],
        exclude: /node_modules/
      }
    ]
  },
  // 导入文件不需要加上扩展名
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/@angular\/core\/esm5/, path.join(__dirname, './node_modules/')),
    // new webpack.optimize.LimitChunkCountPlugin({
    //   maxChunks: 5,
    //   minChunkSize: 1000
    // }),
    // 该插件用于压缩代码体积
    // new UglifyJsPlugin({
    //   sourceMap: true,
    //   exclude: /\/node_modules/,
    //   parallel: true,
    //   warningsFilter: false
    // }),
    // 生成一个index.html文件，在文件中引入打包的脚本
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    // 抽离CSS文件
    new ExtractTextPlugin({
      filename: "css/bundle.css",
      disable: false,
      allChunks: true
    }),
    // 下面两行用于热更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 优化代码压缩的配置项
  optimization: {},
  devServer: {
    contentBase: 'dist',
    hot: true
  }
}
