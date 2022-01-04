module.exports = {
  name: "unban",

  code: `
$author[$userTag[$message[1];$userAvatar[$message[1]]]]
$color[RANDOM]
$unban[$message[1]]
$description[<:emoji_70:917309183341236244> | \`$userTag[$message[1]]\` İsimli Kullanıcın Banı Başarıyla Kaldırıldı]
$footer[$addTimestamp]
$onlyPerms[ban;<:emoji_71:917309220687314966> | Bu Komutu Kullanamazsın Kullanmak İçin \`Üyeleri Banla\` Yetkin Olmalı]
$onlyBotPerms[ban;<:emoji_71:917309220687314966> | Bu Komutu Kullanmam İçin \`Üyeleri Banla\` Yetkim Olmalı]
$suppressErrors
$argsCheck[>1;<:emoji_71:917309220687314966> | Bir Kullanıcı ID'si Girmelisin]
`
};
