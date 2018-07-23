var path = require('path')
var webpack = require('webpack')
const {
  VueLoaderPlugin
} = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.ts"),
    editor: path.resolve(__dirname, "src/editor.ts"),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },
       {
         test: /\.s[a|c]ss$/,
         loader: 'vue-style-loader!css-loader!sass-loader'
       },
      {
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!sass-loader'
      },
 
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  externals:{
    "velocity-animate": 'velocity-animate'
  },
  devServer: {
    historyApiFallback: true,
    watchContentBase: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}