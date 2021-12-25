module.exports = {

  name: "dilen",

  aliases: "dilen",

  code: `

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[80;200]];$authorID]

<@$authorID> Dilendin ve $random[80;200] 💵 kazandın.

$cooldown[5m; <@$authorID> %time% Beklemelisin Dilenmek İçin]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

