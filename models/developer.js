var mongoose = require( 'mongoose' );
_            = require('lodash')

var DeveloperShema = new mongoose.Schema({
  name:  {type: String},
  github: {type: String},
  score: {type: Number}
});

// DeveloperShema.statics.best_developers = function(objects, callback) {
// }
var Developer = mongoose.model( 'Developer', DeveloperShema );

module.exports = Developer;
