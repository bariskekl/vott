module.exports = {

  name: "market",

  aliases: "market",

  code: `

$thumbnail[$authorAvatar]

$color[RANDOM]

$title[💎・Market]

$description[

<:8564blurplegift:894092745961009173>・Şuanki Paran : \`$getGlobalUserVar[param;$authorID]\`

<:8564blurplegift:894092745961009173>・Telefon ・\`5000\` TL ・ Almak İçin \`+telefon-al\`

<:8564blurplegift:894092745961009173>・Tablet ・\`7000\` TL ・ Almak İçin \`+tablet-al\`

<:8564blurplegift:,894092745961009173>・Bilgisiyar ・\`10000\` TL ・ Almak İçin \`+bilgisiyar-al\`

<:8564blurplegift:894092745961009173>・Akıllı Saat ・\`15000\` TL ・ Almak İçin \`+asaat-al\`

**<:8564blurplegift:894092745961009173>・Not : Envanterinize Bakmak İçin \`+envanter\` Yazmanız Yeterlidir**

]

$footer[$username]

$addTimestamp

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

