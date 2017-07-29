var restify = require('restify-clients');
var querystring = require('querystring');

const url = 'https://api.zcha.in/v2/mainnet';

module.exports = function() {

	var client = restify.createJsonClient({
		url: url,
		version: '*'
	});

	function getRequest(query) {
		var p = new Promise(function(resolve, reject) {
			client.get(url + query, function(err, req, res, data) {
				if (err) {
					return reject(err);
				}
				resolve(data);
			});
		});
		return p; 
	}

	return {
		network: function() {
			var query ='/network';
			return getRequest(query);
		},

		getBlocks: function(sort, direction, limit, offset) {
			var query = '/blocks?' + querystring.stringify({
				sort, direction, limit, offset}
			);
			return getRequest(query);
		},

		getBlock: function(hash) {
			var query = '/blocks/' + hash;
			return getRequest(query);
		},

		getTransactions: function(sort, direction, limit, offset) {
			var query = '/transactions?' + querystring.stringify({
				sort, direction, limit, offset
			});
			return getRequest(query);
		},

		getTransaction: function(hash) {
			var query = '/transactions/' + hash;
			return getRequest(query);
		},

		getAccounts: function(direction, limit, offset) {
			var query = '/accounts?' + querystring.stringify({
				direction, limit, offset
			});
			return getRequest(query);
		},

		getAccount: function(address) {
			var query = '/accounts/' + address;
			return getRequest(query);
		},

		getReceived: function(address) {

		},

		getSent: function(address) {
			
		}
	}
};
