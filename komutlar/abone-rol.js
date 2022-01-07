module.exports = {
  name:'abone-rol',
  code:`
$if[$message[1]==ayarla]
$setServerVar[abonerol;$mentionedRoles[1]]
$author[Başarılı!]
$description[Abone rolü <@&$mentionedRoles[1]> olarak ayarlandı.]
$color[RANDOM]
$onlyIf[$mentionedRoles[1]!=;{description:Lütfen bir rol etiketlediğinden emin ol.}{color:RANDOM}]
$onlyIf[$getServerVar[abonerol]==;{description:Abone rolü zaten ayarlanmış.}{color:RANDOM}]
$endif
$if[$message[1]==sıfırla]
$resetServerVar[abonerol]
$author[Başarılı!]
$description[Abone rolü sıfırlandı.]
$color[RANDOM]
$onlyIf[$getServerVar[abonerol]!=;{description:Abone rolü zaten ayarlanmamış.}{color:RANDOM}]
$endif
$onlyIf[$checkContains[$toLowercase[$message];ayarla;sıfırla]==true;{color:RANDOM}{description:Lütfen \`ayarla\` veya \`sıfırla\` seçeneklerinden birini seçin.}]
$onlyPerms[admin;{description:Bu komutu kullanmak için \`YÖNETİCİ\` iznine sahip olmalısın.}{color:RANDOM}]
`
} 
