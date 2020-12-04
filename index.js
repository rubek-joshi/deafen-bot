const Discord = require("discord.js");
const bot = new Discord.Client();
require("dotenv-flow").config();
const { prefixes } = require("./config.json");
const fs = require("fs");

bot.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.once("ready", () => {
  console.log("Bot is online biatch!");
  // to display prefix of bot to users
  bot.user.setPresence({
    activity: {
      type: "LISTENING",
      name: prefixes.map((prefix) => prefix).join(" | "),
    },
  });
});

bot.on("message", (message) => {
  // check for any one of the bot prefixes
  let isBotCalled = false;
  prefixes.forEach((prefix) => {
    if (message.content.startsWith(prefix)) return (isBotCalled = true);
  });
  if (!isBotCalled || message.author.bot) return;

  const args = message.content.slice(prefixes.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "ping":
      bot.commands.get("ping").execute(message, args);
      break;
    case "timer":
    case "t":
      bot.commands.get("timer").execute(message, args);
      break;
    case "mute":
    case "m":
      bot.commands.get("mute").execute(message, args);
      break;
    case "unmute":
    case "u":
      bot.commands.get("unmute").execute(message, args);
      break;
    default:
      message.channel.send("Yo Bitch, I don't recognize that command.");
      break;
  }
});

bot.login(process.env.TOKEN);
