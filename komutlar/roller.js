module.exports = {

  name: "roller",

  code: `

$author[$serverName;$serverIcon]

$description[$replaceText[$djsEval[message.guild.roles.cache.filter(x => x.name !== '@everyone').map(x => "<@&" + x.id + ">" + " " + "**(" + x.members.size + ")**").join("NJOİNN");yes];NJOİNN;

;-1]]

$color[$getRoleColor[$highestServerRole]]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`

};

