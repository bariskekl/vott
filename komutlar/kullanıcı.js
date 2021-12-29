module.exports = {
  name: "kullanıcı",

  aliases: "kullanıcı",

  code: `

$color[RANDOM]

$description[

__Kullanıcı Menüsü__

» | \`?id-sorgu\` → ID Sorgularsınız.

» | \`?davetal\` → ID Girdiğiniz Botun Davetini Alır.

» | \`?istatistik\` → Botun İstatistiklerini Gösterir.

» | \`?avatar\` → Etiketlediğiniz Kişinin Avatarını Gösterir.

» | \`?user\` → Sunucuya Ve Discorda Katılma Tarihine Bakarsınız.

» | \`?kullanıcı-bilgi\` → Kullanıcının Bilgilerine Görüntülersiniz.

» | \`?sunucu-bilgi\` → Sunuc Bilgilerini Görüntülersiniz.

» | \`?yetkilerim\` → Sunucuda Olan Yetkilerinize Bakarsınız.

» | \`?bug-bildir\` → Botta Olan Bir Bug'u Bildirirsiniz.

]

$thumbnail[$authorAvatar]

$footer[Bu Komut,$username Tarafından Kullanıldı $addTimesTamp]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`
};
