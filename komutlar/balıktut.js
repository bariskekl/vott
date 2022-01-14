module.exports = {
  name: "balık-tut",

  aliases: "balık-tut",

  code: `

$color[RANDOM]

$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[120;210]];$authorID]

$description[<@$authorID> 🐬 Balık tuttun ve $random[120;210] 💵 kazandın.]

$footer[$username Adlı Kullanıcı Kullandı $addTimestamp]

$cooldown[1m;<:emoji_71:917309220687314966> | %time% Sonra Tekrar Kullana Bilirsin]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 


`
};
