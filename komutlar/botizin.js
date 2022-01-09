module.exports = {
name:"bot-izni-ver",
code:`
<:emoji_70:917309183341236244> | \`$userTag[$message[1]]\` ( \`$message[1]\` ) adlı bota izin verildi
$setServerVar[botizin;$message[1]]
$onlyIf[$isBot[$message[1]]==true;<:emoji_71:917309220687314966> | Bu bir bot id'sine benzemiyor]
$onlyIf[$isNumber[$message[1]]==true;<:emoji_71:917309220687314966> | Bu bir id'ye benzemiyor]
$onlyIf[$message[1]!=;<:emoji_71:917309220687314966> | Bot id'si girmelisin örn: \`!bot-izin-ver $clientID\`]
`
}   
