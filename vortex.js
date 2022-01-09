var vortex = require(`aoi.js`);
var fs = require("fs");
var bot = new vortex.Bot({
  token: process.env.token,
  prefix: "?",
  mobile:true
});

bot.onJoined();
bot.onLeave();
bot.onMessage();
var reader = fs
  .readdirSync("./komutlar")
  .filter((file) => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./komutlar/${file}`);
  bot.command({
    name: command.name,
    code: command.code,
  });
}

bot.status({
  text: "$userTag[$botOwnerID] ❤",
  type: "PLAYING",
  time: 12,
});

bot.command({
  name: "yardım",
  aliases: [`yardım`, `help`],
  code: `
$title[Yardım Menüsü]
$description[


 __Bilgilendirme__
» | \`Bot Dili\` <:emoji_83:917308699524079637>  Türkçe 🇹🇷
» | \`Bot Kütüphanesi\` <:emoji_83:917308699524079637>  Aoi.js
» | \`Prefix\` <:emoji_83:917308699524079637>  ?

__Kategoriler__
» | \`$getServerVar[prefix]eğlence\` <:emoji_83:917308699524079637>  Eğlence Komutlarını Gösterir.
» | \`$getServerVar[prefix]ekonomi\` <:emoji_83:917308699524079637>  Ekonomi Komutlarını Gösterir.
» | \`$getServerVar[prefix]moderasyon\` <:emoji_83:917308699524079637> Moderasyon Komutlarını Gösterir.
» | \`$getServerVar[prefix]kullanıcı\` <:emoji_83:917308699524079637>  Kullanıcı Komutlarını Gösterir.
» | \`$getServerVar[prefix]müzik-sistemi\` <:emoji_83:917308699524079637>  Müzik Komutlarını Gösterir.
]]
$thumbnail[$userAvatar[$clientID]]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`,
});

bot.variables({
  asaat: "0",
  param: "0",
  banka: "0",
  bilgisiyar: "0",
  telefon: "0",
  tablet: "0",
  cban: "",
  çıkışban: "0",
  status: "",
  oy: "0",
  sayıkanal: "",
  sayısayma: "0",
  popurlerlik: "0",
  tlog: "",
  asebep: "",
  asebeb: "",
  kengel: "kapalı",
  populerlik: "0",
  hgbb: "",
  color: "",
  karaliste: "hayır",
  klsebep: "Kara Listede Değilsin",
  ksebep: "",
  karaliste: "$authorID",
  afk: "",
  afkl: "",
  prefix: "?",
  saas: "kapalı",
  mrol: "",
  modlog: "",
  arol: "",
  ayetkili: "",
  prefix: "?",
  otorol: "",
  otorollog: "",
  meslek: "Yok",
  maaş: "0",
  kl: "",
  cekilis: "undefined",
  aboner: "",
  meslek: "İşsiz",
  saas: "kapalı",
  log: "",
  sahip: "",
  rsayı: "0",
  osayı: "0",
  bprefix: "",
  btarih: "",
  bekleyen: "0",
  bliste: "",
});

bot.joinCommand({
  channel: "$getServerVar[hgbb]",
  code: `
$description[📥・[$userTag[$authorID]](https://discord.com/users/$authorID) Sunucumuza Hoşgeldin Kuralları Okumayı Unutma]
$footer[]
$thumbnail[$authorAvatar]
$color[RANDOM]
`,
});

bot.leaveCommand({
  channel: "$getServerVar[hgbb]",
  code: `
$description[📤・[$userTag[$authorID]](https://discord.com/users/$authorID) Adlı Üye Ayrıldı Umarım Güzel Zaman Geçirmiştir]
$thumbnail[$authorAvatar]
$color[RANDOM] 
  `,
});
bot.command({
  name: "davet",
  code: `
$description[
<:developerr:910821172877344778> | Botumuzu Davet Etmek İçin : [Tıkla](https://discord.com/oauth2/authorize?client_id=908704907983482881&scope=bot+applications.commands&permissions=8)

<:developerr:910821172877344778> | Destek Sunucumuza Gelmek İçin : [Tıkla](https://discord.gg/NNpYhyrzEx)

<:developerr:910821172877344778> | Kurucum İle İletişime Geçmek İçin : [$userTag[754320168469135440]](https://discord.com/users/754320168469135440)
]
$color[RANDOM]
$thumbnail[$authorAvatar]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 
    

`,
});

bot.variables({
  aboneyt: "",

  abonerol: "",

  abonelog: "",
});
bot.variables({
  aboneyt: "",

  abonerol: "",

  abonelog: "",
});
bot.command({
  name: "istatistik",
  aliases: [`i`, `istatistik`],
  code: `
$author[$userTag[$clientID];$userAvatar[$clientID]]
$description[

**__Bot Bilgileri__**

<a:emoji_55:928760319021555744> ・ Bot Owner / Geliştirici : [$userTag[$botOwnerID]](https://discord.com/users/$botOwnerID)

<a:emoji_55:928760319021555744> ・ Botumuzun Adı : $userTag[$clientID]

<a:emoji_55:928760319021555744> ・ Botumuzun ID'si : **$clientID**

<a:emoji_55:928760319021555744> ・ Botumuzun Kurulduğu Tarih :  **$creationDate[$clientID]**

**__Bot Verileri__**

<a:emoji_55:928760319021555744> ・ Botumuzu Kullanan Kişi Sayısı : **$allMembersCount**

<a:emoji_55:928760319021555744> ・ Botumuzun Bulunduğu Sunucu Sayısı : **$serverCount**

<a:emoji_55:928760319021555744> ・ Botumuzda Bulunan Toplam Komut Sayısı : **$commandsCount**

<a:emoji_55:928760319021555744> ・ Botumuzun Pingi : **$botPing**

<a:emoji_55:928760319021555744> ・ Son Güncellenme Zamanı : **$uptime**

**__Linkler__**

<a:emoji_55:928760319021555744> ・ Botumuzu Davet Etmek İçin : [Tıkla]($getBotInvite[admin])

<a:emoji_55:928760319021555744> ・ Botumuzun Destek Sunucusu İçin : [Tıkla](https://discord.gg/NNpYhyrzEx)
]

$color[RANDOM]

$footer[$addTimestamp]


`,
});

bot.command({
  name: "ekle",
  code: `
  
  $useChannel[926993163162378250]
  
  $message
  $author[Sunucuya Yeni Bir Kod Eklendi;$serverIcon]
  $color[RANDOM]
  $description[

<:emoji_72:917309261661491241> | Eklendiği Kanal | $message

<:emoji_72:917309261661491241> | Ekleyen Yetkili | <@$authorID>
]

$footer[$serverName[$guildID];$serverIcon;$addTimestamp]

$argsCheck[>1;]

$deletecommand

$onlyPerms[admin;]

`,
});

bot.status({
  text: "?yardım | ?davet | 7/24 Aktif", //buraya durum yazısı

  type: "PLAYING", //buraya oynuyor bölümü PLAYING LISTENING WATCHING STREAMING şeklindede yapabilirsiniz

  status: "online", //buraya status kısmı dnd idle online şeklinde yapabilirsiniz

  time: 12, //buraya ellemeyin
});

bot.command({
  name: "oylama",
  code: `


$color[$random[0;99999]]

$thumbnail[$authorAvatar]

$title[Oylama Başladı]

$description[

$noMentionMessage]

$addReactions[✅;❌]

$footer[Yetkili - $username#$discriminator[$authorID]]

$onlyPerms[manageroles;]

`,
});

bot.command({
  name: "j",
  code: `
  $description[
  • Kodları Görebilmeniz İçin <@&926951177181077585> | Abone Rolü Almanız Gerekiyor 

:bell: Şartlar

<:youtubemubuaq:901867518006788096>  | [Ardaa](https://youtube.com/channel/UCeNt3YcM_pXpasLAVrMd0gA) Kanalına Abone Olmanız Gerek.

<:youtubemubuaq:901867518006788096>  | [Vortex Development](https://youtube.com/channel/UC4Uqe3zqtVOLrGG8yLB9eBA)  Kanalına Abone Olmanız Gerek.

:exclamation: Not

<:youtubemubuaq:901867518006788096>  | Saat Gözükücek Şeklinde Ekran Görüntüsü Çekmelisiniz.

<:youtubemubuaq:901867518006788096>  | Ekran Görüntülerini <#926969817876004905>  Kanalına Atmalısınız.
  ]
  $color[RANDOM]
  $deletecommand
  $onlyForIDs[$botOwnerID;]
  `,
});

bot.command({
  name: "param",
  aliases: [`param`, `cash`],
  code: `
$color[RANDOM]
$author[$userTag[$authorID];$userAvatar[$authorID]]
$description[

<a:emoji_45:927001644971995166> | Hesap İsmi : \`$userTag[$authorID]\`
--------------------------------------------
<a:emoji_45:927001644971995166> | Hesap Kuruluş Tarihi : \`$creationDate[$authorID]\`
--------------------------------------------
<a:emoji_45:927001644971995166> | Hesap ID'si : \`$authorID\`
--------------------------------------------
<a:emoji_45:927001644971995166> | Şuanki Paran : \`$getGlobalUserVar[param;$authorID]\` 
--------------------------------------------
<a:emoji_45:927001644971995166> | Bankadaki Paran : \`$getGlobalUserVar[banka;$authorID]\` 
--------------------------------------------
<a:emoji_45:927001644971995166> | Toplam Paran : \`$sum[$getGlobalUserVar[param;$authorID];$getGlobalUserVar[banka;$authorID]]\` 


]



`,
});

bot.command({
  name: "cüzdan",
  code: `
$color[RANDOM]
$author[$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
$description[

<a:emoji_45:927001644971995166> | Hesap İsmi : \`$userTag[$mentioned[1]]\`
--------------------------------------------
<a:emoji_45:927001644971995166> | Hesap Kuruluş Tarihi : \`$creationDate[$mentioned[1]]\`
--------------------------------------------
<a:emoji_45:927001644971995166> | Hesap ID'si : \`$mentioned[1]\`
--------------------------------------------
<a:emoji_45:927001644971995166> | Şuanki Paran : \`$getGlobalUserVar[param;$mentioned[1]]\` 
--------------------------------------------
<a:emoji_45:927001644971995166> | Bankadaki Paran : \`$getGlobalUserVar[banka;$mentioned[1]]\` 
--------------------------------------------
<a:emoji_45:927001644971995166> | Toplam Paran : \`$sum[$getGlobalUserVar[param;$mentioned[1]];$getGlobalUserVar[banka;$mentioned[1]]]\` 


]
$argsCheck[>1;<:emoji_71:917309220687314966> | Birini Etiketlemelisin]


`,
});

bot.variables({
kklog:""
}) 


bot.command({
  name: "bug-bildir",

  code: `


$argsCheck[>1;** ⭐ | Lütfen Bir Bug Belirtin **]

$useChannel[922002749804118036]


$channelSendMessage[$channelID;** ⭐ | Bug Sahibime İletilmiştir **]

$footer[$addTimestamp]

$description[$thumbnail[$userAvatar[$authorID]]



** ⭐ | Bug 'u Bildiren Kişi : ** \`$username#$discriminator[$authorID] - $authorID\`

** ⭐ | Bug'u Bildirdiği  Sunucu : ** \`$serverName[$guildID]\`

** ⭐ | Gönderdiği Bug :  ** \`$noMentionMessage\`

** ⭐ | Bugu Bildirip Bize Destek Olduğun için Teşekkürler **]

  


`,
});

bot.status({
  text: "$serverCount Sunucu | $allMembersCount Kullanıcı | Geliştiricim : $userTag[$botOwnerID]",
  type: "PLAYING",
  status: "online",
  time: 12,
});

bot.command({
  name: "ping",
  code: `
$if[$ping<50]
$author[Bot Ping;$userAvatar[$clientid]]
$image[https://somlicab.sirv.com/New%20Projects.png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[GREEN]

$elseif[$ping<250]
$author[Bot Ping;$userAvatar[$clientid]]
$image[https://somlicab.sirv.com/New%20Project%20(2).png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[YELLOW]
$endelseif


$elseif[$ping<350]
$author[Bot Ping;$userAvatar[$clientid]]
$image[https://somlicab.sirv.com/New%20Project%20(1).png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[ORANGE]
$endelseif


$elseif[$ping<600]
$author[Bot Ping;$userAvatar[$clientid]]
$image[https://somlicab.sirv.com/New%20Project.png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[RED]
$endelseif
$endif

 `,
});

bot.readyCommand({
  channel: "922002749804118036",
  code: `
$suppressErrors
$description[
・ $userTag[$clientID] İsmiyle Başarıyla Giriş Yaptım
・ Sunucu Sayım : \`$serverCount\`
・ Kullanıcı Sayım : \`$allMembersCount\`
・ Toplam Kanal Sayım : \`$allChannelsCount\`
]
$color[45EE00]
`,
});

bot.command({
  name: "aekle",
  code: `
  
  $useChannel[926993163162378250]
  
  $message
  $author[Sunucuya Yeni Bir Altyapı Eklendi;$serverIcon]
  $color[RANDOM]
  $description[
  
<:emoji_72:917309261661491241> | Eklendiği Kanal | $message

<:emoji_72:917309261661491241> | Ekleyen Yetkili | <@$authorID>
]

$footer[$serverName[$guildID];$serverIcon;$addTimestamp]

$argsCheck[>1;]

$deletecommand

$onlyPerms[admin;]

`,
});

bot.command({
  name: "yaş-hesapla",
  code: `

$color[RANDOM]

$title[Yaş Hesaplama İşlemi]

$description[<@$authorID>, sen $sub[$year;$message[1]] yaşındasın.]

$footer[$username[$authorID]]

$addTimestamp

$argsCheck[>1;{description:<@$authorID>, doğum yılını yaz.}{color:RANDOM}]

`,
});

bot.joinCommand({
  channel: "928374626998968362",
  code: `
<:tatlimisir:908393466847985726>・<@$authorID> Sunucuya Hoşgeldin Knks

`,
});

bot.botJoinCommand({
  channel: "922002749804118036",
  code: `
$botLeave
$channelSendMessage[$randomChannelID;Sunucunuz 50 kişi altı olduğu için sunucuzdan çıkıyom hadi bb]
$onlyIf[$membersCount<=50;]
`
});

bot.command({
  name: "lisans",
  code: `
  Bu Komut \`$serverName\` Sunucusuna Aittir Çalınması Ve Paylaşılması Kesinlikle Yasaktır.
  $onlyForServers[875458725115224175;{description:.}{color:RANDOM}
 $onlyPerms[admin;]
 $deletecommand
 `,
});
bot.channelDeleteCommand({
channel:"$getServerVar[kklog]",
code:`
$createChannel[$oldChannel[name];$oldChannel[type];yes;$oldChannel[categoryID]]
$author[$oldChannel[name];$serverIcon]
$description[**<:emoji_70:917309183341236244> | $oldChannel[name]** kanalı silinmişti kanal koruma sayesinde tekrardan kuruldu]
$footer[]
$color[RANDOM]
$thumbnail[$serverIcon]
$onlyIf[$getServerVar[kklog]!=;]
`
})
bot.onChannelDelete()   

bot.variables({
atlog:"",
antiraid:"kapalı",
botizin:""
})  

bot.joinCommand({
channel:"$getServerVar[atlog]",
code:`
$author[$userTag;$authorAvatar]
$description[\`$userTag\` ( \`$authorID\` ) adlı bot sunucuya eklendi ve banladım]
$color[GREEN]
$ban[$authorID;Vortex Bot Engel]
$onlyIf[$authorID!=$getServerVar[botizin];{author:$userTag:$authorAvatar}{description:\`$userTag\` ( \`$authorID\` ) adlı bot sunucuya eklendi ama bota izin verildiği için banlanmadı}{color:ORANGE}]
$onlyIf[$isBot[$authorID]==true;]
$onlyIf[$getServerVar[antiraid]==açık;]
$onlyPerms[admin;<:emoji_71:917309220687314966> | Bunun için \`Yönetici\` iznin olmalı]
`
})   


bot.variables({
bklog:""
}) 
bot.banAddCommand({

channel:"bklog",

code:`

$unban[$authorID]

$author[$userTag]

$description[<:emoji_70:917309183341236244> | **$userTag** \`$getBanReason[$authorID]\` sebebinden banlanmıştı ban koruma sayesinde banı kaldırıldı]

$footer[]

$color[GREEN]

$thumbnail[$authorAvatar]

$onlyIf[$getServerVar[bklog]!=;]

`

})

bot.onBanAdd()   

bot.command({
name:"$alwaysExecute",
code:`
$setServerVar[spammessage;$message;$authorID]
$onlyIf[$getServerVar[spam]!=kapalı;]
`
})

bot.command({
name:"$alwaysExecute",
code:`
$setServerVar[spamsayı;$sum[$getServerVar[spamsayı;$authorID];1];$authorID]
$onlyIf[$getServerVar[spamsayı;$authorID]<=5;{execute:spam}]
$onlyIf[$message==$getServerVar[spammessage;$authorID];]
$onlyIf[$getServerVar[spam]!=kapalı;]
`
})

bot.awaitedCommand({
name:"spam",
code:`
$setServerVar[spamsayı;0;$authorID]
$description[$userTag[$authorID] Spam Yapmayı Kesermisin Lütfen]
$color[RANDOM]
`
})  

bot.variables({

spam:"kapalı",

spammessage:"",

spamsayı:"0"

}) 

bot.variables({
rklog:""
}) 

bot.command({
  name: "koruma-sistemi",
  code: `
$title[Koruma Sistemi Menüsü]
$description[
__Koruma Sistemi__
» | \`$getServerVar[prefix]bot-koruma\` <:emoji_83:917308699524079637>  Sunucunuzu Güvene Almak İçin Bot Koruma Açarsınız.
» | \`$getServerVar[prefix]bot-izni-ver\` <:emoji_83:917308699524079637>  Eklediğiniz Bot'a İzin Verirsiniz.
» | \`$getServerVar[prefix]ban-koruma\` <:emoji_83:917308699524079637> Ban Koruma İle Sunucunuzdan Banlanan Kişinin Banını Açar ve Banlayan Kişiyi Yasaklar.
» | \`$getServerVar[prefix]kanal-koruma\` <:emoji_83:917308699524079637>  Kanal Koruma İle Kanal Silinirse Geri Açar.
» | \`$getServerVar[prefix]spam-engel\` <:emoji_83:917308699524079637>  Spam Yapanları Belirtiğiniz Sayıda.
]]
$thumbnail[$userAvatar[$clientID]]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`,
});