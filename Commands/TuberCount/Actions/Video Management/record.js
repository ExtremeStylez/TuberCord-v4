const Command = {
	type:
	  "command",
	name:
	  "record",
	code:
	  `
	  $apiMessage[<@$authorID>;{title:◇ Record | Game Selection}{description:\`Minecraft\`, \`GTA\`}{color:#f47cf8};{actionRow:Minecraft,2,1,Minecraft:GTA,2,1,GTA};;no]
	  `,
}

module.exports = Command;