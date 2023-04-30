const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('色狗1')
		.setDescription('色狗1'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1023555311459651654/1101811316408205332/1649955937701.gif');
	},
};