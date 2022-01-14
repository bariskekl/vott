module.exports = {
  name: "para-gönder",

  aliases: "para-gönder",

  code: `

$onlyIf[$mentioned[1]!=$authorID;<:emoji_71:917309220687314966> | Kendine Para Yollayazsın]

$onlyIf[$noMentionMessage>1;<:emoji_71:917309220687314966> | Düzgün Para Miktarı Gir]

$argsCheck[2;<:emoji_71:917309220687314966> | Doğru Kullanım ?para-gönder @etiket Miktar]

$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$noMentionMessage];$authorID]

$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]

$description[

<:emoji_70:917309183341236244> | Başarıyla <@$mentioned[1]> Kişisine $noMentionMessage 💰 Yollandı.]

$color[RANDOM] 

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
