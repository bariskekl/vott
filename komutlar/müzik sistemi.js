module.exports = {

  name: "müzik-sistemi",

  aliases: "müzik-sistemi",

  code: `

$color[RANDOM]

$description[

__Müzik Menüsü__

» | \`$getServerVar[prefix]çal\` → Şarkı Açarsınız.

» | \`$getServerVar[prefix]durdur\` → Şarkıyı Durdurur.

» | \`$getServerVar[prefix]ses\` → Şarkı Sesini Ayarlarsınız.

]

$thumbnail[$authorAvatar]

$footer[Bu Komut,$username Tarafından Kullanıldı $addTimesTamp]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

