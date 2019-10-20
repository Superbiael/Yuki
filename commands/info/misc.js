const Discord = require("discord.js");

module.exports = {
    name: "morecmd",
    category: "info",
    description: "Special commands that do not require a prefix (mer!)",
    run: async (client, message, args) => {
            let embed = new Discord.RichEmbed()
            .setDescription("These commands are not cap-sensitive.")
            .setColor("#00ff67")
            .addField("Command phrases:", "`Good night Yuki` | `Good morning Yuki` | `Hey Gays`\n`I can't believe Ryo is dead ` ")
            .setFooter("Some have multiple possible respones.");
            message.channel.send({embed: embed})
        }
    }
