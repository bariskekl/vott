module.exports = {
  name: "sunucu-bilgi",

  code: `

$author[$serverName[$guildID];$serverIcon]

$color[RANDOM]

$description[

<:emoji_47:927274402574372884>・Sunucu Adı

$serverName[$guildID]

<:emoji_51:927275737696862251>・Sunucu Owner

<@$ownerID> | $userTag[$ownerID] 

<:emoji_69:920216573552263200>・Sunucu ID

$guildID

<a:LASRP_Notify:875491455974637628>・Sunucu Oluşturma Tarihi

$creationDate[$guildID]

<:tatlimisir:908393466847985726>・Üye Sayısı [$membersCount]

$membersCount 🎁 | $botCount 🤖

<a:patpat:875491388039524352>・Kanal Sayısı

$channelCount[text] 💭 | $channelCount[voice] 🔊 | $channelCount[category] 💎

<a:emoji_56:929028007748857906>・Toplam Yasaklı

$banCount

<a:boost:920308527308886057>・Sunucu Seviyesi

<a:boost:920308527308886057>・Boost Sayısı : $serverBoostCount

<a:boost:920308527308886057>・Boost Level : $serverBoostLevel

<a:emoji_54:928670862134112286>・Sunucudaki Roller
$guildRoles[mention]

]

`,
};
