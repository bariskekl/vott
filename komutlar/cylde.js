module.exports = {

  name: "cylde",

  aliases: "cylde",

  code: `

$image[https://ctk-api.herokuapp.com/clyde/$replaceText[$message; ;%20;-1]]

$argsCheck[>1; <@$authorID>, bir yazı yazmalısın.]

$suppressErrors

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

