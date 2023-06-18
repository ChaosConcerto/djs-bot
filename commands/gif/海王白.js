const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('海王白')
		.setDescription('海王白'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1020572202917167126/1119858249601122355/U0cE_iP9tGXm0mpVE66V9Ot_IO4bjIRQVJaKmFSWipg.jpg?width=484&height=676');
	},
};