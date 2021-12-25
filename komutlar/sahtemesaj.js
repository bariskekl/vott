module.exports = {
  name: "sahte-mesaj",

  aliases: "sahtemesaj",

  code: ` 

   $deleteCommand

   $sendWebhook[$joinSplitText[;];$messageSlice[1]]

$textSplit[$createWebhook[$channelID;$username[$mentioned[1]];$userAvatar[$mentioned[1]];yes; | ]; | ]

$suppressErrors[{title:$customEmoji[hyr] Bir hata oluştu}{description:Bu kanalda daha önceden 10 webhook kullanıldığı için sahte mesaj işlemi çalıştırılamadı.}{color:RED}]

$onlyIf[$checkContains[$message;com;https;everyone;here;discord.gg]!=true;Bu kelimeleri bu komutta kullanamazsın.]

 `
};
