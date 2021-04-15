const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const pet = require('pet-pet-gif');

module.exports = {
    name: "pet",
    description: "Animaux de compagnie de l'utilisateur fourni",
    example: `${config.Prefix}pet @Dinav`,
    category: "Image",

    run: async(client, message, args) => {
        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.member;

        if(!user) return message.reply(`${emoji.Error}  Fournir un utilisateur valide   !!`)

        try {
            const petting = await pet(user.displayAvatarURL({ format: "png", size: 1024 }));
            const petpet = new Discord.MessageAttachment(petting, "pet.gif");

            message.channel.send(petpet)
        } catch(error) {
            message.reply(`${emoji.Error} Impossible de caresser désolé :(`)
        }
        
    }
}