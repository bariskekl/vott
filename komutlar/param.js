module.exports = {

  name: "param",

  aliases: "param",

  code: `

$color[$random[0;99999]]

$description[

<a:charonspara:895970693332758548>・<@$mentioned[1;yes]> **Üyesinin Üstünde \`$getGlobalUserVar[param;$mentioned[1;yes]]\` TL'si Var**

<a:charonspara:895970693332758548>・<@$mentioned[1;yes]> **Üyesinin Bankasında \`$getGlobalUserVar[banka;$mentioned[1;yes]]\` TL'si Var**]

$onlyIf[$message==;]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`

};

