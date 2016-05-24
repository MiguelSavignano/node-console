var mongo ={
	host:     "localhost" ,
	port:    "27017"  ,
	dbname:   "test",
	login:    "user"  ,
	password: "password"
}
var mongo_uri = ['mongodb://',mongo.host,':',mongo.port,'/', mongo.dbname].join('');
exports.mongo = mongo;
exports.mongo_uri =  mongo_uri
