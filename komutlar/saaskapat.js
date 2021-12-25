module.exports = {

  name: "saas-kapat",

  code: `

    $setServerVar[saas;no]

    $title[☑️ | Sa-As Kapatıldı]

    $description[*Artık Herkesten Selam Almayacağım*]

    $color[FF00FF]

    $footer[| $username Tarafından Kullanıldı.;$userAvatar[$authorID]]

    $onlyPerms[managechannels;**❎ | <@$authorID> Kanalları Yönet Yetkin Yok!**]

    $onlyIf[$getServerVar[saas]!=no;**❎  | <@$authorID> Sa-As Zaten Kapalı.**]   

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

    `

};

