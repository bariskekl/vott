module.exports = {
  name: "ekonomi",

  aliases: "ekonomi",

  code: `

$color[RANDOM]

$description[

__Ekonomi Menüsü__

» | \`?param\` → Paranıza Bakarsınız.

» | \`?cüzdan\` → Etiketlediğiniz Kişinin Parasına Bakarsınız.

» | \`?yatır\` → Bankaya Para Yatırırsınız..

» | \`?çek\` → Bankadan Para Çekersiniz.

» | \`?para-gönder\` → Etiketlediğiniz Kişiye Para Gönderirsiniz.

» | \`?çalış\` → Çalışarak Para Kazanırsın⁸z.

» | \`?dilen\` → Dilenerek Para Kazanırsınız.

» | \`?cf\` → Cf Oynayarak Para Kazanırsınız.

» | \`?balık-tut\` → Balık Tutarsınız.

» | \`?oy\` → Oy Vererek Para Kazanırsınız.

» | \`?odun-kes\` → Odun Keserek Para Kazanırsınız.

» | \`?market\` → Marketten Alışveriş Yaparsınız.

» | \`?envanter\` → Marketten Aldığınız Eşyalara Bakarsınız.

» | \`?sıralama\` → Global Para Sıralamasına Bakarsınız.

» | \`?kazı-kazan\` → Kazı Kazan İle Para Kazanırsınız.


]

$thumbnail[$authorAvatar]

$footer[Bu Komut,$username Tarafından Kullanıldı $addTimesTamp]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`
};
