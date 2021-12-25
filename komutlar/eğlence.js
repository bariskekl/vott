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

]

$thumbnail[$authorAvatar]

$footer[Bu Komut,$username Tarafından Kullanıldı $addTimesTamp]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

