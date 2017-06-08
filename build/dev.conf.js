var rm = require('rimraf');
rm('dist', function(){
  console.log(arguments);
})
