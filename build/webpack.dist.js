var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'tree-input.min.js',
    library: 'TreeInput',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    "vue": "Vue"
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      include: /\.min\.js$/,
      compress: {
        warnings: false
      }
    })
  ],
  performance: {
    hints: "error"
  },
  devtool: 'source-map'
}