const _ = require("lodash"); 

var rooms =['living','ballroom','library'];
var logger = function(val){
	console.log(val);
};
_.each(rooms, logger);