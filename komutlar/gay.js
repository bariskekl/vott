module.exports = {

  name: "gay",

  aliases: "gay",

  code: `

$footer[] 

$color[0000FF]

$title[**Yüzde kaç gaysın?**]

$description[$username 🌝 $message is $random[1;105]% Gay]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

