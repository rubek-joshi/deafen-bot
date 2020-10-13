const ms = require("ms");

module.exports = {
  name: "timer",
  description: "This is a command to mute/deafen for a certain period of time",
  execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    // Check if user is in voice channel
    if (!voiceChannel) return message.reply("You are not in a voice channel!");

    let time = args[0];

    // check if time has been provided
    if (!time) return message.reply("you didn't specify a time dummy!");

    // check if time is valid
    if (!ms(time))
      return message.reply("invalid time bruh! (Hint: 1s, 2m, 2mins, 3hrs )");

    message.channel
      .send(
        "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/10/among-us-shh.jpg"
      )
      .then((msg) => msg.delete({ timeout: ms(time) }));

    for (const [memberID, member] of voiceChannel.members) {
      member.voice.setMute(true).catch(console.error);
      // member.voice.setDeaf(true).catch(console.error);
    }

    setTimeout(() => {
      //undeafen or unmute each member
      for (const [memberID, member] of voiceChannel.members) {
        member.voice.setMute(false).catch(console.error);
        // member.voice.setDeaf(false).catch(console.error);
      }
    }, ms(time));
  },
};
