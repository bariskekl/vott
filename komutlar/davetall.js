module.exports = {

  name: "davetal",

  aliases: "davetal",

  code: `

$argsCheck[>1;lütfen bir bot etiketleyin]

$onlyIf[$isBot[$mentioned[1]]!=false; Bu Bir Bot Değil.]

$title[]

$description[

**__Adı__** : $username[$mentioned[1]]

**__Tagı__** : $discriminator[$mentioned[1]]

**__[0 Perms Davet](https://discord.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=0)__** | **__[8 Perms Davet](https://discord.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=8)__**

**__Bot Kuruluş Tarihi__**

**$creationDate[$mentioned[1]]**

]

$thumbnail[$userAvatar[$mentioned[1]]]

$color[RANDOM]  

$suppressErrors[]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

