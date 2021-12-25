module.exports = {

  name: "ban",

  code: `

$author[$userTag[$mentioned[1]] Sunucudan Banlandı;$userAvatar[$mentioned[1]]]

$description[Sebebi : $replaceText[**$noMentionMessage;**;;-1]]

$ban[$mentioned[1];$noMentionMessage;1]

$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];⚠️ | Rolünden Üstte Birini Banlamazsın]

$onlyBotPerms[ban;⚠️ | Bunun İçin Botun  \`Üyeleri Yasakla\` İzni Olmalı]

$onlyIf[$mentioned[1]!=;✌️ | Kimi banlamalıyım bunu tüm gün düşünücem ^^]

$onlyPerms[ban;⚠️ | Bunun İçin \`Üyeleri Yasakla\` İznin Olmalı]

$suppressErrors[⚠️ | Rolümden Üstte Birini Banlayamam]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

