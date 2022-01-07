module.exports = {
  name: "abone-rol",
  code: `
$if[$message[1]==ayarla]
$setServerVar[abonerol;$mentionedRoles[1]]
$author[Başarılı!]
$description[<:emoji_70:917309183341236244> | Abone rolü <@&$mentionedRoles[1]> olarak ayarlandı.]
$color[RANDOM]
$onlyIf[$mentionedRoles[1]!=;{description:<:emoji_71:917309220687314966> | Lütfen bir rol etiketlediğinden emin ol.}{color:RANDOM}]
$onlyIf[$getServerVar[abonerol]==;{description:<:emoji_71:917309220687314966> | Abone rolü zaten ayarlanmış.}{color:RANDOM}]
$endif
$if[$message[1]==sıfırla]
$resetServerVar[abonerol]
$author[Başarılı!]
$description[<:emoji_70:917309183341236244> | Abone rolü sıfırlandı.]
$color[RANDOM]
$onlyIf[$getServerVar[abonerol]!=;{description:<:emoji_71:917309220687314966> | Abone rolü zaten ayarlanmamış.}{color:RANDOM}]
$endif
$onlyIf[$checkContains[$toLowercase[$message];ayarla;sıfırla]==true;{color:RANDOM}{description:<:emoji_71:917309220687314966> | Lütfen \`ayarla\` veya \`sıfırla\` seçeneklerinden birini seçin.}]
$onlyPerms[admin;{description:<:emoji_71:917309220687314966> | Bu komutu kullanmak için \`Yönetici\` iznine sahip olmalısın.}{color:RANDOM}]
`,
};
