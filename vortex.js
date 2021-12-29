const vortex = require("aoi.js");

var fs = require("fs");

const bot = new vortex.Bot({
  token: process.env.token, //.env dosyasında token yazan variablenin değerine tokeninizi yazın

  prefix: "?",

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

    code: command.code
  });
}

bot.command({
  name: "yardım",
  alises: "yardım",
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
  saas: "no",
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
  meslek: "İşsiz"
});

bot.readyCommand({
  channel: "922002749804118036",

  code: `

$author[⭐・Yeniden Aktifim;$userAvatar[$clientID]]

$description[

🟢・Tekrardan Aktifim:

🖥・Sunucu Sayım : \`$serverCount\`

✨・Kullanıcı Sayım : \`$allMembersCount\`

🌲・Komut Sayım : \`$commandsCount\`

🏛・Değişken Sayım : \`$variablesCount\` 

👑・Geliştircim : \`$userTag[$botOwnerID]\`

♾・Pingim : \`$ping\`]

$footer[;$userAvatar[$clientID]]

$thumbnail[$userAvatar[$clientID]]

$color[RANDOM]

`
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
<:developer:909920582223687700> | Botumuzu Davet Etmek İçin : [Tıkla](https://discord.com/oauth2/authorize?client_id=908704907983482881&scope=bot+applications.commands&permissions=8)

<:developer:909920582223687700> | Destek Sunucumuza Gelmek İçin : [Tıkla](https://discord.gg/YSr5Wq86bW)

<:developer:909920582223687700> | Kurucum İle İletişime Geçmek İçin : [$userTag[754320168469135440]](https://discord.com/users/754320168469135440)
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

**🎉・Sunucu Adı : ** _\`$serverName\`_

**🎉・Sunucu ID : ** _\`$guildID\`_

**🎉・Üye Sayısı : ** _\`$membersCount\`_

**🎉・Davet Linki : ** **[TIKLA]($getServerInvite)**

]

$color[RANDOM]

`
});

bot.botLeaveCommand({
  channel: "922002749804118036",

  code: `

$author[Bir Sunucudan Atıldım]

$description[

**🎉・Sunucu Adı : ** _\`$serverName\`_

**🎉・Sunucu ID : ** _\`$guildID\`_

**🎉・Üye Sayısı : ** _\`$membersCount\`_

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

<:developerr:910821172877344778> | Destek Sunucuma Gelmek İçin [Tıkla](https://discord.gg/HNsxyat5Fp)
]
$footer[Komut,$userTag[$authorID] Tarafından Kullanıldı $addTimestamp]
$thumbnail[$userAvatar[$clientID]]
`
});

bot.command({
  name: "ekle",
  code: `
  
  $useChannel[923355420599418891]
  
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

$onlyForIDs[$botOwnerID;]

`
});

bot.command({
  name: "j",
  code: `
  $description[
  • Kodları Görebilmeniz İçin <@&921700732103716895> | Abone Rolü Almanız Gerekiyor 

:bell: Şartlar

<:youtubemubuaq:901867518006788096>  | [𝐀 𝐍 𝐓 𝐄 𝐏 𝐋 𝐈](https://youtube.com/channel/UCfOueEEkuZnRtY6jJdMbcgA) Kanalına Abone Olmanız Gerek.

<:youtubemubuaq:901867518006788096>  | [Vortex Development](https://youtube.com/channel/UC4Uqe3zqtVOLrGG8yLB9eBA)  Kanalına Abone Olmanız Gerek.

:exclamation: Not

<:youtubemubuaq:901867518006788096>  | Saat Gözükücek Şeklinde Ekran Görüntüsü Çekmelisiniz.

<:youtubemubuaq:901867518006788096>  | Ekran Görüntülerini <#924797447367184465>  Kanalına Atmalısınız.
  ]
  $color[RANDOM]
  `
});
bot.loopCommand({
  code: `
$botTyping[31h]
`,
  channel: "923931526234779709",
  executeOnStartup: true,
  every: 111600
});

bot.command({
  name: "param",
  code: `
$color[RANDOM]
$description[

<a:charonspara:895970693332758548> | Hesap İsmi : \`$userTag[$authorID]\`

<a:charonspara:895970693332758548> | Hesap Kuruluş Tarihi : \`$creationDate[$authorID]\`

<a:charonspara:895970693332758548> | Hesap ID'si : \`$authorID\`

<a:charonspara:895970693332758548> | Şuanki Paran : \`$getGlobalUserVar[param;$authorID]\`

<a:charonspara:895970693332758548> | Bankadaki Paran : \`$getGlobalUserVar[banka;$authorID]\`

<a:charonspara:895970693332758548> | Toplam Paran : \`$sum[$getGlobalUserVar[param;$authorID];$getGlobalUserVar[banka;$authorID]]\`

]
$thumbnail[$userAvatar[$authorID]]
$onlyForIDs[$botOwnerID;]

`
});

bot.command({
  name: "cüzdan",
  code: `
$color[RANDOM]
$description[

<a:charonspara:895970693332758548> | Hesap İsmi : \`$userTag[$mentioned[1]]\`

<a:charonspara:895970693332758548> | Hesap Kuruluş Tarihi : \`$creationDate[$mentioned[1]]\`

<a:charonspara:895970693332758548> | Hesap ID'si : \`$mentioned[1]\`

<a:charonspara:895970693332758548> | Şuanki Paran : \`$getGlobalUserVar[param;$mentioned[1]]\`

<a:charonspara:895970693332758548> | Bankadaki Paran : \`$getGlobalUserVar[banka;$mentioned[1]]\`

<a:charonspara:895970693332758548> | Toplam Paran : \`$sum[$getGlobalUserVar[param;$mentioned[1]];$getGlobalUserVar[banka;$mentioned[1]]]\`
l
]
$thumbnail[$userAvatar[$mentioned[1]]]
$argsCheck[>1;<:emoji_71:917309220687314966> | Birini Etiketlemelisin]
$onlyForIDs[$botOwnerID;]

`
});
