
var fs = require('fs');
var pth = require('path');
var UglifyJS = require('uglify-js');
var jsMin = module.exports = new JsMin;

function JsMin () {}

JsMin.prototype.minify = function (files, options) {
  var result = '', fstat = null, filePaths = [];
  var self = this;
  each(files, function (file) {
    filePaths.push(getAbsoultePath(file));
  });
  result = UglifyJS.minify(filePaths).code;
  return result;
};

function getAbsoultePath (source) {
  return source && pth.normalize(process.cwd() + pth.sep + source);
}

function each (obj, iterator, context) {
  if (obj == null) return obj;
  if (obj.length === +obj.length) {
    for (var i = 0, length = obj.length; i < length; i++) {
      iterator.call(context, obj[i], i, obj)
    }
  } else {
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      iterator.call(context, obj[keys[i]], keys[i], obj);
    }
  }
  return obj;
};
