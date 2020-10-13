const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "";

const prefix = "shh ";

const fs = require("fs");

bot.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.once("ready", () => console.log("Bot is online biatch!"));

bot.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  console.log("Command: ", command);
  switch (command) {
    case "ping":
      bot.commands.get("ping").execute(message, args);
      break;
    case "pls":
      bot.commands.get("pls").execute(message, args);
      break;
    case "over":
      bot.commands.get("over").execute(message, args);
      break;
    default:
      console.log("Unrecognized command");
      message.channel.send("Yo Bitch, I don't recognize that command.");
      break;
  }
});

bot.login(token);
