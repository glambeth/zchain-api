var zchain_api = require('./index.js').zchain();

console.log(zchain_api);
var network = zchain_api.network()
network.then(function(data) {
	console.log(data);
});