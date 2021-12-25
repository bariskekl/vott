module.exports = {

  name: "yatır",

  aliases: "yatır",

  code: `

$setGlobalUserVar[param;$sub[$getGlobalUserVar[param;$authorID];$message];$authorID]

$setGlobalUserVar[banka;$sum[$getGlobalUserVar[banka;$authorID];$message];$authorID]

$onlyIf[$message>0;<:emoji_71:917309220687314966> | Girdiğin Miktar 1 ve üstü olmalıdır.]

$onlyIf[$isNumber[$message]!=false;<:emoji_71:917309220687314966> | Lütfen Sayı Gir.]

$argsCheck[>1;<:emoji_71:917309220687314966> | Yatıracağın Miktarı Yazarmısın]

$onlyIf[$message<=$getGlobalUserVar[param;$authorID];Cebinde Para Yok]

<:emoji_70:917309183341236244> | <@$authorID> Başarıyla Bankanıza $message 💵 Para Yatırdınız

$onlyIf[$noMentionMessage>=0;<:emoji_71:917309220687314966> | Sayıyı düzgün yaz.]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`

};

