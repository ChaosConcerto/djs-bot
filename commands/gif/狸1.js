const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('狸1')
		.setDescription('狸1'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1101846193165840455/main.png');
	},
};