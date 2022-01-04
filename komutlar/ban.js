module.exports = {
  name: "ban",
  code: `
$dm[$mentioned[1]]
$ban[$noMentionMessage;$mentioned[1]] 
$color[RANDOM]
$description[
<@$mentioned[1]> \`$serverName\` İsimli Sunucudan \`$noMentionMessage\` Sebebi İle \` Banlandın]
$channelSendMessage[$channelID;
<@$mentioned[1]> Başarıyla \`$noMentionMessage\` Sebebi İle Banlandı]
`
};
