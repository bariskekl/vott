module.exports = {
name:"bot-koruma",
code:`
$if[$message[1]==aç]
<:emoji_70:917309183341236244> | Bot koruma açıldı sunucuya bot eklenemiycek
$setServerVar[atlog;$mentionedChannels[1]]
$setServerVar[antiraid;açık]
$onlyIf[$mentionedChannels[1]!=;<:emoji_71:917309220687314966> | Bir kanal etiketle]
$onlyIf[$getServerVar[antiraid]==kapalı;<:emoji_71:917309220687314966> | Bot koruma zaten açılmış]
$endif
$if[$message[1]==kapat]
<:emoji_70:917309183341236244> | Bot Koruma kapatıldı
$setServerVar[atlog;]
$setServerVar[antiraid;kapalı]
$onlyIf[$getServerVar[antiraid]==açık;<:emoji_71:917309220687314966> | Bot koruma zaten kapalı]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;<:emoji_71:917309220687314966> | **aç** veya **kapat** argumanlarını girin]
$onlyPerms[admin;<:emoji_71:917309220687314966> | Bunun için \`YÖNETİCİ\` iznin olmalı]
`
}   
