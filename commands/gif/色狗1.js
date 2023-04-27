const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('色狗1')
		.setDescription('色狗1'),
	async execute(interaction) {
		await interaction.reply('https://images-ext-2.discordapp.net/external/gGPnK-MNQghU2YBAJGqQYuBw2N3NUQCCa7nLIQrA5Po/https/media.tenor.com/gEsy4vJ2q4AAAAPo/dog-shiba-inu.mp4');
	},
};