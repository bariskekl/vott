module.exports = {
  name: "çekiliş",

  code: `

$editMessage[$getServerVar[cekilis];{title:Çekiliş Bitti 🎉}{description:🎉Ödül : \`$messageSlice[1]\` 

🎉 | Yapan Kişi : **$userTag[$authorID]**

🎉 | Kazanan : $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Yeterli Katılımcı Yoktu.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer: Çekiliş Sona Erdi.: $authorAvatar}]

$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Yeterli katılımcı yoktu.];false;Kazanan : <@$randomText[$joinSplitText[;]]>, Tebrikler!]]

$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[cekilis];🎉;id];$clientID,;];,]

$wait[$message[1]]

$setServerVar[cekilis;$sendMessage[{title: Çekilişe Katılmak için  🎉 Emojisine Tıkla !.}{description: 🎉 | Ödül : \`$messageSlice[1]\` 

🎉 | Yapan Kişi : **$userTag[$authorID]**

🎉 | Süre : **$message[1]**}{timestamp}{color:RED}{reactions:🎉};yes]]

$onlyIf[$messageSlice[1]!=;{title:Argümanlar Aranıyor}{description:Çekiliş için herhangi bir ödül koymadınız Bu Formatı Takip Edin: 

\`\`\`

?çekiliş <süre> <ödül>.\`\`\`



}{color:ORANGE}]

$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title: Yanlış Kullanım}{description:Yeni girdiğiniz saat biçimi geçersiz. Bu örneği izleyin:

\`\`\`

1s 1 saniye 

1m  dakika

1h 1 saat

1d 1 Gün

\`\`\`}{color:RED}]

$onlyPerms[managechannels;{title:Yetkin Yok}{description:Senin \`Kanalları Yönet\` Yetkin Yok.}{color:RED}]


$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 

`
};
