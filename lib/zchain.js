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
			console.log(url + query);
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
			console.log(query);
			return getRequest(query);
		},
	}
};
