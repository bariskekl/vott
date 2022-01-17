module.exports = {
  name: "moderasyon",

  aliases: "moderasyon",

  code: `

$color[RANDOM]

$description[

__Moderasyon Menüsü__

» | \`+nuke\` → Kanalı Nuke lersiniz.
» | \`+tavsiye-log\` → Tavsiye Log Ayarlarsınız.
» | \`+tavsiye\` → Tavsiye Verirsiniz.
» | \`+hgbb\` → Hgbb Sistemini Ayarlarsınız.
» | \`+sil\` → Belirtilen Miktarda Mesaj Silersiniz.
» | \`+ban\` → Etiketlediğiniz Kişiyi Banlarsınız.
» | \`+unban\` → ID sini Girdiğiniz Kişinin Banını Açar.
» | \`+mute\` → Etiketlediğiniz Kişiye Mute Atat.
» | \`+mute-rol\` → Mute Rol Ayarlarsınız.
» | \`+unmute\` → Etiketlediğiniz Kişinin Mutesini Açarsınız.
» | \`+banlist\` → Sunucuda Banlı Olan Kişileri Gösterir.
» | \`+bancount\` → Sunucuda Banlı Olan Kişi Sayısını Gösterir.
» | \`+oylama\` → Sunucuda Oylama Yaparsınız.
» | \`+abone-rol\` → Abone Rolünü Ayarlarsınız.
» | \`+abone\` → Etiket Attığınız Kişiye Abone Verirsiniz.
» | \`+abone-yetkilisi\` → Abone Yetkilisini Ayarlarsınız.
» | \`+abone-log\` → Birisine Abone Rol Verince Log a Atar.
» | \`+force-ban\` → Force Ban İle IDsini Girdiğiniz Kişiyi Banlarsınız.

]

$thumbnail[$authorAvatar]

$footer[Komut,$username Tarafından Kullanıldı $addTimesTamp]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
