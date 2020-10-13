module.exports = {
  name: "unmute",
  description: "This is a command to unmute/undeafen",
  execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    // Check if user is in voice channel
    if (!voiceChannel) return message.reply("You are not in a voice channel!");

    // const requiredRole = message.guild.roles.cache.find(role => role.name === "Shusher")

    /* if (message.member.permissions.has("DEAFEN_MEMBERS")) {
      message.channel.send("You have permission to deafen");
    } else {
      message.channel.send("You don't have permission");
    } */

    /* if (
      message.member.roles.cache.has("765611475560693831") ||
      message.member.roles.cache.some((r) => r.name === "Shusher")
    ) {
      message.channel.send("Undeafening!");
    } else message.channel.send("You don't have permission"); */

    message.reply("Unmuting...");
    for (const [memberID, member] of voiceChannel.members) {
      member.voice.setMute(false).catch(console.error);
      // member.voice.setDeaf(false).catch(console.error);
    }
  },
};
