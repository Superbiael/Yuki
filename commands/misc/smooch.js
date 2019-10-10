module.exports = {
    name: "smooch",
    run: async (client, message, args) => {
        if(message.author.id != "182723698711592960") return;
    number = 3;
    var random = Math.floor (Math.random() * (number)) + 1;
    switch (random) {
      case 1: message.channel.send ("Fufu... You're being affectionate today. Come here."); break;
      case 2: message.channel.send ("My heart races in more ways than one when you do that, you know?"); break;
      case 3: message.channel.send ("I feel like I've received a special reward. I'm glad to be alive."); break;
    }
   }
}