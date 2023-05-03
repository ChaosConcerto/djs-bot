const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('最愛倪')
		.setDescription('最愛倪'),
	async execute(interaction) {
		await interaction.reply('https://cdn.discordapp.com/attachments/1020572202917167126/1100284947316621354/40b99a75b68de16a.jpg');
	},
};