module.exports = {

  name: "para-ekle",

  aliases: "para-ekle",

  code: `

$color[RANDOM]

$onlyForIDs[754320168469135440;<:emoji_71:917309220687314966> | <@$authorID>, bu komut sahibime özeldir.]

$description[<:emoji_70:917309183341236244> | <@$message[1]> kullanıcının cüzdanına $message[2] 💵 eklendi.]

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$message[1]];$message[2]];$message[1]]  

$argsCheck[>1;<:emoji_71:917309220687314966> | <@$authorID>, ID yazmalısın.]

$argsCheck[>2;<:emoji_71:917309220687314966> | <@$authorID>, miktar yaz.]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`

};

