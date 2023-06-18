const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('eb星星眼')
		.setDescription('eb星星眼'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1119583210603544596/1a372e1f27dca1be.png');
	},
};