module.exports = {

  name:"küfür-engel",

  code:`

  $if[$message[1]==aç]

  $channelSendMessage[$channelID;{color:$getServerVar[renk]}{description:<:emoji_70:917309183341236244> | Başarıyla Küfür-Engel Sistemi Açıldı}{footer:$getServerVar[footer]}{thumbnail:$userAvatar}]

  $setServerVar[küfür;açık]

  $setServerVar[küfürayarlayan;$authorID]

  $endif

  $if[$message[1]==kapat]

  $channelSendMessage[$channelID;{color:$getServerVar[renk]}{description:<:emoji_70:917309183341236244> | Başarıyla Küfür-Engel Sistemi Kapatıldı}{footer:$getServerVar[footer]}{thumbnail:$userAvatar}]

  $setServerVar[küfür;kapalı]

  $endif

  $onlyPerms[admin;$getServerVar[admin]]

  $onlyIf[$checkContains[$tolowerCase[$message[1]];aç;kapat]==true;{color:$getServerVar[renk]}{footer:$getServerVar[footer]}{description:<:emoji_71:917309220687314966> | Lütfen Bir Argüman Kullan : \`\aç,kapat\`\}{thumbnail:$userAvatar}]

  `} 

 