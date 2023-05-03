const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('多拉姊姊成熟')
		.setDescription('多拉姊姊成熟'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1103082100703367188/image.png');
	},
};