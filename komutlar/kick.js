module.exports = {

  name: "kick",

  aliases: "kick",

  code: `
$kick[$mentioned[1];$noMentionMessage]
$color[RANDOM]
$description[
\`$userTag[$mentioned[1]] \` İsimli Kullanıcı \`$noMentionMessage\` Sebebinden Sunucudan Atıldı]
$onlyPerms[kick;{description:<:emoji_71:917309220687314966> | Bu Komutu Kullanmak İçin \`Üyeleri At\` İznin Olmalı}{color:RANDOM}
$onlyIf[$me
`

};

