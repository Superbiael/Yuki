module.exports = {
    name: "leaf",
    description: "🍃🍃🍃",
    run: async (client, message, args) => {
    message.react('🍃');
    return message.channel.send("Babe, that me leaf 🍃");
   }
}
