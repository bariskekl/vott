module.exports = {
  name: "ban",
  code: `
  $dm[$mentioned[1]]
$author[$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
$ban[$mentioned[1];$noMentionMessage]
$description[\`$userTag[$mentioned[1]]\`  İsimli Kullanıcı \`$noMentionMessage\` Sebebi İle Banlandı]
$color[RANDOM]
$footer[$addTimestamp]
$onlyPerms[ban;<:emoji_71:917309220687314966> | Bu Komutu Kullanamazsın Bunu Kullanmak İçin \`Üyeleri Banla\` Yetkin Olmalı]
`
};
