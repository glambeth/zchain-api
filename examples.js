var zchain_api = require('./index.js').zchain();

console.log(zchain_api);
var network = zchain_api.network()
network.then(function(data) {
	console.log(data);
});

var blocks = zchain_api.getBlocks('height', 'descending', 1, 0);
blocks.then(function(data) {
	console.log(data);
});

var block = zchain_api.getBlock('00000003f30fb89e7a3ecd5db79acf1083ec97668b32b5a65efb2db8e09f1716');
block.then(function(data) {
	console.log(data);
});

