module.exports = {

  name: "unban",

  code: `
$author[$userTag[$message[1];$userAvatar[$message[1]]]]
$color[RANDOM]
$unban[$message[1]]
$description[
\`$userTag[$message[1]]\` İsimli Kullanıcın Banı Başarıyla Kaldırıldı Banlanma Sebebi İse \`$getBanReason[$message[1]]\`
]
$footer[$addTimestamp]
$onlyPerms[ban;<:emoji_71:917309220687314966> | Bu Komutu Kullanamazsın Kullanmak İçin \°
`

};

