module.exports = {
    name: "leaf",
    description: "🍃🍃🍃",
    category: "misc",
    run: async (client, message, args) => {
    message.react('🍃');
    return message.channel.send("Babe, that me leaf 🍃");
   }
}
