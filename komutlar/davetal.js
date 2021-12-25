module.exports = {

  name: "davetal",

  aliases: "davetal",

  code: `

$argsCheck[>1;lütfen bir bot id si girin]

$onlyIf[$isBot[$message[1]]!=false; Bu Bir Bot Değil.]

$title[]

$description[

**__Adı__** : $username[$message[1]]

**__Tagı__** : $discriminator[$message[1]]

**__[0 Perms Davet](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=0)__** | **__[8 Perms Davet](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=8)__**

**__Bot Kuruluş Tarihi__**

**$creationDate[$message[1]]**

]

$thumbnail[$userAvatar[$message[1]]]

$color[RANDOM]  

$suppressErrors[]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

