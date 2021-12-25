module.exports = {

  name: "para-sil",

  aliases: "para-sil",

  code: `

$color[RANDOM]

$title[✅・Para Başarılıyla Eklendi]

$onlyForIDs[754320168469135440; <@$authorID>, bu komut sahibime özeldir.]

$description[<@$message[1]> kullanıcının cüzdanından $message[2] 💵 silindi.]

$setGlobalUserVar[param;$sub[$getGlobalUserVar[param;$message[1]];$message[2]];$message[1]]  

$argsCheck[>1; <@$authorID>, Bir ID Yazmalısın]

$argsCheck[>2; <@$authorID>, miktar yaz.]

`

};

