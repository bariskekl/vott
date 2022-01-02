module.exports = {

  name: "eğlence",

  aliases: "eğlence",

  code: `

$color[RANDOM]

$description[

__Eğlence Menüsü__

» | \`?gay\` → Gay Ölçersiniz.

» | \`?aşk-ölçer\` → Etiketlediğiniz Kişiyle Aşk Ölçersiniz.

» | \`?25-miles\` → 25 Miles Yaparsınız.

» | \`?türk\` → Türk Ölçersiniz.

» | \`?sahte-mesaj\` → Etiketlediğiniz Kişiye Sahte Mesaj Yazdırırsınız.

» | \`?kaçcm\` →Aletinizi Ölçersiniz.

» | \`?wasted\` → Profilinize Wasted Efekti Verir.

» | \`?öp\` → Etiketlediğiniz Kişiyi Gifli Öper.

» | \`?yt-ara\` → Youtube da Arama Yaparsınız.

» | \`?trump\` → Trump Tweet Atar.

]

$thumbnail[$authorAvatar]

$footer[Bu Komut,$username Tarafından Kullanıldı $addTimesTamp]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

