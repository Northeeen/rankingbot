module.exports = {
    name: 'pause',
    description: 'pause the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? <a:redcheck:1042472321329414235>`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: 'The track is currently paused!', ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `The track is currently paused, ${inter.member}... try again ? <a:redcheck:1042472321329414235>`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `Current music ${queue.current.title} paused <a:greencheck:1042472323757920336>` : `Something went wrong ${inter.member}... try again ? <a:redcheck:1042472321329414235>` });
    },
};
