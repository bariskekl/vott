module.exports = {

name:"öp",

code:`

$argsCheck[>1;**Birini Etiketle**]

$description[**<@$authorID> ,<@$mentioned[1]> adlı üyeyi öptü uwu]

$color[3aff00]

$image[$randomText[https://cdn.discordapp.com/attachments/775719943978352700/815610676390658108/tenor_5.gif;https://cdn.discordapp.com/attachments/775719943978352700/815611302332465202/tenor_6.gif;https://cdn.discordapp.com/attachments/775719943978352700/815611792846749746/tenor_7.gif]]

$onlyIf[$isBot[$mentioned[1]]!=true; Botu Öpemezsin.]

$onlyIf[$mentioned[1]!=$authorID; Kendini Öpemezsin]

$onlyIf[$mentioned[1]!=;Birini Etiketle Knk] 

`

} 

