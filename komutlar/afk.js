module.exports = {
  name: "afk",

  code: `

  $setGlobalUserVar[afk;$message]

  $color[00FF00]

  $title[:ballot_box_with_check:  | $username[$authorID] Artık Biri Seni Etiketlediğinde \`$message\` Diyeceğim.]

  $argsCheck[>1;**:negative_squared_cross_mark:  | <@$authorID> Bir Sebep Belirtmelisiniz.**]



$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 

`,
};
