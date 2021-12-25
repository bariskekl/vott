module.exports = {

  name: "çek",


  code: `

$setGlobalUserVar[param;$sum[$getVar[param;$authorID];$message];$authorID]

$setGlobalUserVar[banka;$sub[$getGlobalUserVar[banka;$authorID];$message];$authorID]

$onlyIf[$message>0;<:emoji_71:917309220687314966> | Girdiğin Miktar 1 ve üstü olmalıdır.]

$onlyIf[$isNumber[$message]!=false;<:emoji_71:917309220687314966> | Lütfen herhangi bir sayı Gir.]

$argsCheck[>1;Çekeceğin Miktarı Yazmalısın!]

$onlyIf[$message<=$getGlobalUserVar[banka;$authorID];<:emoji_71:917309220687314966> | Bankanda Yeterli Miktarda Para Yok !]

<:emoji_70:917309183341236244> | <@$authorID> Başarıyla Bankanızdan $message 💵 Para Kadar Çektiniz.

$onlyIf[$noMentionMessage>=0;<:emoji_71:917309220687314966> | Sayıyı düzgün yaz.]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\`  sebebinden karalistedesiniz.] 

`

};

