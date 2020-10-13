module.exports = {
  name: "pls",
  description: "This is a command to deafen",
  execute(message, args) {
    message.channel.send("Deafening!");
  },
};
