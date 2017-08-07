# zchain-api
💰 a node.js wrapper for the zchain api

[![npm version](https://badge.fury.io/js/zchain-api.svg)](https://badge.fury.io/js/zchain-api)
[![Build Status](https://travis-ci.org/glambeth/zchain-api.svg?branch=master)](https://travis-ci.org/glambeth/zchain-api)

A simple way to access the [Zchain api](https://explorer.zcha.in/api) using promises

## install
`npm install --save zchain-api`

## example
```javascript
var zchain_api = require('zchain-api').zchain();

var network = zchain_api.network()
network.then(function(data) {
	console.log(data);
});

var blocks = zchain_api.getBlocks('height', 'descending', 1, 0);
blocks.then(function(data) {
	console.log(data);
});
```
For more examples see examples.js 
