var mongoose = require( 'mongoose' );
_            = require('lodash')

var ProductShema = new mongoose.Schema({
  name:  {type: String},
  price: {type: Number}
});

ProductShema.statics.first = function(callback) {
  Product.findOne(callback)
}
var Product = mongoose.model( 'Product', ProductShema );

module.exports = Product;
