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


// SuperCallback save the arguments in global variabe to know the results of mongoose querys
exports.loadSuperCallBack = function(replServer){
  var $r = {
    data:{},
    results: function() {return this.data['1']},
    error:  function() {return this.data['0']}
  }
  var cb = function(){
    this.data = arguments
  }
  cb = cb.bind($r)
  replServer.context["$r"] = $r
  replServer.context["cb"] = cb
}


//example
// Product.first(cb)
// $r will contain the values of callback
