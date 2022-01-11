module.exports = {
  name: "moderasyon",

  aliases: "moderasyon",

  code: `

$color[RANDOM]
$author[$userTag[$clientID];$userAvatar[$clientID]]
$description[

__Moderasyon Menüsü__

» | \`?nuke\` → Kanalı Nuke lersiniz.
» | \`?tavsiye-log\` → Tavsiye Log Ayarlarsınız.
» | \`?tavsiye\` → Tavsiye Verirsiniz.
» | \`?hgbb\` → Hgbb Sistemini Ayarlarsınız.
» | \`?sil\` → Belirtilen Miktarda Mesaj Silersiniz.
» | \`?ban\` → Etiketlediğiniz Kişiyi Banlarsınız.
» | \`?unban\` → ID sini Girdiğiniz Kişinin Banını Açar.
» | \`?force-ban\` → ID sini Girdiğiniz Kişiyi Banlar.
» | \`?mute\` → Etiketlediğiniz Kişiye Mute Atat.
» | \`?mute-rol\` → Mute Rol Ayarlarsınız.
» | \`?unmute\` → Etiketlediğiniz Kişinin Mutesini Açarsınız.
» | \`?banlist\` → Sunucuda Banlı Olan Kişileri Gösterir.
» | \`?bancount\` → Sunucuda Banlı Olan Kişi Sayısını Gösterir.
» | \`?oylama\` → Sunucuda Oylama Yaparsınız.
» | \`?abone-rol\` → Abone Rolünü Ayarlarsınız.
» | \`?abone\` → Etiket Attığınız Kişiye Abone Verirsiniz.
» | \`?abone-yetkilisi\` → Abone Yetkilisini Ayarlarsınız.
» | \`?abone-log\` → Birisine Abone Rol Verince Log a Atar.
» | \`?spam-engel\` → Spam Yapanları Uyarır.
» | \`?küfür-engel\` → Küfür Edenleri Uyarır Ve Mesajını Siler.
» | \`?link-engel\` → Reklam Yapanları Uyarır Ve Mesajını Siler.

]


$footer[Komut,$username Tarafından Kullanıldı $addTimesTamp]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
