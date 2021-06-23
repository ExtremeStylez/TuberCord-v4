const Command = {
	type:
	  "command",
	name:
	  "help",
	code:
	  `
	  $apiMessage[<@$authorID>;{title:◇ Help | Modules}{description:To view the list of commands click one of the buttons below!}{field:◇ Gameplay:Use \`Gameplay\` button below!:false}{color:#f57c48};{actionRow:Gameplay,2,1,Gameplay};;no]
	  `,
}

module.exports = Command;