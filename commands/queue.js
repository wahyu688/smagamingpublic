module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    const Discord = require('discord.js')
        if(!serverQueue){
                let nms = new Discord.MessageEmbed()
                    .setTitle("There is no music currently playing!")
                    .setColor("GREEN")
                return message.channel.send(nms)};
        if(!message.member.voice.channel){
            let npl = new Discord.MessageEmbed()
                    .setTitle("You are not in the voice channel!")
                    .setColor("GREEN")
                return message.channel.send(npl)}

        let nowPlaying = serverQueue.songs[0];
        let qMsg = `Now playing : ${nowPlaying.title}\n-------------------------\n`
        
        for(var i = 1; i < serverQueue.songs.length; i++){
            qMsg += `${i}. ${serverQueue.songs[i].title}\n`
        }
        let msg = new Discord.MessageEmbed()
                    .setTitle("Queue")
                    .setDescription(qMsg + 'Requested by: ' + message.author.username)
                    .setColor("GREEN")
                return message.channel.send(msg);

        

        // message.channel.send('```' + qMsg + 'Requested by: ' + message.author.username + '```')
}

module.exports.config = {
    name: "queue",
    aliases: ["q"],
}