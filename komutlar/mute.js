module.exports = {

  name: "mute",

  code: `

$giveRole[$mentioned[1];$getServerVar[mrol]]

$title[📍・Bir Kullanıcı Mutelendi]

$description[

**🎊・Mutelenen** :  <@$mentioned[1]>

**🎊・Muteleyen** :  <@$authorID>

**🎊・Sebep** :  $noMentionMessage]

$onlyBotPerms[manageroles;**:negative_squared_cross_mark:| Rolleri Yönet Yetkim Yok.**]

$onlyPerms[manageroles;**:negative_squared_cross_mark: | Rolleri Yönet Yetkin Yok.**]

$onlyIf[$getServerVar[mrol]!=;**:negative_squared_cross_mark: | Bir Mute Rol Ayarlaman Lazım.**]

$onlyIf[$hasRole[$mentioned[1];$getServerVar[mrol]]==false;**:negative_squared_cross_mark: | Bu Kullanıcı Zaten Muteli**]

$onlyIf[$mentioned[1]!=;**:negative_squared_cross_mark:  | Bir Kullanıcı Etiketle.**]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

