const vortex = require("aoi.js");

var fs = require("fs");

const bot = new vortex.Bot({
  token: process.env.token, //.env dosyasında token yazan variablenin değerine tokeninizi yazın

  prefix: "?",
  mobile: true,
  fetchInvites: true
});

bot.onBanAdd();
bot.onBanRemove();
bot.onMessageDelete();
bot.onMessageUpdate();
bot.onLeave();
bot.onJoined();
bot.onInviteCreate();
bot.onInviteDelete();
bot.onChannelCreate();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onRoleUpdate();

bot.onMessage();

var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"));

for (const file of reader) {
  const command = require(`./komutlar/${file}`);

  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}

bot.command({
  name: "yardım",
  aliases: [`yardım`, `help`],
  code: `

$color[RANDOM]
$description[
$title[Yardım Menüsü]

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
]
$thumbnail[$userAvatar[$clientID]]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`
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
  log:"",
  sahip:"",
  rsayı:"0",
  osayı:"0",
  bprefix:"",
  btarih:"",
  bekleyen:"0",
  bliste:"",
});

bot.joinCommand({
  channel: "$getServerVar[hgbb]",
  code: `
$description[📥・[$userTag[$authorID]](https://discord.com/users/$authorID) Sunucumuza Hoşgeldin Kuralları Okumayı Unutma]
$footer[]
$thumbnail[$authorAvatar]
$color[RANDOM]
`
});

bot.leaveCommand({
  channel: "$getServerVar[hgbb]",
  code: `
$description[📤・[$userTag[$authorID]](https://discord.com/users/$authorID) Adlı Üye Ayrıldı Umarım Güzel Zaman Geçirmiştir]
$thumbnail[$authorAvatar]
$color[RANDOM] 
  `
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
    

`
});

bot.botJoinCommand({
  channel: "922002749804118036",

  code: `

$author[Bir Sunucuya Eklendim]

$description[

**・Sunucu Adı : ** _\`$serverName\`_
**・Sunucu ID : ** _\`$guildID\`_
**・Üye Sayısı : ** _\`$membersCount\`_
**・Davet Linki : ** **[TIKLA]($getServerInvite)**

]

$color[RANDOM]

`
});

bot.botLeaveCommand({
  channel: "922002749804118036",

  code: `

$author[Bir Sunucudan Atıldım]

$description[

**・Sunucu Adı : ** _\`$serverName\`_
**・Sunucu ID : ** _\`$guildID\`_
**・Üye Sayısı : ** _\`$membersCount\`_

]

$color[RANDOM]

`
});

bot.command({
  name: "abone-rol",
  code: `
  $onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;<:emoji_71:917309220687314966> | <@$authorID> Ayarla ve ya sıfırla ile belirtmelisin]
  $onlyIf[$message!=;<:emoji_71:917309220687314966> | Ayarla ve ya sıfırla yazmalısın]
  $if[$message[1]==ayarla]
  <:emoji_70:917309183341236244> | <@$authorID> Abone rol $mentionedRoles[1] ID li rol olarak ayarlandı
  $setServerVar[aboner;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=;<:emoji_71:917309220687314966> | <@$authorID> Bir rol etiketlemelisin]
  $endif
  $if[$message[1]==sıfırla]
  <:emoji_70:917309183341236244> | Abone rol sıfırlandı
  $setServerVar[aboner;]
  $onlyIf[$getServerVar[aboner]!=;<:emoji_71:917309220687314966> | <@$authorID> Zaten ayarlanmamış]
  $endif
  $onlyBotPerms[manageroles;<:emoji_71:917309220687314966> | <@$authorID> Botun **Rolleri Yönet** yetkisi bulunmamakta]
  $onlyPerms[admin;<:emoji_71:917309220687314966> | <@$authorID> Bu komutu sadece **Yönetici** yetkisine sahip kişiler kullanabilir]
 $onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 
 `
});

bot.command({
  name: "abone",
  code: `
  $title[]
  $description[
  
 <:emoji_70:917309183341236244> | Abone Rolü Verilen = <@$mentioned[1]>
 <:emoji_70:917309183341236244> | Abone Rolü Veren = <@$authorID>
  ]
  $giveRole[$mentioned[1];$getServerVar[aboner]]
  $color[RANDOM]
  $argsCheck[>1;<:emoji_71:917309220687314966> | Birini etiketlemelisin]
  $onlyBotPerms[manageroles;<:emoji_71:917309220687314966> | Botun **Rolleri Yönet** İznine Sahip Olmam Gerek]
  $onlyPerms[manageroles;]
  
  `
});

bot.command({
  name: "istatistik",
  code: `
$color[RANDOM]
$title[$userTag[$clientID] in İstatistikleri]
$description[
<:emoji_72:917309261661491241> | Bot Sahibi / Geliştirici
[$userTag[$botOwnerID]](https://discord.com/users/$botOwnerID)

<:emoji_72:917309261661491241> | Bot Verileri

<:developerr:910821172877344778>  | Sunucu Sayısı | $serverCount

<:developerr:910821172877344778> | Kullanıcı Sayısı | $allMembersCount

<:developerr:910821172877344778>  | Toplam Kanal Sayısı | $allChannelsCount

<:developerr:910821172877344778> | Kullanılan Ram | $ram

<:developerr:910821172877344778> | Kullanılan Cpu | $cpu

<:emoji_72:917309261661491241> | Gecikmeler

<:developerr:910821172877344778> | Bot Pingi | $botPing

<:developerr:910821172877344778> | Uptime Süresi | $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$djseval[client.uptime;yes];time];hours;saat;-1];minutes;dakika;-1];seconds;saniye;-1];hour;saat;-1];minute;dakika;-1];second;saniye;-1];and;ve;-1]

<:developerr:910821172877344778> | Database Ping | $dbPing

<:emoji_72:917309261661491241> | Linkler

<:developerr:910821172877344778> | Beni Davet İçin [Tıkla]($getBotInvite[admin])

<:developerr:910821172877344778> | Destek Sunucuma Gelmek İçin [Tıkla](https://discord.gg/NNpYhyrzEx)
]
$footer[Komut,$userTag[$authorID] Tarafından Kullanıldı $addTimestamp]
$thumbnail[$userAvatar[$clientID]]
`
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

`
});

bot.status({
  text: "?yardım | ?davet | 7/24 Aktif", //buraya durum yazısı

  type: "PLAYING", //buraya oynuyor bölümü PLAYING LISTENING WATCHING STREAMING şeklindede yapabilirsiniz

  status: "online", //buraya status kısmı dnd idle online şeklinde yapabilirsiniz

  time: 12 //buraya ellemeyin
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

`
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
  `
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
<a:emoji_45:927001644971995166> | Şuanki Paran : \`$getGlobalUserVar[param;$authorID]\` TL
--------------------------------------------
<a:emoji_45:927001644971995166> | Bankadaki Paran : \`$getGlobalUserVar[banka;$authorID]\` TL
--------------------------------------------
<a:emoji_45:927001644971995166> | Toplam Paran : \`$sum[$getGlobalUserVar[param;$authorID];$getGlobalUserVar[banka;$authorID]]\` TL


]



`
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
<a:emoji_45:927001644971995166> | Şuanki Paran : \`$getGlobalUserVar[param;$mentioned[1]]\` TL
--------------------------------------------
<a:emoji_45:9270016449719911 Paran : \`$getGlobalUserVar[banka;$mentioned[1]]\` TL
--------------------------------------------
<a:emoji_45:927001644971995166> | Toplam Paran : \`$sum[$getGlobalUserVar[param;$mentioned[1]];$getGlobalUserVar[banka;$mentioned[1]]]\` TL


]
$argsCheck[>1;<:emoji_71:917309220687314966> | Birini Etiketlemelisin]


`
});
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

  


`
});

bot.status({
  text:
    "$serverCount Sunucu | $allMembersCount Kullanıcı | Geliştiricim : $userTag[$botOwnerID]",
  type: "PLAYING",
  status: "online",
  time: 12
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

 `
});

bot.readyCommand({
  channel: "922002749804118036",
  code: `
$joinVc[$voiceID]
$suppressErrors
$description[
・ $userTag[$clientID] İsmiyle Başarıyla Giriş Yaptım
・ Sunucu Sayım : \`$serverCount\`
・ Kullanıcı Sayım : \`$allMembersCount\`
・ Toplam Kanal Sayım : \`$allChannelsCount\`
]
$color[45EE00]
`
});

bot.command({
  name: "ayarlar",
  code: `

$color[RANDOM]

$author[Sunucu Ayarları;$serverIcon]



$description[

Gelen Giden Kanalı : $replaceText[<#$getServerVar[hgbb]>

;<#>;  Sistem Kapalı.;-1]

 Abone Rol : $replaceText[<@&$getServerVar[aboner]>

;<&>; Sistem Kapalı.;-1]
]





`
});

bot.command({
  name: "herkese-rol-ver",
  code: `
**\`$roleName[$mentionedRoles[1]]\`** Adlı Rol Herkese Veriliyor Bu İşlem Biraz Sürebilir
$forEachMember[rolver]
$onlyIf[$rolePosition[$mentionedRoles[1]]>=$rolePosition[$highestRole[$clientID]];Rolümden Üstte Bir Rolü Herkese Veremem]
$onlyIf[$mentionedRoles[1]!=;Bir Rol Etiketle]
$onlyIf[$authorID==$ownerID;Sadece Sunucu Sahibi Herkese Rol Verebilir]
`
});
bot.awaitedCommand({
  name: "rolver",
  code: `
$giveRole[$authorID;$mentionedRoles[1]]
`
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

`
});

bot.command({
  name: "yaş-hesapla",
  code: `

$color[RANDOM]

$title[Yaş Hesaplama İşlemi]

$description[<@$authorID>, sen $sub[$year;$message[1]] yaşındasın.]

$footer[$username[$authorID]]

$addTimestamp

$argsCheck[>1; <@$authorID>, doğum yılını yaz.] 

`
});

bot.command({

name:"bot-ekle",

code:`

$useChannel[$getServerVar[log]]

$authorIcon[$authorAvatar]

$thumbnail[$authorAvatar]

$author[$username[$authorID]#$discriminator[$authorID]]

$description[Sisteme bir bot eklendi, şu anda sırada $calculate[$getServerVar[bekleyen]+1] bot bekliyor.]

$addField[Ekleyen Hakkında;<@$authorID> **($authorID)**]

$addField[Bot Hakkında;<@$message[1]> **($message[1]) / ($message[2])**]

$color[FFFFFF]

$setServerVar[bekleyen;$calculate[$getServerVar[bekleyen]+1]]

$setUserVar[sahip;$authorID;$message[1]]

$setUserVar[bprefix;$message[2];$message[1]]

$setUserVar[btarih;$replaceText[$date;-;/;-1] - $calculate[$hour+3].$minute;$message[1]]

$setServerVar[bliste;$getServerVar[bliste]

**$username[$message[1]] ($message[1]) / ($message[2])**]

$addTimestamp

$onlyIf[$message[1]!=;ID girmelisin.]

$onlyIf[$message[2]!=;Prefix girmelisin.]

$onlyIf[$getServerVar[log]!=;Bot list sistemi bu sunucuda açık değil.]

$onlyIf[$isBot[$message[1]]!=false;Bu ID bir bota ait değil.] 

$suppressErrors[ID girmelisin.]

$onlyIf[$message[1]!=$botID;Beni sisteme ekleyemezsin.]

`

}) 

bot.command({

name:"bot-log",

code:`

$onlyIf[$mentionedChannels[1]!=;Kanal etiketlemelisin.]

$onlyPerms[admin;Bu komutu kullanabilmek için **Yönetici** iznine sahip olman gerek.]

Bot log kanalı <#$mentionedChannels[1]> kanalına ayarlandı.

$setServerVar[log;$mentionedChannels[1]]

$onlyIf[$getServerVar[log]!=$mentionedChannels[1];Bot log kanalı zaten etiketlediğin kanala ayarlı.]

`

}) 

bot.command({

name:"onayla",

code:`
$useChannel[$getServerVar[log]]

<@$getUserVar[sahip;$message]>

$authorIcon[$userAvatar[$getUserVar[sahip;$message]]]

$thumbnail[$userAvatar[$getUserVar[sahip;$message]]]

$author[$username[$getUserVar[sahip;$message]]#$discriminator[$getUserVar[sahip;$message]]]

$description[:tada: **$username[$message] ($message)** adlı bot onaylandı.]

$addField[Ekleyen Hakkında;<@$getUserVar[sahip;$message]> **($getUserVar[sahip;$message])**]

$addField[Bot Hakkında;**$username[$message] ($message) / ($getUserVar[bprefix;$message])**]

$color[FFFFFF]

$setServerVar[bekleyen;$calculate[$getServerVar[bekleyen]-1]]

$setServerVar[osayı;$calculate[$getServerVar[osayı]+1]]

$setServerVar[bliste;$replaceText[$getServerVar[bliste];**$username[$message] ($message) / ($getUserVar[bprefix;$message])**;;-1]]

$addTimestamp

$onlyIf[$message!=;ID girmelisin.]

$onlyIf[$getUserVar[sahip;$message]!=;Sistemimde böyle bir bot bulamadım.]

$onlyAdmin[Bu komutu kullanabilmek için **Yönetici** iznine sahip olman gerek.]

$onlyIf[$getServerVar[log]!=;Bot list sistemi bu sunucuda açık değil.]

`

}) 

bot.command({

name:"reddet",

code:`

$useChannel[$getServerVar[log]]

<@$getUserVar[sahip;$message]>

$author[$userTag[$getUserVar[sahip]];userAvatar[$getUserVar[sahip;$message]]]

$thumbnail[$userAvatar[$getUserVar[sahip;$message]]]

$author[$username[$getUserVar[sahip;$message]]#$discriminator[$getUserVar[sahip;$message]]]

$description[🗑️ **$username[$message] ($message)** adlı bot reddedildi.]

$addField[Ekleyen Hakkında;<@$getUserVar[sahip;$message]> **($getUserVar[sahip;$message])**]

$addField[Bot Hakkında;**$username[$message] ($message) / ($getUserVar[bprefix;$message])**]

$color[FFFFFF]

$setServerVar[bekleyen;$calculate[$getServerVar[bekleyen]-1]]

$setServerVar[rsayı;$calculate[$getServerVar[rsayı]+1]]

$setServerVar[bliste;$replaceText[$getServerVar[bliste];**$username[$message] ($message) / ($getUserVar[bprefix;$message])**;;-1]]

$addTimestamp

$onlyIf[$message!=;ID girmelisin.]

$onlyIf[$getUserVar[sahip;$message]!=;Sistemimde böyle bir bot bulamadım.]

$onlyAdmin[Bu komutu kullanabilmek için **Yönetici** iznine sahip olman gerek.]

$onlyIf[$getServerVar[log]!=;Bot list sistemi bu sunucuda açık değil.]

`

}) 

