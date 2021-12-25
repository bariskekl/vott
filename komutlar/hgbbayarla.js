module.exports = {

  name: "hgbb-ayarla",

  aliases: "hgbb-ayarla",

  code: `

$color[$random[0;99999]]

$description[

✔・Gelen giden kanalı <#$mentionedChannels[1]> olarak başarıyla ayarlandı.]

$onlyPerms[managechannels; <@$authorID>, bu komutu kullanmak için \`Kanalları Yönet\` yetkisine sahip olmalısın.]

$setServerVar[hgbb;$mentionedChannels[1]]

$suppressErrors

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};