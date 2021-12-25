module.exports = {
  name: "rank",

  code: `

$color[00001]

$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]%23$discriminator[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[level;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[talk;$mentioned[1;yes]]&nextlevelxp=$getUserVar[req;$mentioned[1;yes]]&previouslevelxp=0&custombg=$getUserVar[level]&xpcolor=000000&isboosting=false]  

`
};
