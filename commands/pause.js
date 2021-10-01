module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    const Discord = require('discord.js')
    if(!serverQueue){
        let npl = new Discord.MessageEmbed()
        .setTitle("There is no music currently playing!")
        .setColor("GREEN")
        return message.channel.send(npl)
    }
    if(!message.member.voice.channel){
        let nvc = new Discord.MessageEmbed()
        .setTitle("You are not in the voice channel!")
        .setColor("GREEN")
        return message.channel.send(nvc)
    }
    if(serverQueue.dispatcher.paused){
        let arp = new Discord.MessageEmbed()
        .setTitle("This song is already paused")
        .setColor("GREEN")
        return message.channel.send(arp)
    }
        serverQueue.dispatcher.pause()
        let msg = new Discord.MessageEmbed()
                    .setTitle("The sound has been puased!")
                    .setColor("GREEN")
                return message.channel.send(msg);
}

module.exports.config = {
    name: "pause",
    aliases: ["ps"],
}