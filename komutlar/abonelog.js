module.exports = {
  name:'abone-log',
  code:`
  $if[$message[1]==ayarla]
$setServerVar[abonelog;$mentionedChannels[1]]
$author[Başarılı!]
$description[<:emoji_70:917309183341236244> | Abone log kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
$color[RANDOM]
$onlyIf[$mentionedChannels[1]!=;{description:<:emoji_71:917309220687314966> | Lütfen bir kanal etiketlediğinden emin ol.}{color:RANDOM}]
$onlyIf[$getServerVar[abonelog]==;{description:<:emoji_71:917309220687314966> | Abone log kanalı zaten ayarlanmış.}{color:RANDOM}]
$endif
$if[$message[1]==sıfırla]
$resetServerVar[abonelog]
$author[Başarılı!]
$description[<:emoji_70:917309183341236244> | Abone log kanalı sıfırlandı.]
$color[RANDOM]
$onlyIf[$getServerVar[abonelog]!=;{description:<:emoji_71:917309220687314966> | Abone log kanalı zaten ayarlanmamış.}{color:RANDOM}]
$endif
$onlyIf[$checkContains[$toLowercase[$message];ayarla;sıfırla]==true;{color:RANDOM}{description:Lütfen \`ayarla\` veya \`sıfırla\` seçeneklerinden birini seçin.}]
$onlyPerms[admin;{description:<:emoji_71:917309220687314966> | Bu komutu kullanmak için \`YÖNETİCİ\` iznine sahip olmalısın.}{color:RANDOM}]
`} 
