module.exports = {
    name: "maf",
    category: "misc",
    description: "🔫",
    run: async (client, message, args) => {
    message.react('🔫');
    return message.channel.send("maf maf");
   }
}