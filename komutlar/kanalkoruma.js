module.exports = {
name:"kanal-koruma",
code:`
$if[$message[1]==aç]
✅ Kanal koruma logu <#$mentionedChannels[1]> olarak ayarlandı
$setServerVar[kklog;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;⚠️ Bir kanal etiketle]
$onlyIf[$getServerVar[kklog]==;⚠️ Rol koruma zaten ayarlanmış]
$endif
$if[$message[1]==kapat]
✅ Rol koruma kapatıldı
$setServerVar[kklog;]
$onlyIf[$getServerVar[kklog]!=;⚠️ Rol koruma zaten ayarlanmamış]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;⚠️ **aç** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]
`
}        
/komutlar/kanalkoruma.js