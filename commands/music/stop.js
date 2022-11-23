module.exports = {
    name: 'stop',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`No music currently playing ${inter.member}... try again ? <a:redcheck:1042472321329414235>`, ephemeral: true });

        queue.destroy();

        inter.reply({ content: `Music stopped intero this server, see you next time <a:greencheck:1042472323757920336>`});
    },
};