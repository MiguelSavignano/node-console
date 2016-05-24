var repl = require("repl");
var utils = require("./utils");
var config     = require('./config')

var replServer = repl.start({
  prompt: "node > "
});

utils.loadAllModels(replServer, {folder:"models"})
replServer.context._ = require("lodash");
