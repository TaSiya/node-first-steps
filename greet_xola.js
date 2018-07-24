const figlet = require('figlet');

const chalk = require('chalk');

const greeting = require('./greet');

const styledMessage = greeting('S');

figlet.text(styledMessage,{
	font : 'Ghost',
	horizontalLayout : 'default',
	verticallayout : 'default'
	},
	function (err, data){
		if(err){
			console.log('Something went wrong...');
			console.dir(err);
			return;
		}
		console.log(data);
	});
