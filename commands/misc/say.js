const { RichEmbed } = require("discord.js");

module.exports = {
    name: "say",
    category: "misc",
    description: "Says your message via the bot",
    usage: "mer!say <message>",
    run: (client, message, args) => {
        message.delete();

        if (args.length < 1)
            return;

        const roleColor = message.guild.me.highestRole.hexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}
