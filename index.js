const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "";

bot.on("ready", () => console.log("Bot is ready biatch!"));

bot.login(token);
