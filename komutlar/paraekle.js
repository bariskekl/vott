module.exports = {

name:"para-ekle",

code:`

$color[RANDOM]
$dm[$botOwnerID]
$onlyForIDs[$botOwnerID; <@$authorID>, bu komut sahibime özeldir.]
$author[$userAvatar[$mentioned[1]]]
$description[

** | Kurucum Bir Kişiye Para Ekledi **
--------------------------------------------
** | Eklenen Miktar ** : \`$noMentionMessage\`
--------------------------------------------
** | Para Ekleyen Developer** : <@$authorID>
--------------------------------------------
** | Para Eklenen Kişi** : <@$mentioned[1]>]

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$mentioned[1]];$noMentionMessage];$mentioned[1]]

` 
  }