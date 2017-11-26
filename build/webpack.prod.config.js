var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // html模板插入代码。
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 从bundle中提取文本到一个新的文件中

const extractCommon = new ExtractTextPlugin({
  filename: 'css/common.[contenthash:8].css',
  allChunks: true
})
const extractApp = new ExtractTextPlugin({
  filename: 'css/app.[contenthash:8].css',
  allChunks: true
})
var env = 'production';

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: `"${env}"`
    }
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/index.html'),
    // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
    inject: 'true',
    filename: path.resolve(__dirname, '../dist/index.html'),
    // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
    // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    // chunksSortMode: 'dependency'
    // hash:true
  }),
  new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', "window.jQuery": 'jquery'}),
  extractCommon,
  extractApp,
  // Explicit vendor chunk
  // 单独将echarts jquery提取出来
  new webpack.optimize.CommonsChunkPlugin({
    names: ['jquery', 'echarts', 'vendor'],
    minChunks: function(module) {
      return module.context && module.context.indexOf("node_modules") !== -1 && /(echarts|zrender|jquery)/.test(module.context) === false;
    }
  }),
  // 引导
  new webpack.optimize.CommonsChunkPlugin({name: 'manifest', minChunks: Infinity}),
  new ExtractTextPlugin({
    filename: 'css/[name].[contenthash].css',
    //disable: false,
    allChunks: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true,
      drop_debugger: true
    },
    sourceMap: true
  }),
  new webpack.NoEmitOnErrorsPlugin()
];

module.exports = {
  entry: {
    jquery: ['jquery'],
    echarts: ['echarts', 'zrender'],
    app: [path.resolve(__dirname, '../src/app')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }, {
            loader: 'awesome-typescript-loader'
          }
        ]
      }, {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        use: extractCommon.extract({
          fallback: 'style-loader', // 应用于当 CSS 没有被提取(也就是一个额外的 chunk，当 allChunks: false)
          use: ['css-loader?sourceMap=true', 'postcss-loader']
        })
      }, {
        test: /\.styl$/,
        include: path.resolve(__dirname, '../src'),
        use: extractApp.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]-[hash:base64:5]',
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'stylus-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }, {
        test: /\.(png|jpe?g|git)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'images/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: plugins,
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src')
    ],
    extensions: [
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.min.js',
      '.json',
      '.styl',
      '.css'
    ],
    alias: {
      'libs': path.join(__dirname, '../libs'),
      '@': path.join(__dirname, '../src/')
    }
  },
  devtool: ''
}
