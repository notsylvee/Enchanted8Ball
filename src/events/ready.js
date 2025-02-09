const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    client.user.setPresence({
      status: "dnd",
      activities: [
        {
          type: ActivityType.Custom,
          name: "customstatus",
          state: "i'm an 8 ball, not a vending machine guy",
        },
      ],
    });

    const updates = await client.channels.fetch("1265926416168517693");
    updates.send("Update live!");
  },
};