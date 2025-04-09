module.exports = {
    name: "messageCreate",
    async execute(message, client) {
        if (!message.channel.id === `1359404696149819412`) return;

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
    }
}