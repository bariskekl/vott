module.exports = {

  name: "çalış",

  aliases: "çalış",

  code: `

$title[]

$description[$thumbnail[https://images-ext-1.discordapp.net/external/P9I6hSyslpu5b6527KeVnTW98zDYOLhYeCjqnZ1AsWQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/886896015431593985/b356293cd67ca0ebd50657b2828e9273.webp]

**__<a:charonspara:895970693332758548>・ İşte Çalışma Bilgilerin;__**

<a:charonspara:895970693332758548>・ **[Çalıştığın Meslek : ](https://discord.gg/YSr5Wq86bW)** **__$randomText[Doktor;Öğretmen;Mimar;Madenci;Bakkalcı;İnşaat Çalışanı;Bankacı;Polis;Esnaf;Manav]__**

<a:charonspara:895970693332758548>・ **[Toplam Kazancın : ](https://discord.gg/YSr5Wq86bW)** **__$random[100;500]__** 🪙

]

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[100;500]];$authorID]

$setGlobalUserVar[populerlik;$sum[$getGlobalUserVar[populerlik;$authorID];$random[10;99]];$authorID]

$cooldown[10m;**__Hey Dostum! Bu Komudu \`%time%\` Sonra Tekrar Kullanabilirsin!__**]

$color[RANDOM]

$footer[$username Tarafından Kullanıldı $addTimestamp]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

  

  

`

};

