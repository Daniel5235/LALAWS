'use strict';
 
var AWS = require('aws-sdk'),
	uuid = require('uuid'),
	documentClient = new AWS.DynamoDB.DocumentClient(); // used to initiate the DOCClient API for AWS
 
exports.additem = function(event, context, callback){
	var params = {
		Item : {
			"ID" : uuid.v1(),
			"userid" : event.userid, //these values are being passed from api gateway via the event object
			"eventkey" : event.keyvalue,
			"eventkey2" : event.keyvalue,
			"eventkey3" : event.keyvalue,
			"eventkey4" : event.keyvalue,
			"eventkey5" : event.keyvalue
		},
		TableName : process.env.TABLE_NAME // veriable set in lambda console 

	};
	documentClient.put(params, function(err, data){
		callback(err, data);
	});
}