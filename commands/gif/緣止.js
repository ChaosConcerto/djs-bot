const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('緣止')
		.setDescription('緣止'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1023555311459651654/1101129316856766534/f8fd21bf592ffce547c913556e7cf175.webp');
	},
};