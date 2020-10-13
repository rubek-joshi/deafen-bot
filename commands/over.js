module.exports = {
  name: "over",
  description: "This is a command to undeafen",
  execute(message, args) {
    // const requiredRole = message.guild.roles.cache.find(role => role.name === "Shusher")

    if (message.member.permissions.has("DEAFEN_MEMBERS")) {
      message.channel.send("You have permission to deafen");
    } else {
      message.channel.send("You don't have permission");
    }

    if (
      message.member.roles.cache.has("765611475560693831") ||
      message.member.roles.cache.some((r) => r.name === "Shusher")
    ) {
      message.channel.send("Undeafening!");
    } else message.channel.send("You don't have permission");
  },
};
