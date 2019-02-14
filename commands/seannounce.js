const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot run this command. You must be a HR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Staff Announcement")
		.setColor("#64bdff")
		.setDescription(args.join(" "))
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL);
	bot.channels.get("541009950697062430").send("@everyone", {embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when announcing, please check my permissions and try again.");
	});
};
module.exports.help = {
	name: "seannounce",
	usage: "seannounce <txt>",
	description: "Staff announcement command using everyone.",
	longdes: "An announcement command using everyone.",
	mentionedperm: "MANAGE_ROLES",
	category: "Utility"
};