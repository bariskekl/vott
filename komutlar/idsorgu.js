module.exports = {

  name: "id-sorgu",

  code: ` $color[RANDOM]  

$author[ID Sorgu] 

$onlyIf[$isNumber[$noMentionMessage[1]]!=false;**<@$authorID>, ID rakamlardan oluşurmalıdır!**] 

$description[$thumbnail[$userAvatar[$noMentionMessage[1]]]

$addField[**🔎 | Sorgulayan Kullanıcı:**;\`$username#$discriminator[$authorID]\` | <@$authorID>]

$addField[:calendar_spiral: | Hesap kuruluş tarihi : ;\`$replaceText[$replaceText[$creationDate[$noMentionMessage[1];date];AM; ;1];PM; ;1]\`]

$addField[:bust_in_silhouette: | Bulunan kullanıcı : ; 

\`$username[$noMentionMessage[1]]#$discriminator[$noMentionMessage[1]]\`]]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

