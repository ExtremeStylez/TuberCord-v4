require('./server.js');

const aoijs = require('aoi.js');

const bot = new aoijs.Bot({
	token: process.env.CLIENT_TOKEN,
	prefix: ["$getServerVar[prefix]", "<@$clientID>"]
});

//status(es)
bot.status({
  text: "$serverCount Servers  ●  $allMembersCount Users  ●  $getVar[tubersCount] Tubers",
  type: "WATCHING",
  time: 12
})

//variables
bot.variables({
//serverManagement
	"prefix": "t!",
//globalVars
	"tubersCount": "0",
//userReq
	"tuberCount": "false",
//extras
	"tips": "Use \`<prefix>record\` to start!;If you join the main server, you will get a 25% boost on EXP",
})

//callbacks
bot.onMessage();
bot.onInteractionCreate();

//commandHandler
bot.loadCommands('./Commands/');