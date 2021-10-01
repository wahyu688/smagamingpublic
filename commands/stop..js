module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    const Discord = require('discord.js')
    if(!serverQueue){
        let nms = new Discord.MessageEmbed()
        .setTitle("There is no music currently playing!")
        .setColor("GREEN")
    return message.channel.send(nms)}
    if(!message.member.voice.channel != message.guild.me.voice.channel){
        let npl = new Discord.MessageEmbed()
        .setTitle("You are not in the voice channel!")
        .setColor("GREEN")
    return message.channel.send(npl)}
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
}

module.exports.config = {
    name: "stop",
    aliases: ["st"],
}