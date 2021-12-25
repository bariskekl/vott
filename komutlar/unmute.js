module.exports = {

  name: "unmute",

  code: `

$takeRole[$mentioned[1];$getServerVar[mrol]]

$title[📍・Bir Kullanıcının Mutesi Açıldı]

$description[

**🎊・Mutesi Kalkan** :  <@$mentioned[1]>

**🎊・Muteyi Kaldıran** :  <@$authorID>]

$onlyBotPerms[manageroles;**:negative_squared_cross_mark:  | Rolleri Yönet Yetkim Yok.**]

$onlyPerms[manageroles;**:negative_squared_cross_mark: | Rolleri Yönet Yetkin Yok.**]

$onlyIf[$getServerVar[mrol]!=;**:negative_squared_cross_mark: | Bir Mute Rol Ayarlaman Lazım.**]

$onlyIf[$hasRole[$mentioned[1];$getServerVar[mrol]]==true;**:negative_squared_cross_mark: | Bu Kullanıcının Mutesi Yok!**]

$onlyIf[$mentioned[1]!=;**:negative_squared_cross_mark: | Bir Kullanıcı Etiketle.**]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

`

};

