'use strict';
var express = require('express');
const path = require('path');

var app = express();
var port = process.env.PORT || 8080;

app.get('/',function(req,res){
	var ip = req.headers['x-forwarded-for'];
	var lang = req.headers['accept-language'].split(',')[0];
	var software= req.headers['user-agent'].split(') ')[0].split(' (')[1];
	
	res.json({ip:ip,lang:lang,software:software});
});

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});