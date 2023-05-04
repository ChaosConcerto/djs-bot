const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('舔佳奈')
		.setDescription('舔佳奈'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1103450567973556224/aq9d1-q4zem.gif');
	},
};