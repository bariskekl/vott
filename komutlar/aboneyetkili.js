module.exports = {
  name:'abone-yetkilisi',
  code:`
  $if[$message[1]==ayarla]
  $setServerVar[aboneyt;$mentionedRoles[1]]
  $author[Başarılı!]
  $description[
  <:emoji_70:917309183341236244> | Abone yetkilisi <@&$mentionedRoles[1]> olarak ayarlandı.]
  $color[RANDOM]
  $addTimestamp
  $onlyIf[$mentionedRoles[1]!=;{color:RANDOM}{description:<:emoji_71:917309220687314966> | Lütfen bir rol etiketlediğinden emin ol.}]
  $onlyIf[$getServerVar[aboneyt]==;{description:<:emoji_71:917309220687314966> | Kayıt yetkilisi zaten ayarlanmış.}{color:RANDOM}]
  $endif
  $if[$message[1]==sıfırla]
  $resetServerVar[aboneyt]
  $author[Başarılı!]
  $description[<:emoji_71:917309220687314966> | $userTag[$authorID] Abone yetkilisi sıfırlandı.]
  $color[RANDOM]
  $addTimestamp
  $onlyIf[$getServerVar[aboneyt]!=;{description:<:emoji_71:917309220687314966> | Abone yetkilisi zaten ayarlanmamış.}{color:RANDOM}]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message];ayarla;sıfırla]==true;{color:RANDOM}{description:Lütfen \`ayarla\` veya \`sıfırla\` seçeneklerinden birini seçin.}]
  $onlyPerms[admin;{color:RANDOM}{description:<:emoji_71:917309220687314966> | Bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekmekte.}]
  $onlyIf[$getServerVar[ksistemi]==açık;{description:<:emoji_71:917309220687314966> | Bu komutu kullanmak için önce kayıt sistemini açmalısın.}{color:RANDOM}]
  `
} 
