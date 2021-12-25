module.exports = {
  name: "banlist",
  code: `
  $title[$serverName[$guildID]]
  $color[RANDOM]
  $description[
  $replaceText[$djsEval[message.guild.fetchBans() .then(x => x.map(member => member.user.tag + " " + "-" + " " +member.user.id).join("NJOİNN"));yes];NJOİNN;
;-1]]
$thumbnail[$serverIcon]
$onlyPerms[ban;Komutu Kullanmak İçin \`Üyeleri Banla\` İznine Sahip Olman Gerek
`
}