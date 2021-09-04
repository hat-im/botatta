const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS,8]});

client.once('ready', c => {
	console.log("oowwee im up");
});

client.on("messageCreate", function(message){
    console.log(`message is created -> ${message}`);
});

client.login(token);