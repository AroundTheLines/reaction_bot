var express = require('express');
var request = require('request');
var RtmClient = require('@slack/client').RtmClient;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var router = express.Router();

var slackToken = process.env.SLACK_API_TOKEN || '';

var rtm = new RtmClient(slackToken, {logLevel: 'debug'});
rtm.start();

var nameFor = 'michael';
var nameId = '';
var emoji = 'shio';

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
	for (var j = 0; j < rtmStartData.users.length; j++){
		console.log(rtmStartData.users[j].name + " " + rtmStartData.users[j].id);
		if(rtmStartData.users[j].name === nameFor){
			nameId = rtmStartData.users[j].id;
		}
	}
	
});

rtm.on(RTM_EVENTS.MESSAGE, function (message) {
  console.log("The message is: " + message.text);
  if(message.user === nameId){
  	request.get('https://slack.com/api/reactions.add?token=' + slackToken + '&name=' + emoji + '&channel=' + message.channel + '&timestamp=' + message.ts)
  	.on('response', function(response){
  		console.log(response.headers);
  	});
  }
  // request.get('https://slack.com/api/reactions.add?token=' + slackToken + '&name=shio&channel=' + message.channel + '&timestamp=' + message.ts)
  // 	.on('response', function(response){
  // 		console.log(response.headers);
  // 	});
});

module.exports = router; 