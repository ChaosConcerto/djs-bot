const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('哭泣')
		.setDescription('哭泣'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1023555311459651654/1101815869635559435/6053718bc173ahsr.gif');
	},
};