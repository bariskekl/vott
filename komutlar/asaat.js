module.exports = {
  name: "asaat-al",

  aliases: "asaat-al",

  code: `

$color[RANDOM]

$title[✅・Satın Aldın]

$description[✅・Satın alma işlemi başarılı.]

$onlyIf[$getGlobalUserVar[para;$authorID]>10000; <@$authorID>, cüzdanın da yeterli miktarda para yok.]

$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];10000];$authorID] 

$setGlobalUserVar[asaat;$sum[$getGlobalUserVar[asaat;$authorID];1];$authorID]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`
};
