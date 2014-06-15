var jsMin = require('../');

var files = ['./backbone.js', './underscore.js'];

var result = jsMin.minify(files);

console.log(result);
