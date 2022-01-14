module.exports = {

  name: "odun-kes",

  aliases: "odun-kes",

  code: `

$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[100;2500]];$authorID]

$description[

\`$random[1;50]\` Tane Odun Kestin Ve Bir Oduncu Sana Şu Parayı Verdi \`$random[100;2500]\` 💰 Kazandın]

$globalCooldown[10m;<:emoji_71:917309220687314966> | %time% Sonra Gel]

$color[RANDOM]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

