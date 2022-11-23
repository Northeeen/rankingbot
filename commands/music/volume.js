const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'adjust',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'the amount volume',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? <a:redcheck:1042472321329414235>`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.volume === vol) return inter.reply({ content: `The volume you want to change is already the current one ${inter.member}... try again ? <a:redcheck:1042472321329414235>`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `The volume has been modified to **${vol}**/**${maxVol}**% 🔊` : `Something went wrong ${inter.member}... try again ? <a:redcheck:1042472321329414235>`});
    },
};