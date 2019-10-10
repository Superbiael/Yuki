module.exports = {
    name: "clear",
    aliases: ["c"],
    description: "Returns all commands, or one specific command info | alias: h",
    usage: "[y!clear <# of messages to delete>]",
    run: async (client, message, args) => {
    if(message.author.id != "182723698711592960") return;
    if(!args[0]) return message.channel.send("oof.");
    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(3000));
   });
  }
}
