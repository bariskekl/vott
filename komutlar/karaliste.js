module.exports = {

  name: "karaliste",

  code: ` 

$if[$message[1]==al] 

$author[Üye Kara Listeye Alındı;$client[avatar]] 

$description[**_\`$usertag[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];<;;-1];@;;-1];!;;-1];>;;-1]]\`_ Başarılı bir şekilde kara listeye Alındı.** **Sebebi:** _\`$messageSlice[2]\`_ ] 

$color[RANDOM] 

$setGlobalUserVar[kl;true;$replaceText[$replaceText[$replaceText[$replaceText[$message[2];<;;-1];@;;-1];!;;-1];>;;-1]] 

$setGlobalUserVar[ksebep;$messageSlice[2];$replaceText[$replaceText[$replaceText[$replaceText[$message[2];<;;-1];@;;-1];!;;-1];>;;-1]] 

$onlyIf[$messageSlice[2]!=;Bir Sebep Yaz.] 

$endif 

$if[$message[1]==çıkar] 

$author[Üye Kara Listeden Çıkarıldı;$client[avatar]] 

$description[**_\`$usertag[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];<;;-1];@;;-1];!;;-1];>;;-1]]\`_ Başarılı bir şekilde kara listeden çıkarıldı.** ] 

$color[RANDOM]

$setGlobalUserVar[kl;false;$replaceText[$replaceText[$replaceText[$replaceText[$message[2];<;;-1];@;;-1];!;;-1];>;;-1]] 

$setGlobalUserVar[ksebep;;$replaceText[$replaceText[$replaceText[$replaceText[$message[2];<;;-1];@;;-1];!;;-1];>;;-1]]

$endif 

$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];<;;-1];@;;-1];!;;-1];>;;-1]!=;Lütfen birini etiketleyin ya da ID'sini giriniz.] 

$onlyForIDs[$botOwnerID;Bu komut için yeterli yetkin yok] 

`

};

