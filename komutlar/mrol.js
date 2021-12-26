module.exports = {
  name: "mute-rol",

  code: `

  $title[:ballot_box_with_check:  | Mute Rol Ayarlandı]

  $color[RANDOM]

  $setServerVar[mrol;$mentionedRoles[1]]

  $onlyIf[$mentionedRoles[1]!=;**:negative_squared_cross_mark: | Rol Etiketle.**]

  $onlyPerms[manageroles;**:negative_squared_cross_mark: | Rolleri Yönet İznin Yok.**]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

  `
};
