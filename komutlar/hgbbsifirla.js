module.exports = {

  name: "hgbb-sıfırla",

  aliases: "hgbb-sıfırla",

  code: `

$color[$random[0;99999]]

$description[

✔・Gelen giden sistemi başarıyla sıfırlandı.]

$onlyPerms[managechannels; <@$authorID>, bu komutu kullanmak için \`Kanalları Yönet\` yetkisine sahip olmalısın.]

$resetServerVar[hgbb]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz. ] 

`

};