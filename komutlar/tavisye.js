module.exports = {

  name: "tavsiye",

  aliases: "tavsiye",

  code: `

$channelSendMessage[$getServerVar[tlog];{author:$userTag:$authorAvatar}{description:🎊・Tavsiyeyi veren : **$userTag**

🎊・Tavsiye : **$message**}{footer: :$authorAvatar}{color:RANDOM}{thumbnail:$authorAvatar}]

$channelSendMessage[$channelID;<#$getServerVar[tlog]> Kanalına iletildi]

$deletecommand

$onlyIf[$message!=;❎・Bir Mesaj Yaz

$onlyIf[$getServerVar[tlog]!=;❎・Tavsiye logu ayarlanmamış]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`

};

