module.exports = {
  name: "yetkilerim",

  code: `
  $thumbnail[$authorAvatar]

$title[$username[$authorID]#$discriminator[$authorID]]

  $color[RANDOM] 

  $description[

**Yönetici - $replaceText[$replaceText[$hasPerms[$authorID;admin];false;🔴;-1];true;🟢;-1]

Sunucuyu Yönet - $replaceText[$replaceText[$hasPerms[$authorID;manageserver];false;🔴;-1];true;🟢;-1]

Üyeleri Yasaklama - $replaceText[$replaceText[$hasPerms[$authorID;ban];false;🔴;-1];true;🟢;-1] 

Üyeleri Atma - $replaceText[$replaceText[$hasPerms[$authorID;kick];false;🔴;-1];true;🟢;-1]

Kanalları Yönet - $replaceText[$replaceText[$hasPerms[$authorID;managechannels];false;🔴;-1];true;🟢;-1] 

Rolleri Yönet - $replaceText[$replaceText[$hasPerms[$authorID;manageroles];false;🔴;-1];true;🟢;-1]

WebHookları Yönet - $replaceText[$replaceText[$hasPerms[$authorID;managewebhooks];false;🔴;-1];true;🟢;-1] 

Mesajları Yönet - $replaceText[$replaceText[$hasPerms[$authorID;managemessages];false;🔴;-1];true;🟢;-1] 

Denetim Kaydını Görüntüle - $replaceText[$replaceText[$hasPerms[$authorID;viewauditlog];false;🔴;-1];true;🟢;-1] 

Kullanıcı Adlarını Yönet - $replaceText[$replaceText[$hasPerms[$authorID;managenicknames];false;🔴;-1];true;🟢;-1]**]
`
};
