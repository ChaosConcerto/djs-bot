const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('狸生火')
		.setDescription('狸生火'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1119322901456367687/Untitled-video-Made-with-Clipc-unscreen_1.gif');
	},
};