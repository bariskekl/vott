module.exports = {
name:"küfür-engel",
code:`
$if[$message[1]==aç]
<:emoji_70:917309183341236244> | Küfür engel açıldı!
$setServerVar[kengel;açık]
$endif
$if[$message[1]==kapat]
<:emoji_70:917309183341236244> | Küfür engel kapatıldı!
$setServerVar[kengel;kapalı]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;<:emoji_71:917309220687314966> | **aç** veya **kapat** argumanlarını kullanın!]
$onlyPerms[admin;<:emoji_71:917309220687314966> | Bunun için yetkin yok!]
`
}  