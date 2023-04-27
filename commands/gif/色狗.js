const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('色狗')
		.setDescription('色狗'),
	async execute(interaction) {
		await interaction.reply('https://cdn.discordapp.com/attachments/1020572202917167126/1099198346272440420/b776837dc4df1c90f0b245dfba3d43db.webp');
	},
};