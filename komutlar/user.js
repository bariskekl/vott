module.exports = {
  name: "user",

  aliases: "user",

  code: `

$color[RANDOM]

$title[$username'nin Bilgileri]

$description[

**⭐・Sunucuya Giriş Tarihi**

\`$memberJoinedDate[$authorID]\`

**💎・Discorda Katılma Tarihi**

\`$creationDate[$authorID]\`

]

$footer[$username Tarafından Kullanıldı $addTimestamp]

$thumbnail[$authorAvatar]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 


`
};
