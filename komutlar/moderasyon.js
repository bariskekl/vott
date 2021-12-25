module.exports = {

  name: "moderasyon",

  aliases: "moderasyon",

  code: `

$color[RANDOM]

$description[

__Moderasyon Menüsü__

» | \`?nuke\` → Kanalı Nuke lersiniz.

» | \`?tavsiye-log\` → Tavsiye Log Ayarlarsınız.

» | \`?tavsiye\` → Tavsiye Verirsiniz.

» | \`?hgbb\` → Hgbb Sistemini Ayarlarsınız.

» | \`?sil\` → Belirtilen Miktarda Mesaj Silersiniz.

» | \`?ban\` → Etiketlediğiniz Kişiyi Banlarsınız.

» | \`?unban\` → ID sini Girdiğiniz Kişinin Banını Açar.

» | \`?mute\` → Etiketlediğiniz Kişiye Mute Atat.

» | \`?mute-rol\` → Mute Rol Ayarlarsınız.

» | \`?unmute\` → Etiketlediğiniz Kişinin Mutesini Açarsınız.

» | \`?saas-aç\` → Saas Sistemini Açarsınız.

» | \`?saas-kapat\` → Saas Sistemini Kapatırsınız.

]

$thumbnail[$authorAvatar]

$footer[Komut,$username Tarafından Kullanıldı $addTimesTamp]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};