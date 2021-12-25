module.exports = {

name:"$alwaysExecute",
code:`
$onlyIf[$getUserVar[talk]>$getUserVar[req];]

$setUserVar[level;$sum[$getUserVar[level];1]]

Tebrikler, <@$authorID> Level atladın! Yeni levelin $sum[$getUserVar[level];1]!

$setUserVar[req;$sum[450;$getUserVar[req]]]]  

`

} 

