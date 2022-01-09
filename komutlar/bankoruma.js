module.exports = {
name:"ban-koruma",
code:`
$if[$message[1]==aç]
<:emoji_70:917309183341236244> Ban koruma logu <#$mentionedChannels[1]> olarak ayarlandı
$setServerVar[bklog;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;<:emoji_71:917309220687314966> | Bir kanal etiketle]
$onlyIf[$getServerVar[bklog]==;<:emoji_71:917309220687314966> | Ban koruma zaten ayarlanmış]
$endif
$if[$message[1]==kapat]
<:emoji_70:917309183341236244> | Ban koruma kapatıldı
$setServerVar[bklog;]
$onlyIf[$getServerVar[bklog]!=;<:emoji_71:917309220687314966> | Ban koruma zaten ayarlanmamış]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;<:emoji_71:917309220687314966> | **aç** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;<:emoji_71:917309220687314966> | Bunun için **Yönetici** iznin olmalı]
`
}      
