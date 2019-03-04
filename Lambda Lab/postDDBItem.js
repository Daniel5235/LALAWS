'use strict';
 
var AWS = require('aws-sdk'),
	uuid = require('uuid'),
	documentClient = new AWS.DynamoDB.DocumentClient(); // used to initiate the DOCClient API for AWS
 
additem = function(event, context, callback){
	var params = {
		Item : {
			"ID" : uuid.v1(),
			"userid" : event.userid, //these values are being passed from api gateway via the event object
			//todo: add an event key to include a data value.
			
			

			
			//"eventkey" : event.keyvalue,
		
		
		},
		TableName : process.env.TABLE_NAME // veriable set in lambda console 

	};
	documentClient.put(params, function(err, data){
		callback(err, data);
	});
}