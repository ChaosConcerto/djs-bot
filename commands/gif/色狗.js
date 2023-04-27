const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('色狗')
		.setDescription('色狗'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1023555311459651654/1101128720196042782/UnDldbZ.jpg?width=466&height=676');
	},
};