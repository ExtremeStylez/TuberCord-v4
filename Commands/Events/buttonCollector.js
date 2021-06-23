const Command = [{
	type:
	"interactionCommand",
	name:
	"Minecraft",
	prototype:
	"button",
  code:
	`
	$if[$getGlobalUserVar[recordedMinecraft]==false]
	
	$setGlobalUserVar[recordedMinecraft;true]
	
	$wait[1s]
	
	$interactionEdit[<@$authorID>;{title:◇ Record | Minecraft}{description:Recording has finished!}{footer:Use $getServerVar[prefix]edit!}{color:#689f73}]
	
	$wait[3s]
	
	$interactionEdit[<@$authorID>;{title:◇ Record | Minecraft}{description:Recording...}{color:#88c2f8}]
	
	$wait[3s]
	
	$interactionEdit[<@$authorID>;{title:◇ Record | Minecraft}{description:Recording..}{color:#83c628}]
	
	$wait[3s]
	
	$interactionEdit[<@$authorID>;{title:◇ Record | Minecraft}{description:Recording.}{color:#8378f8}]
	
	$wait[3s]
	
	$interactionReply[<@$authorID>;{title:◇ Record | Minecraft}{description:Recording started!}{color:763cfe};;0;4]
	
	$else
	
	$interactionReply[<@$authorID>;{title:◇ Record | Minecraft | Error}{description:You can only record upto one minecraft video!}{color:763cfe};;0;4]
	
	$endif
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
	$interactionReply[<@$authorID>;{title:◇ Record | GTA}{description:Recording has started!}{color:763cfe};;0;4]
	`,
}]

module.exports = Command;
