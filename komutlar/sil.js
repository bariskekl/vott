module.exports = {
  name: "sil",

  code: `

$clear[$message]

$color[RANDOM]
$title[$userTag[$authorID]]
$description[

📚 | <@$authorID> Başarıyla \`$message\` Tane Mesaj Silindi]

$onlyPerms[managemessages;🧭 | Bu Komutu Kullanman İçin \`Mesajları Yönet\` İznine Sahip Olman Gerek]

$onlyBotPerms[managemessages; 🧭 | Kullanman İçin Bana \`Mesajları Yönet İzni\` Vermelisin]

$globalCooldown[30s;🧭 | <@$authorID> Yavaş Ol Kanka Bunu Kullanmak İçin %time% Beklemelisin]

$footer[Komut,$userTag[$authorID] Tarafından Kullanıldı $addTimestamp]

$thumbnail[$userAvatar[$authorID]]

$argsCheck[>1;🧭 | Bi Miktar Girmelisin]
$deleteIn[5s]
$deletecommand
`
};
