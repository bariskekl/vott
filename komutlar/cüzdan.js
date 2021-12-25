module.exports = {

  name: "cüzdan",

  aliases: "cüzdan",

  code: `

$color[RANDOM]

$description[

<a:charonspara:895970693332758548>・<@$mentioned[1;yes]> **Üyesinin Üstünde \`$getGlobalUserVar[param;$mentioned[1;yes]]\` TL'si Var**

<a:charonspara:895970693332758548>・<@$mentioned[1;no]> **Üyesinin Bankasında \`$getGlobalUserVar[banka;$mentioned[1;no]]\` TL'si Var**]

$onlyIf[$mentioned[1]!=;$getGlobalUserVar[param;$authorID]]

$argsCheck[>1;<:emoji_71:917309220687314966> | Parasına bakmak istediğiniz kişiyi etiketleyin]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

