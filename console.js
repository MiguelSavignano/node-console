var repl     = require("repl");
var utils    = require("./utils");
var config   = require('./config')
var mongoose = require('mongoose')

mongoose.connect(config.mongo_uri);
console.log(config.mongo_uri)

var replServer = repl.start({
  prompt: "node > "
});

utils.loadAllModels(replServer, {folder:"models"})
replServer.context._ = require("lodash");

// SuperCallback save the arguments in global variabe to know the results of mongoose querys

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

//example
// Developer.first(cb)
