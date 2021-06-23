const Command = {
	type:
	"readyCommand",
	channel:
	"$randomChannel",
	code:
	`
	$log[Bot Named $userTag[$clientID] Is Online, And Ready to Recieve Commands!]
	`,
}

module.exports = Command;