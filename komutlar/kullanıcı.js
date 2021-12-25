module.exports = {

  name: "kullanıcı",

  aliases: "kullanıcı",

  code: `

$color[RANDOM]

$description[

__Kullanıcı Menüsü__

» | \`?id-sorgu\` → ID Sorgularsınız.

» | \`?davetal\` → ID Girdiğiniz Botun Davetini Alır.

» | \`?i\` → Botun İstatistiklerini Gösterir.

» | \`?avatar\` → Etiketlediğiniz Kişinin Avatarını Gösterir.

» | \`?user\` → Sunucuya Ve Discorda Katılma Tarihine Bakarsınız.

]

$thumbnail[$authorAvatar]

$footer[Bu Komut,$username Tarafından Kullanıldı $addTimesTamp]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

