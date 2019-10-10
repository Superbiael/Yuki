const { RichEmbed } = require("discord.js");

module.exports = {
    name: "say",
    category: "misc",
    description: "Says your message via the bot",
    usage: "mer!say <message>",
    run: (client, message, args) => {
        message.delete();

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000));

        if (args.length < 1)
            return;

        const roleColor = message.guild.me.highestRole.hexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColorv);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}
