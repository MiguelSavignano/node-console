var _ = require('lodash')
exports.loadAllModels = function(replServer, options){
  if(!options){ var options = {} }
  if(!options.folder){ options.folder = "models" }
  var normalizedPath = require("path").join(__dirname, options.folder);
  require("fs").readdirSync(normalizedPath).forEach(function(file_name) {
    var name = file_name.replace('.js','')
    var class_name = _.capitalize(name);
    replServer.context[class_name] = require("./models/" + name);
  });
}
