module.exports = {

  name: "bilgisiyar-al",

  aliases: "bilgisiyar-al",

  code: `

$color[RANDOM]

$title[✅・Satın Aldın]

$description[✅・Satın alma işlemi başarılı.]

$onlyIf[$getGlobalUserVar[para;$authorID]>10000; <@$authorID>, cüzdanın da yeterli miktarda para yok.]

$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];10000];$authorID] 

$setGlobalUserVar[bilgisiyar;$sum[$getGlobalUserVar[bilgisiyar;$authorID];1];$authorID]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

