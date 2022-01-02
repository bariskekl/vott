module.exports = {

name:"hackle",

code:`

$argsCheck[>1;Ummmmm Birini etiketlemeyecek misin?]

$onlyIf[$isBot[$mentioned[1]]==false;Botların birbirine savaş açması **Uluslararası Discord Bot Antlaşması** ile engelleniyor.]

$onlyIf[$mentioned[1]!=$authorID;Hacker... Kendini hackleyecek kadar çaresiz değilsin]

$title[Hack!]

$description[

<@$authorID>, <@$mentioned[1]> Kullanıcısını Hackledi! 😱] 

$image[https://media.discordapp.net/attachments/856207352779636748/856812849871847444/tenor.gif] 

$color[00ff22] 


`

} 

