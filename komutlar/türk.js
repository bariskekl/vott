module.exports = {
  name: "türk",

  aliases: "türk",

  code: `

$color[RANDOM]
$author[$userTag[$authorID];$userAvatar[$authorID]]
$title[]

$description[🇹🇷・<@$authorID>  **__%$random[0;100]__** Türk]

$footer[$username Tarafından Kullanıldı $addTimestamp]

$addReactions[🇹🇷]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`,
};
