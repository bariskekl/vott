module.exports = {

  name: "cf",

  aliases: "cf",

  code: `

$if[$replaceText[$replaceText[$randomText[1;2];1;1;100];2;2;100]==1]

<a:darkcoincf:899365400796602419> Para Dönüyor...

$editIn[3s;:coin: Kazandın! $message[1] Adet Para Hesabına Yatırılıyor.]

$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$message[1]];$authorID]

$else

<a:darkcoincf:899365400796602419> Para Dönüyor...

$editIn[3s;<:dcoin:899365278780096524>  Kaybettin! $message[1] Adet Para Hesabından Çekiliyor.]

$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$message[1]];$authorID]

$endif

$onlyIf[$isNumber[$message[1]]!=false;<:emoji_71:917309220687314966> | Bir Sayı Gir!]

$argsCheck[>1;<:emoji_71:917309220687314966> | Bir Sayı Gir!]

$onlyIf[$message[1]<=$getGlobalUserVar[para;$authorID];<:emoji_71:917309220687314966> | Cüzdanında Bu Kadar Para Yok!]

$onlyIf[$noMentionMessage>=0;<:emoji_71:917309220687314966> | Sayıyı düzgün yaz.]

$cooldown[30s;<:emoji_71:917309220687314966> | Hey Dostum Biraz Yavaş %time% Dinlenmeye İhtiyacın] 

$onlyIf[$message[1]<50001;<:emoji_71:917309220687314966> | 50.000'den Fazla Giremezsin]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\`  sebebinden karalistedesiniz.] 

`

};

