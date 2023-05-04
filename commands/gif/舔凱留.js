const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('舔凱留')
		.setDescription('舔凱留'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1103445638185754744/58b92759bb5dc7139c7722f107a9ede3.gif');
	},
};