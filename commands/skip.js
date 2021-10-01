module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    const Discord = require('discord.js')
    if(!message.member.voice.channel){
        let nms = new Discord.MessageEmbed()
        .setTitle("You need to join the voice chat first!")
        .setColor("GREEN")
    return message.channel.send(nms)}
    if(!serverQueue){
        let npl = new Discord.MessageEmbed()
        .setTitle("There is nothing to skip!")
        .setColor("GREEN")
    return message.channel.send(npl)}
         serverQueue.connection.dispatcher.end();
}

module.exports.config = {
    name: "skip",
    aliases: ["s", "sk"],
}