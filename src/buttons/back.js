module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing... try again ? <a:redcheck:1042472321329414235>`, ephemeral: true });

    if (!queue.previousTracks[1]) return inter.reply({ content: `There was no music played before ${inter.member}... try again ? <a:redcheck:1042472321329414235>`, ephemeral: true });

    await queue.back();

    inter.reply({ content:`Playing the **previous** track <a:greencheck:1042472323757920336>`, ephemeral: true});
}
