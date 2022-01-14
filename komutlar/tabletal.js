module.exports = {
  name: "tablet-al",

  aliases: "tablet-al",

  code: `

$color[RANDOM]

$title[✅・Satın Aldın]

$description[✅・Satın alma işlemi başarılı.]

$onlyIf[$getGlobalUserVar[para;$authorID]>7000; <@$authorID>, cüzdanın da yeterli miktarda para yok.]

$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];7000];$authorID] 

$setGlobalUserVar[tablet;$sum[$getGlobalUserVar[tablet;$authorID];1];$authorID]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`
};
