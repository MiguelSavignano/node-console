var repl = require("repl");

var config     = require('./config')

var replServer = repl.start({
  prompt: "node > "
});

var Developer = require("./models/developer")

var normalizedPath = require("path").join(__dirname, "models");

require("fs").readdirSync(normalizedPath).forEach(function(file_name) {
  var name = file_name.replace('.js','')
  replServer.context[name] = require("./models/" + name);
});
