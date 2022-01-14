module.exports = {

  name: "envanter",

  aliases: "envanter",

  code: `

$color[RANDOM]

$title[<:8564blurplegift:894092745961009173>・Envanter]

$description[

<:8564blurplegift:894092745961009173>・Şuanki Paran : \`$getGlobalUserVar[para;$authorID]\`

<:8564blurplegift:894092745961009173>・Telefon Adet'in : \`$getGlobalUserVar[telefon;$authorID]\`

<:8564blurplegift:894092745961009173>・Tablet Adet'in : \`$getGlobalUserVar[tablet;$authorID]\`

<:8564blurplegift:894092745961009173> ・Bilgisiyar Adet'in  : \`$getGlobalUserVar[bilgisiyar;$authorID]\`

<:8564blurplegift:894092745961009173> ・Akıllı Saat Adet'in :  \`$getGlobalUserVar[asaat;$authorID]\`

]

$footer[$username tarafından istendi.]

$addTimestamp

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\`  sebebinden karalistedesiniz.] 

`

};

