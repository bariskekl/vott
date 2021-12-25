module.exports = {

  name: "$alwaysExecute",

  code: `

  $setGlobalUserVar[afk;]

  $setGlobalUserVar[afkl;]

   $color[00FF00]

  $title[:sunny: | Günaydınlar $username[$authorID], Artık Afk Değilsin]

 $onlyIf[$checkContains[$message;?afk]!=true;]

  $onlyIf[$getGlobalUserVar[afk]!=;]`

};

