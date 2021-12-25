module.exports = {

  name: "unban",

  code: `

$unban[$message[1]]

$description[$userTag[$message[1]] adlı kullanıcının banı kaldırıldı]

$color[GREEN]

$onlyIf[$isNumber[$message[1]]==true;⚠️ | Bu bir kullanıcı id'sine benzemiyor]

$onlyIf[$message[1]!=;⚠️ | Bir kullanıcı id'si girmelisin]

$onlyBotPerms[ban;⚠️ | Ban yetkim yok]

$onlyPerms[ban;⚠️ | Bunun için yetkin yok]

$suppressErrors[⚠️ | Böyle bir üye zaten banlı değil]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`

};

