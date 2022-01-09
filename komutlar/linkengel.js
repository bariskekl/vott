module.exports = {
name:"link-engel",
code:`
$if[$message[1]==aç]
Link engel açıldı!
$setServerVar[lengel;açık]
$endif
$if[$message[1]==kapat]
Link engel kapatıldı!
$setServerVar[lengel;kapalı]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;**aç** veya **kapat** argumanlarını kullanın!]
$onlyPerms[admin;<:emoji_71:917309220687314966> | Bunun için yetkin yok!]
`
} 
