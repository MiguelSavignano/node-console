# Node console

node console to simulate the rails console, this project it's you like the rails console. let's play with javascritp in the console!!.

```sh
$ node console.js
```
Any module in the folder models it's accesible in the node console the variable name it's the file name capitalize.
To add more modules, models or json data

```javascript
replServer.context._ = require("lodash");
replServer.context.Product = require("./models/product");
replServer.context.json_data = require("data.json");
```
You can use any node functon and yours models methods;
```sh
node >  [1,2,3].map( (n) => n*2 )
node >  _.flatten([1, [2, [3, [4]], 5]]);
```

utils.loadSuperCallBack(replServer) set $r and cb in the node console, for help save the results of callbacks in the object $r, example using it

```sh
node >  Product.findOne(cb)
node > $r
{ data:
   { '0': null,
     '1':
      { __v: 0,
        price: 380,
        name: 'nexus 5',
        _id: 5744fc6ff5ce6be016c1f2f6 } },
  results: [Function],
  error: [Function] }
```
