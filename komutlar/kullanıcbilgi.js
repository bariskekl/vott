module.exports = {
  name: "kullanıcı-bilgi",

  code: `

$if[$isNumber[$message]==false] 

$color[$getRoleColor[$highestRole[$mentioned[1;yes]]]] 

$author[$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]] 

$description[<@$mentioned[1;yes]>] 

$addField[📁 | Roller [$userRoleCount[$mentioned[1;yes]]];$userRoles[$mentioned[1;yes];mentions]] 

$addField[🗓️ | Kurulma;$creationDate[$mentioned[1;yes]]] 

$addField[🗓️ | Sunucuya Katılma;$memberJoinedDate[$mentioned[1;yes]]]

$thumbnail[$userAvatar[$mentioned[1;yes]]]

$footer[ID: $mentioned[1;yes]] 

$addTimestamp

$else

$color[$getRoleColor[$highestRole[$mentioned[1;yes]]]] 

$author[$userTag[$message];$userAvatar[$message]] 

$description[<@$message>] 

$addField[📁 | Roller [$userRoleCount[$message]];$userRoles[$message;mentions]] 

$addField[🗓️ | Kurulma;$creationDate[$message]] 

$addField[🗓️ | Sunucuya Katılma;$memberJoinedDate[$message]]

$thumbnail[$userAvatar[$message]]

$footer[ID: $message]

$addTimestamp 

$endif
`
};
