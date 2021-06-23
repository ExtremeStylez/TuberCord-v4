const Command = [{
	type:
	"interactionCommand",
	name:
	"Minecraft",
	prototype:
	"button",
        code:
	`
	$interactionReply[<@$authorID>;{title:◇ Record | Minecraft:}{description:Recording has started!}{color:763cfe};;0;4]
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
	$interactionReply[<@$authorID>;{title:◇ Record | GTA:}{description:Recording has started!}{color:763cfe};;0;4]
	`,
}]

module.exports = Command;
