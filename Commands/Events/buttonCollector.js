const Command = [{
	type:
	"interactionCommand",
	name:
	"Minecraft",
	prototype:
	"button",
	code:
	`
	$interactionReply[;{author:$userTag:$authorAvatar:}{description:Started recording.}{color:763cfe};;0;4]
	`,
}, {
	type:
	"interactionCommand",
	name:
	"GTA",
	prototype:
	"button",
	code:
	`
	$interactionReply[;{author:$userTag:$authorAvatar:}{description:Started recording.}{color:763cfe};;0;4]
	`,
}]

module.exports = Command;