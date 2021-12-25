module.exports = {

  name: "avatar",

  aliases: "avatar",

  code: `

$if[$message[1]!=$mentioned[1]]

$image[$userAvatar[$mentioned[1]]

$else

$image[$authorAvatar]

$endif

$color[RANDOM]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

