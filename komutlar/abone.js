module.exports = {
  name: "abone",
  aliases: ["a", `abone`],
  code: `
$giveRole[$mentioned[1];$getServerVar[abonerol]]
$author[Başarılı!]
$description[<:emoji_70:917309183341236244> | <@$mentioned[1]> kişisi artık kodlara(vs.) ulaşabilir!]
$thumbnail[$userAvatar[$mentioned[1]]]
$addTimestamp
$channelSendMessage[$getServerVar[abonelog];{description:<:emoji_70:917309183341236244> | <@$mentioned[1]> kişisine abone rolü verildi.}{color:RANDOM}{thumbnail:$userAvatar[$mentioned[1]]}]
$onlyIf[$mentioned[1]!=;{description:<:emoji_71:917309220687314966> | Abone olacak üyeyi etiketle.}{color:RANDOM}]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[abonerol]]!=true;{description:<:emoji_71:917309220687314966> | <@$mentioned[1]> kişisinde zaten abone rolü var.}{color:RANDOM}]
$onlyIf[$hasRole[$authorID;$getServerVar[aboneyt]]==true;{description:<:emoji_71:917309220687314966> | Bu komutu kullanmak için <@&$getServerVar[aboneyt]> rolüne sahip olmalısın.}{color:RANDOM}]
$suppressErrors
`,
};
