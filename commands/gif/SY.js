const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('sy')
		.setDescription('sy'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1102213718802190336/v2-53461ae9bddedec2d46ce7a4d030b457_b.png');
	},
};