module.exports = {

  name: "$alwaysExecute",

  code: `

  $setGlobalUserVar[afkl;$getGlobalUserVar[afkl;$mentioned[1]] • <@$authorID>;$mentioned[1]]

 $color[00FF00]

  $title[:zzz: | $username[$mentioned[1]] Şu An, \`$getGlobalUserVar[afk;$mentioned[1]]\` Sebebi İle AFK Lütfen Rahatsız Etme.]

  $deletecommand

  $onlyIf[$getGlobalUserVar[afk;$mentioned[1]]!=;]

  `

};

