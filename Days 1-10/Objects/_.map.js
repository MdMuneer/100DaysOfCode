//an array of broken weapons using _.map

const _ = require("lodash"); 
const weapons =['candlestick', 'knife', 'gun'];

const makeBroken = function(item) {
	return `broken $(item)`;
	
};

const brokenWeapons =  _.map(weapons, makeBroken);

brokenWeapons;
