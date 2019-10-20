module.exports = {
   name: "cat",
   category: "gacha",
   description: "Random mofumofu out of 2 nyas",
   run: async (client, message, args) => {
   number = 2;
   imageNumber = Math.floor (Math.random() * (number)) + 1;
   return message.channel.send ({files: ["./images/cat/" + imageNumber + ".png"]})
  }
}
