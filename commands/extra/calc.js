const math = require('mathjs');
const { MessageEmbed } = require('discord.js');

const Discord = require('discord.js');

module.exports = {
    name: "calc",
    description: "Get the answer to a math problem",


    async run (client, message, args){

        if (!args[0]) {
            const embed = new MessageEmbed()
                .setTitle('Type question!')
                .setDescription('hx!calc <question>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculator')
        .addField('Question:', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer:', `\`\`\`css\n${resp}\`\`\``)
        .setFooter(message.author.username, message.author.displayAvatarURL())

        message.channel.send(embed);

    }
}