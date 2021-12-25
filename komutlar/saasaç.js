module.exports = {

    name: "saas-aç",

    code: `

    $setServerVar[saas;yes]

    $title[:ballot_box_with_check:  | Sa-As Açıldı]

    $description[*Artık Herkesten Selam Alacağım*]

    $color[00FF00]

    $footer[| $username Tarafından Kullanıldı.;$userAvatar[$authorID]]

    $onlyPerms[managechannels;**:negative_squared_cross_mark:  | <@$authorID> Kanalları Yönet Yetkin Yok!**]

    $onlyIf[$getServerVar[saas]!=yes;**:negative_squared_cross_mark:  | <@$authorID> Sa-As Zaten Açık.**]   

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 

    `

}