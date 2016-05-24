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
