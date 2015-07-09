var path = require('path');
var dust = require('dustjs-linkedin');
var loaderUtils = require('loader-utils');

module.exports = function(content) {
  if (this.cacheable) {
    this.cacheable();
  }

  var query = loaderUtils.parseQuery(this.query);
  var name = query.name;

  if(!name){
    name = this.resourcePath.replace(this.options.context + path.sep, '').replace('.dust', '').split(path.sep).join('/');
  }
  
  var compiled = dust.compile(content, name);

  return "module.exports = " + compiled;
};
