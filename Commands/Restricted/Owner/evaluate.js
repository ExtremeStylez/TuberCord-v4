const Command = {
	type:
	"command",
	name:
	"eval",
	code:
	`
	$deletecommand
	
	$eval[$message]
	
	$onlyIf[$authorID==$botOwnerID;]
	`,
}

module.exports = Command;