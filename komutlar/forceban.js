module.exports = {
  name: "force-ban",
  code: `
$ban[$message[1]]
$color[RANDOM]
$description[
<:emoji_70:917309183341236244> | \`$userTag[$message[1]\` İsimli Kullanıcı \`$userTag[$authorID] Tarafından Banlandı]
$onlyPerms[admin;{description:<:emoji_71:917309220687314966> | Bu Komutu Kullanmak İçin \`Yönetici\` İznin Olmalı}{color:RANDOM}]
$argsCheck[>1;{description:<:emoji_71:917309220687314966> | Bir Kullanıcı IDsi Girmelisin}{color:RANDOM}]

`,
};
