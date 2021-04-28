//an array of broken weapons using _.map

const _ = require("lodash"); 
nst weapons =['candlestick', 'knife', 'gun'];

const makeBroken = function(item) {
	retunr `broken $(item)`;
	
};

const brokenWeapons =  _.map(weapons, makeBroken);

brokenWeapons;
