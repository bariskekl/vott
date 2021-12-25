module.exports = {

name:"$alwaysExecute",

code:`

$setUserVar[talk;$sum[5;$getUserVar[talk]]]

$onlyForServers[$getUserVar[level];]]  

`

} 

