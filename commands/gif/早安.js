const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('早安')
		.setDescription('早安'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1023555311459651654/1103207872537559110/20190118010800_oziol.png');
	},
};