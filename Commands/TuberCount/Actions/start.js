const Command = {
	type:
	"command",
	name:
	"start",
	code:
	`
	$setVar[tubersCount;$math[$getVar[tubersCount]+1]]
	$setGlobalUserVar[tuberCount;true]
	
  <@$authorID>
  $title[◇ Begin | Success]
	$description[Created a tuber account for $username!]
	$color[GREEN]
	
	$onlyIf[$getGlobalUserVar[tuberCount]==false;<@$authorID>{title:◇ Begin | Error}{description:You already have a tuber account!}{color:RED}]
	`,
}

module.exports = Command;