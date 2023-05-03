const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('多拉姊姊')
		.setDescription('多拉姊姊'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1102231031391719506/latest.png?width=456&height=676');
	},
};