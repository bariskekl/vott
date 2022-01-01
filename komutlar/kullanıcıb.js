module.exports = {
  name: "kullanıcı-bilgi",
  aliases: [`kullanıcı-bilgi`, `kb`],
  code: `

$if[$message!=$mentioned[1]]

$author[$username[$mentioned[1]]'in Bilgileri;$userAvatar[$mentioned[1]]]

$thumbnail[$userAvatar[$mentioned[1]]]

$description[

🚀 | Kullanıcı İsmi : \`$username[$mentioned[1]]\`

🚀 | Sunucudaki İsmi : \`$nickname[$mentioned[1]]\`

🚀 | Tagı : \`#$discriminator[$mentioned[1]]\`

🚀 | Bot mu : \`$replaceText[$replaceText[$isBot[$mentioned[1]];false;Değil];true;Evet Bot]\`

🚀 | Hesabının Kuruluş Tarihi : \`$creationDate[$mentioned[1]]\`

🚀 | Girdiği Yer :   $replaceText[$replaceText[$replaceText[$replaceText[$platform[$mentioned[1]];mobile;📱 | Telefon;-1];desktop;

💻 | Masaüstü;-1];none;Kişi Çevrimdışı;-1];web;İnternet Tarayıcısı;-1]

🚀 | Oynuyor Kısmı : \`$replaceText[$getCustomStatus[$mentioned[1;yes]];none;Bir Şey Oynamıyor;-1]\`

🚀 | Rolleri : \`$userRoles[$mentioned[1]]\`

🚀 | Aktiflik Durumu : $replaceText[$replaceText[$replaceText[$replaceText[$status[$mentioned[1]];dnd; \`Rahatsız Etmeyin\`;-1];idle;🌜 \`Boşta\`;-1];online; \`Çevrimiçi\`;-1];offline; \`Çevrimdışı\`;-1]
]

$else

$author[$username'in Bilgileri;$userAvatar[$authorID]]

$thumbnail[$userAvatar[$authorID]]

$description[

🚀 | Kullanıcı İsmi : \`$username[$authorID]\`

🚀 | Sunucudaki İsmi : \`$nickname[$authorID]\`

🚀 | Tagı : \`#$discriminator[$authorID]\`

🚀 | Bot mu : \`$replaceText[$replaceText[$isBot[$authorID];false;Değil];true;Evet Bot]\`

🚀 | Hesabının Kuruluş Tarihi : \`$creationDate[$authorID]\`

🚀 | Girdiği Yer :   $replaceText[$replaceText[$replaceText[$replaceText[$platform[$authorID];mobile;📱 | Telefon;-1];desktop;

💻 | Masaüstü;-1];none;Kişi Çevrimdışı;-1];web;İnternet Tarayıcısı;-1]

🚀 | Oynuyor Kısmı : \`$replaceText[$getCustomStatus[$authorID];none;Bir Şey Oynamıyor;-1]\`

🚀 | Rolleri : \`$userRoles[$authorID]\`

🚀 | Aktiflik Durumu : \`$replaceText[$replaceText[$replaceText[$replaceText[$status[$authorID];dnd; \`Rahatsız Etmeyin\`;-1];idle;🌜 \`Boşta\`;-1];online; \`Çevrimiçi\`;-1];offline; \`Çevrimdışı\`;-1]\`

]

$endif

$color[RANDOM]
`
};
