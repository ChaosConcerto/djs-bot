const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('狸鑽緣取火')
		.setDescription('狸鑽緣取火'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1023555311459651654/1121700372243808357/2222.gif');
	},
};