var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // html模板插入代码。
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 从bundle中提取文本到一个新的文件中
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 优化css
var argv = require('yargs').argv;
var env = argv.env.trim();
var isPro = env === 'production';

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, '')
];

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: `"${env}"`
    }
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
    inject: 'true',
    filename: path.resolve(__dirname, 'dist/index.html'),
    // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
    // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
    minify: {
      removeComments: true,
      // collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    // chunksSortMode: 'dependency'
    // hash:true
  }),
  // 将node_modules打入vendor
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module, count) {
      // this assumes your vendor imports exist in the node_modules directory
      // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, 'node_modules')
          ) !== -1
        )
    }
  }),
  // To extract the webpack bootstrap logic into a separate file
  // 其他打入清单 比如webpack runtime代码
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new ExtractTextPlugin({
    filename: isPro ? 'css/[name].[contenthash].css' : '[name].css',
    //disable: false,
    allChunks: true
  })
];
if (env === 'production') {
  plugins = Array.prototype.concat.call(plugins, [
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: isPro,
        drop_debugger: isPro,
      },
      //sourceMap: true
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ])
}
module.exports = {
  entry: {
    // venders: ['react', 'react-dom', 'react-router'],
    main: ['babel-polyfill', './src/app']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isPro ? 'js/[name].[chunkhash].js' : '[name].[hash:8].bundle.js',
    chunkFilename: isPro ? 'js/[id].[chunkhash].js' : '[name]-[id].[chunkhash:8].bundle.js',
    publicPath: isPro ? '/' : ''
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.styl$/,
        include: path.resolve(__dirname, 'src'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]-[hash:base64:5]',
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              }
            },
            'stylus-loader'
          ]
        })
      },
      {
        test: /\.(png|jpe?g|git)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite-loader',
        include: svgDirs  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      },
    ]
  },
  plugins: plugins,
  devServer: {
    contentBase: 'dist',
    // 热替换的区别就在于，当前端代码变动时，无需刷新整个页面，只把变化的部分替换掉。
    // 自动刷新整个页面刷新
    inline: true,
    // stats(string or object) errors-only|minimal|none|normal|verbose(输出所有)
    stats:{
      // context: './src/',
      // assets: true,
      colors: true,
      errors: true
    },
    // 启用gzip压缩一切服务:
    // compress: true,
    // host: '0.0.0.0',
    // host: '192.168.10.75',
    // port: '3001'
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.web.js', '.js', '.json', '.styl'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      consts: path.resolve(__dirname, 'src/consts'),
      containers: path.resolve(__dirname, 'src/containers'),
      imgs: path.resolve(__dirname, 'src/imgs'),
      pages: path.resolve(__dirname, 'src/pages'),
      stylus: path.resolve(__dirname, 'src/stylus'),
      '@': path.join(__dirname, 'src/')
    }
  },
  devtool: !isPro ? 'eval-source-map' : ''
}
