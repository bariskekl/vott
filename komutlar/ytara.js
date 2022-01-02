module.exports = {

name:"yt-ara",

code:`

$onlyIf[$noMentionMessage!=;**:negative_squared_cross_mark: | YouTube'da Aramak İstediğin Şeyi Yaz**] 

$title[YouTube Araman Burda]

$description[ [Araman İçin Tıkla](https://www.youtube.com/search?q=$replaceText[$noMentionMessage; ;+;-1])] 

$color[$random[1;999999]]

`

} 

