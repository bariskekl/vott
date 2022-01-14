module.exports = {

  name: "kazı-kazan",

  code: `

$color[RANDOM]

$title[💸・Kazı Kazan]

$description[💸・Kazı Kazan oynayarak $randomText[100;200;300;400;500] 💵 kazandın.]

$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$randomText[100;200;300;400;500]];$authorID]

$globalCooldown[10m;<:emoji_71:917309220687314966> | Bu Komutu Kullanmak İçin %time% Beklemelisin]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

