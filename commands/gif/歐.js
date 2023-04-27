const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('歐')
		.setDescription('歐'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/721327813298356304/1034788320741441586/71BF2559-F0D2-4CDE-ADBC-3813BB4A6114.gif');
	},
};