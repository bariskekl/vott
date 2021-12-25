module.exports = {

  name: "sıralama",

  aliases: "sıralama",

  code: `

$color[RANDOM]

$title[💎・Para Sıralaması] 

$description[

\`$globalUserLeaderboard[param;asc]\` 

]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`

};

