module.exports = {
  name: "para-ekle",

  code: `

$color[RANDOM]
$onlyForIDs[$botOwnerID; <@$authorID>, Bu Komut $userTag[$botOwnerID]'a Özeldir.]
$author[$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
$description[

** <a:emoji_45:927001644971995166> | Geliştiricim Bir Kişiye Para Ekledi **
--------------------------------------------
** <a:emoji_45:927001644971995166> | Eklenen Miktar ** : [$noMentionMessage]($getBotInvite[admin])
--------------------------------------------
** <a:emoji_45:927001644971995166> | Para Ekleyen Geliştirici** : [$userTag[$botOwnerID]](https://discord.com/users/$botOwnerID)
--------------------------------------------
** <a:emoji_45:927001644971995166> | Para Eklenen Kişi** : [$userTag[$mentioned[1]]](https://discord.com/users/$mentioned[1])
]

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$footer[$addTimestamp]

`
};
