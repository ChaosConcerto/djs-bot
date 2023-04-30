const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('叮噹狸')
		.setDescription('叮噹狸'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1101855423251894322/A.JPG.jpg?width=1056&height=676');
	},
};