const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('嘿芬')
		.setDescription('嘿芬'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1103483163323408434/3e5d1ac7-9a6a-465c-bf2b-c2829871c1c3.gif');
	},
};