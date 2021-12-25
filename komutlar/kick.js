module.exports = {

  name: "kick",

  aliases: "kick",

  code: `

$author[$userTag[$mentioned[1]] Sunucudan Atıldı;$userAvatar[$mentioned[1]]]

$description[Sebebi: $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1]]

$kick[$mentioned[1]]

$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];⚠️・|️ Rolünden Üstte Birini Atamazsın]

$onlyBotPerms[kick;⚠️・| Bunun İçin Botun \`Üyeleri At\` İzni Olmalı]

$onlyIf[$mentioned[1]!=;✌️・| Kimi kicklemeliyim bunu tüm gün düşünücem ^^]

$onlyPerms[kick;⚠️・| Bunun İçin \`Üyeleri At\` İznin Olmalı]

$suppressErrors[⚠️・| Rolümden Üstte Birini Kickleyemem]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

