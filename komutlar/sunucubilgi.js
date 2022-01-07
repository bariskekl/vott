module.exports = {
  name: "sunucu-bilgi",

  code: `

$author[$serverName[$guildID];$serverIcon]

$color[RANDOM]

$description[

🚀・ Sunucu Adı

$serverName[$guildID]

👑・Sunucu Owner

<@$ownerID> | $userTag[$ownerID] 

🆔️・Sunucu ID

$guildID

🔔・Sunucu Oluşturma Tarihi

$creationDate[$guildID]

🔔・Üye Sayısı [$membersCount]

$membersCount 🎁 | $botCount 🤖

🌞・Kanal Sayısı

$channelCount[text] 💭 | $channelCount[voice] 🔊 | $channelCount[category] 💎

📚・Toplam Yasaklı

$banCount

<a:boost:920308527308886057>・Sunucu Seviyesi

<a:boost:920308527308886057>・Boost Sayısı : $serverBoostCount

<a:boost:920308527308886057>・Boost Level : $serverBoostLevel

🌟・Sunucudaki Roller
$guildRoles[mention]

]

`,
};
