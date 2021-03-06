const { Command } = require("discord.js-commando");
const biggifier = require("@vacuousversifer/discord-big-letterifier");

module.exports = class BiggifyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "biggify",
      aliases: ["bigletter"],
      group: "fun",
      memberName: "biggify",
      description: "The letters grow [big] [BIG] [[BIGGER]]",
      guildOnly: false,
      ownerOnly: false,
      clientPermissions: [],
      userPermissions: [],
      throttling: { usages: 5, duration: 10 },
      args: [
        {
          key: "text",
          prompt: "What do you want to [[SUPER SIZE]]?",
          type: "string"
        }
      ]
    });
  }

  run(message, { text }) {
    message.say(biggifier(text))
      .catch(e => {
        console.log(e);
      });
  }
};
