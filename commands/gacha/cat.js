module.exports = {
    name: "cat",
    category: "gacha",
    description: "Random cat",
    run: async (client, message, args) => {
    number = 2;
    var random = Math.floor (Math.random() * (number)) + 1;
    switch (random) {
      case 1: message.channel.send ({files:["./images/cat.png"]}); break;
      case 2: message.channel.send ({files:["./images/eat_veggie.png"]}); break;
   }
}}
