module.exports = {

  name: "oy",

  aliases: "oy",

  code: `

$title[**Oy Verme İşlemi**]

$description[$thumbnail[https://images-ext-1.discordapp.net/external/P9I6hSyslpu5b6527KeVnTW98zDYOLhYeCjqnZ1AsWQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/886896015431593985/b356293cd67ca0ebd50657b2828e9273.webp]

<@$authorID>**, 1 Oy Verdiniz Ve Ödülleriniz | $random[250;750] 💴 Kazandınız**

**Verdiğin Toplam Oy |** $getGlobalUserVar[oy]

]

$color[RANDOM]

$setGlobalUserVar[oy;$sum[$getGlobalUserVar[oy;$authorID];1];$authorID]

$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[250;750]];$authorID]

$cooldown[1h;<:emoji_71:917309220687314966> | <@$authorID>,Sadece 1 Saatte Bir Oy Verebilirsin | **__%time%__**]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

