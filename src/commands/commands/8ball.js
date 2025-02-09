module.exports = {
    data: {
        name: "8ball",
        description: "Sends a random Enchanted 8 Ball answer",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

        const answers = [
            "do",
            "*extremely loud incorrect buzzer*",
            "that's NO good",
            "20",
            "if not then you REALLY messed up",
            "yes! wait, no! uh...",
            "I don't feel like answering that",
            "heck yes!!",
            "oh my god I don't freaking care",
            "I'll pull some strings",
            "...excuse me?",
            "hell naw!!",
            "im not telling you",
            "do not",
            "the issue is your tissue",
            "the glass is half empty.",
            "go for it",
            "qwert yuiop",
            "nope. nope nope nope.",
            "no way, josé!",
            "the glass is half full.",
            "that's harassment, you know.",
            "you're mom (no)",
            "replace enchanted fluid",
            "hello bro",
            "yea",
            "do yall sell crab leg?",
            "what? sorry, i wasn't listening",
            "why do i need to answer that?",
            "wouldn't you like to know",
            "sure",
            "idk",
            "i'm an 8 ball, not a vending machine guy",
            "*extremely quiet correct sound*",
            "nah",
            "no",
            "lalala cant hear you",
            "lol no",
            "snooping as usual, I see."
        ];
        const answer = answers[Math.floor(Math.random() * answers.length)];
    
        await interaction.reply({ content: `${answer}`, ephemeral: false });
      },
}