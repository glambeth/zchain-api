var zchain_api = require('./index.js').zchain();

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

var transactions = zchain_api.getTransactions('blockHeight','descending', 10, 0);
transactions.then(function(data) {
	console.log(data);
});

var transaction = zchain_api.getTransaction('f55c996c8ce87e78878e3718c2d2375f6f5f49a06a9d71de7408b7017d0354a5')
transaction.then(function(data) {
	console.log(data);
});

var accounts = zchain_api.getAccounts('descending', 10, 0)
accounts.then(function(data) {
	console.log(data);
});

var account = zchain_api.getAccount('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd');
account.then(function(data) {
	console.log(data);
});
