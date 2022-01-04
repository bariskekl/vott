module.exports = {
  name: "ban-list",
  code: `
$author[$serverName[$guildID];$serverIcon]
  $color[RANDOM]
  $description[
  $replaceText[$djsEval[message.guild.fetchBans() .then(x => x.map(member => member.user.tag + " " + "-" + " " +member.user.id).join("NJOİNN"));yes];NJOİNN;
;-1]]

$onlyPerms[ban;Komutu Kullanmak İçin \`Üyeleri Banla\` İznine Sahip Olman Gerek]
`
};
