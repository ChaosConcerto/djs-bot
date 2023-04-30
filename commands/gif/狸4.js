const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('巨巨狸')
		.setDescription('巨巨狸'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1101847789354356808/82305e25ec9c7aa44f2c3c2342be0c0e113af3d6_hq.png?width=729&height=676');
	},
};