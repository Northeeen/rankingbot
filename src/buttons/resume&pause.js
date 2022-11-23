module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing... try again ? <a:redcheck:1042472321329414235>`, ephemeral: true });

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    

    return inter.reply({ content: `${success ? `Current music ${queue.current.title} paused <a:greencheck:1042472323757920336>` : `Current music ${queue.current.title} resumed <a:greencheck:1042472323757920336>`}`, ephemeral: true});
}