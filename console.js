var repl = require("repl");

var config     = require('./config')

var replServer = repl.start({
  prompt: "node > "
});

var Developer = require("./models/developer")

replServer.context.Developer = Developer;
