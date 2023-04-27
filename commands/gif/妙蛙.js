const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('miaowa')
		.setDescription('miao_wa'),
	async execute(interaction) {
		await interaction.reply('https://cdn.discordapp.com/attachments/1020572202917167126/1098587614119993404/3.gif');
	},
};