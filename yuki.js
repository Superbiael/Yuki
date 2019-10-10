const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");

const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "owo",
            type: "WATCHING"
        }
    });
})

client.on("message", async message => {
    const prefix = "y!";
    msg = message.content.toLowerCase();

    if (message.author.bot) return;
    if (!message.guild) return;
    // if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;

    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command)
        command.run(client, message, args);

        // Commands that don't need a prefix

        if (msg.startsWith ("good morning yuki")) {
            if(message.author.id != "182723698711592960") return message.channel.send("Good morning. I wish I could sleep for 8 hours.");
              return message.channel.send("Ah, Satsujin, I thought you were an angel for a moment...");
         }

         if (msg.startsWith ("hey gays")) {
            return message.channel.send("And Gaku.");
        }

        if (msg.startsWith ("i can't believe ryo is dead")) {
            return message.channel.send("Finally.");
        }
            
        if (msg.startsWith ("i'm gonna munch")) {
             return message.channel.send("I'm gonna crunch.");
        }
            
        if (msg.startsWith ("yuki if you're out there")) {
            return message.channel.send("I'm right here.");
        }
            
        if (msg.startsWith ("good night yuki")) {
            return message.channel.send("Good kids should head to sleep early.");
        }

        if (msg.startsWith ("i love you yuki")) {
            if(message.author.id != "182723698711592960") return;
            number = 7;
            var random = Math.floor (Math.random() * (number)) + 1;
            switch (random) {
              case 1: message.channel.send ("I love you too, Satsujin. I don't know how to put into words how happy I am with you."); break;
              case 2: message.channel.send ("I would like you to keep loving me, and only me, forever from now on. And I'll make sure to keep charming you."); break;
              case 3: message.channel.send ("I know. I love you too, darling~"); break;
              case 4: message.channel.send ("Being with you is so much fun. Thank for you everything, now and forever."); break;
              case 5: message.channel.send ("You've shared your warmth with me, and in return I want to make you happy."); break;
              case 6: message.channel.send ("I'm really thankful for all the feelings you told me. From now on, always love me and my music."); break;
              case 7: message.channel.send ("I hope you'll continue falling in love with this new me, and his new melodies."); break;
            }
           }
});



client.login(process.env.TOKEN);
