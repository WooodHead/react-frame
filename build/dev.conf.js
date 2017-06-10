var rm = require('rimraf');
const webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var ora = require('ora');
var spinner = ora('building for production...');
spinner.start();
rm('dist/*', function(){
  var compiler = webpack(webpackConfig,(err, stats) => {
    spinner.stop();
    console.log(stats.toString({
      chunks: true,  // Makes the build much quieter
      colors: true    // Shows colors in the console
    }));
  })
  var watching = compiler.watch({},(err, stats) => {
    console.log(stats.toString({
      colors: true
    }));
  })
  watching.close(() => {
    console.log('watching Ended.');
  })
})
