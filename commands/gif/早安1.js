const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('早安1')
		.setDescription('早安yagoo'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1023555311459651654/1103179139122466826/Snipaste_2023-05-03_12-39-48.png');
	},
};