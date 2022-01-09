module.exports = {

        name: "spam-engel",

        code: `

        $if[$message[1]==aç]

$description[<:emoji_70:917309183341236244> | Spam engel sistemini açtım. $getServerVar[spamsayı] adet spam yaptıktan sonra kullanıcıyı uyaracam.]

$color[RANDOM]

$setServerVar[spam;açık]

$onlyIf[$getServerVar[spam]!=açık;<:emoji_71:917309220687314966> | Sistem zaten açık.]

$endif

$if[$message[1]==kapat]

$description[<:emoji_70:917309183341236244> | Spam engel sistemini kapattım.]

$color[RANDOM]

$setServerVar[spam;kapalı]

$onlyIf[$getServerVar[spam]!=kapalı;<:emoji_71:917309220687314966> | Sistem zaten kapalı.]

$endif

$if[$message[1]==sayı]

$description[<:emoji_70:917309183341236244> | $message[2] adet spam yaptıktan sonra kullanıcıyı uyaracam.]

$color[RANDOM]

$setServerVar[spam;$message[2]]

$onlyIf[$isNumber[$message[2]]!=false;<:emoji_71:917309220687314966> | Lütfen gerçek bir sayı girin \`$message[2]\` gerçek bir sayı değil çünkü.]

$onlyIf[$message[2]!=;<:emoji_71:917309220687314966> | Lütfen bir sayı girin.]

$onlyIf[$getServerVar[spam]!=kapalı;<:emoji_71:917309220687314966> | Sistem kapalı lütfen sistemi aç ve sonra bu komutu tekrar kullan.]

$endif

$onlyIf[$hasPerms[$authorID;admin]!=false;<:emoji_71:917309220687314966> | Bunun için \`Yönetici\` izninin olması lazım.]

        `

} 
