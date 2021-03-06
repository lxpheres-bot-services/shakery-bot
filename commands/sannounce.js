const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot run this command. You must be a HR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Staff Announcement")
		.setColor("#ff4b4b")
		.setDescription(args.join(" "))
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL)
 		.setThumbnail("https://cdn.discordapp.com/attachments/541388616774057984/546105276491759658/asdas.png");
	bot.channels.get("548243923295010833").send({embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when announcing, please check my permissions and try again.");
	});
};
module.exports.help = {
	name: "sannounce",
	usage: "sannounce <txt>",
	description: "Staff announcement command, no ping.",
	longdes: "An announcement command, with no ping.",
	mentionedperm: "MANAGE_ROLES",
	category: "Utility"
};
