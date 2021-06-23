const Command = {
	type:
	"command",
	name:
	"claim",
	code:
	`
	<@$authorID>
	$title[◇ Vote | Success]
	$description[Thank you for voting TuberCord!]
	$addField[◇ Reward;●  +1000 Coins]
	$color[BLUE]
	
	$globalCooldown[12h;<@$authorID>{title:◇ Vote | Error}{description:You can only claim your vote reward every 12 hours!}{footer:Time Remaining#COLON# %time%}{color:RED}]
	
	$onlyIf[$httpRequest[https://normal-api.ml/topgg/hasvoted?bot=794016838648070197&user=$authorID&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5NDAxNjgzODY0ODA3MDE5NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI0Mzk4NjQ0fQ.X__fPd28Muo-Dii8qtw0_2jXv-GA6CmeDxsV-VFpp4Y;get;;voted]==true;<@$authorID>{title:◇ Vote | Error}{description:You must first [Vote TuberCord](https://top.gg/bot/794016838648070197/) on [Top.gg](https://top.gg) in order to claim your reward!}{color:RED}]
	`,
}

module.exports = Command;