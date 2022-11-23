module.exports = {
    name: 'skip',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`No music currently playing ${inter.member}... try again ? <a:redcheck:1042472321329414235>`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `Current music ${queue.current.title} skipped <a:greencheck:1042472323757920336>` : `Something went wrong ${inter.member}... try again ? <a:redcheck:1042472321329414235>`});
    },
};