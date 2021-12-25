module.exports = {

  name: "banlist",


  code: `

  $replaceText[$djsEval[message.guild.fetchBans() .then(x => x.map(member => member.user.tag + " " + "~" + " " +member.user.id).join("NJOİNN"));yes];NJOİNN;

;-1]

$onlyPerms[admin;Bu komutu kullanabailmek için **Yönetici** iznine sahip olman gerek.]

  `

} 

