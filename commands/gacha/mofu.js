module.exports = {
    name: "mofu",
    aliases: ["mofu"],
    category: "gacha",
    description: "Random mofumofu out of 9 mofus",
    run: async (client, message, args) => {
    number = 9;
    imageNumber = Math.floor (Math.random() * (number)) + 1;
    return message.channel.send ({files: ["./images/mofumofu/" + imageNumber + ".png"]})
   }
}