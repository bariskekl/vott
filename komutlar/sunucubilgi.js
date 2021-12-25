module.exports = {
  name: "sunucubilgi",

  code: ` $thumbnail[$serverIcon]

  $color[RANDOM]

  $description[
$addField[**Sunucu Bilgileri**;**Kanal Sayısı** \`[$channelCount]\`

\`:loud_sound: $channelCount[voice] | :speech_balloon: $channelCount[text]\`

Rol Sayısı - \`$roleCount\`

Üye Sayısı - \`$membersCount\`

Boost Sayısı - \`$serverBoostCount\`

Boost Seviyesi - \`$serverBoostLevel\`]

$addField[Temel Bilgiler; Sunucu İsmi: 

\`$serverName[$guildID]\`

Sunucu Sahibi: 

\`$username[$ownerID]#$discriminator[$ownerID]\` | <@$ownerID>

Sunucu Oluşturulma Tarihi:

\`$replaceText[$replaceText[$creationDate[$guildID];AM; ;1];PM; ;1]\`]]

`
};
