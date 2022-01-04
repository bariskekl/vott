module.exports = {
  name: "ban",
  code: `
$author[$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
$ban[$mentioned[1];$noMentionMessage]
$description[<:emoji_70:917309183341236244> | \`$userTag[$mentioned[1]]\` İsimli Kullanıcı \`$noMentionMessage\` Sebebi İle Banlandı ^^]
$color[RANDOM]
$footer[$addTimestamp]
$onlyPerms[ban;<:emoji_71:917309220687314966> | Bu Komutu Kullanamazsın Kullanmak İçin \`Üyeleri Banla\` Yetkin Olmalı ^^]
$onlyBotPerms[ban;<:emoji_71:917309220687314966> | Bu Komutu Kullanmak İçin Bana \`Üyeleri Banla\` Yetkisi Vermelisin ^^]
$suppressErrors
$argsCheck[>1;<:emoji_71:917309220687314966> | Banlayacağım Üyeyi Etiketlemelisin]
`
};
