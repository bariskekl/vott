module.exports = {

  name: "mute-rol",

  code: `

  $title[:ballot_box_with_check:  | Mute Rol Ayarlandı]

  $color[RANDOM]

  $setServerVar[mrol;$mentionedRoles[1]]

  $onlyIf[$mentionedRoles[1]!=;**:negative_squared_cross_mark: | Rol Etiketle.**]

  $onlyPerms[admin;**:negative_squared_cross_mark: | Admin Değilsin.**]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

  `

};

