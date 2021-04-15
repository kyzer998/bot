const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const DIG = require("discord-image-generation");

module.exports = {
    name: "greyscale",
    category: "Image",
    aliases: ["gs"],
    description: "Convertit l'avatar d'un utilisateur en filtre de niveaux de gris !!",
    example: `${config.Prefix}greyscale @Dinav`,

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`${emoji.Error}  Fournir un utilisateur valide   !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        let img = await new DIG.Greyscale().getImage(avatar);

        let attach = new Discord.MessageAttachment(img, "greyscale.png");

        message.channel.send(attach)
    }
}