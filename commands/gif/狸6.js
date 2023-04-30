const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('狸超1')
		.setDescription('狸超1'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1101854187907711007/e38d9b0a1ca561be-removebg-preview_1.png');
	},
};