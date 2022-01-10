module.exports = {
  name: "kick",
  code: `
$author[$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]
$kick[$mentioned[1];$noMentionMessage]
$color[RANDOM]
$description[
<:emoji_70:917309183341236244> | \`$userTag[$mentioned[1]] \` İsimli Kullanıcı \`$noMentionMessage\` Sebebinden Sunucudan Atıldı]
$onlyPerms[kick;{description:<:emoji_71:917309220687314966> | Bu Komutu Kullanmak İçin \`Üyeleri At\` İznin Olmalı}{color:RANDOM}
$argsCheck[>1;{description:<:emoji_71:917309220687314966> | Bir Üye Etiketlemelisin Dostum}{color:RANDOM}]
$footer[$addTimestamp]
`,
};
