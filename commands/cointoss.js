module.exports.run = async (bot, message) => {
const premiumaccess = require("/app/bot.js");
if (message.author.role) includes premiumaccess {
		message.reply(`You flipped ${(Math.floor(Math.random() * 2)) ? "heads" : "tails"}!`);
	}
};
module.exports.help = {
	name: "cointoss",
	usage: "cointoss",
	description: "A fun command that flips a coin/",
	longdes: "Gives you either heads or tails..",
	mentionedperm: "PREMIUMACCESS",
	category: "Premium"
};
