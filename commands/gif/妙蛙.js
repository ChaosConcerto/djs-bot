const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('!妙蛙')
		.setDescription('妙蛙種子!'),
	async execute(interaction) {
		await interaction.reply('https://cdn.discordapp.com/attachments/1020572202917167126/1098587614119993404/3.gif');
	},
};