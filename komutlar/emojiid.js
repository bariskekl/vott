module.exports = {

  name: "emoji-id",

  aliases: "emoji-id",

  code: `

$title[Emoji İD Alma Sistem ]

$argsCheck[>1;**Lütfen Sunucuda Bulunan emojilerin ismini yazınız.**]

$description[

🚨 | Emoji : $customEmoji[$message]

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

🌠 | Emoji ID : \`$customEmoji[$message]\`

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

🕵️ | Emoji İD İsteyen Kişi : $username

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

$color[RANDOM]

$footer[$username Beni Kullandığınız İçin Teşekkür ederim.]] 

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.] 

`

};

