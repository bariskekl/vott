module.exports = {

  name: "telefon-al",

  aliases: "telefon-al",

  code: `

$color[RANDOM]

$title[✅・Satın Aldın]

$description[✅・Satın alma işlemi başarılı.]

$onlyIf[$getGlobalUserVar[para;$authorID]>5000; <@$authorID>, cüzdanın da yeterli miktarda para yok.]

$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];5000];$authorID] 

$setGlobalUserVar[telefon;$sum[$getGlobalUserVar[telefon;$authorID];1];$authorID]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`

};

