const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
console.log("Discord Bot By So.?");
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** تعآل يكيكه . :blue_heart: :pancakes:  https://discord.gg/BhAncDS ** ')


}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
