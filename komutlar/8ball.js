module.exports = {
  name: "8ball",
  code: `$color[RANDOM] 
  $description[$jsonRequest[https://api.popcat.xyz/translate?text=$jsonRequest[https://api.popcat.xyz/8ball;answer;]&to=turkish;translated;]]`
};
