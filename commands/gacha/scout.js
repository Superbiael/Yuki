module.exports = {
    name: "scout",
    category: "gacha",
    description: "Solo yolo",
    run: async (client, message, args) => {
        number = 62;
        imageNumber = Math.floor (Math.random() * (number)) + 1;
        const msg = await message.channel.send ({files: ["./images/scout/" + imageNumber + ".png"]});
    }
}
