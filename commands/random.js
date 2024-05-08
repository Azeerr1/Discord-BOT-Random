const { SlashCommandBuilder } = require("@discordjs/builders");

const maps = ["Fracture", "Breeze", "Icebox", "Bind", "Haven", "Split", "Ascent"]
const agents = ["Brimstone", "Viper", "Omen", "Killjoy", "Cypher", "Sova", "Sage", "Phoenix", "Jett", "Reyna", "Raze", "Breach", "Skye", "Yoru", "Astra", "KAY/O", "Chamber", "Neon", "Fade", ]
const roles = ["Controller", "Sentinel", "Initiator", "Duelist"]
const weapons = ["Phantom", "Vandal", "Ares", "Odin", "Marshal", "Operator", "Bulldog", "Guardian", "Bucky", "Judge", "Stinger", "Spectre", "Classic", "Shorty", "Frenzy", "Ghost", "Sheriff"]
module.exports = {
	data: new SlashCommandBuilder()
		.setName("random")
		.setDescription("Choisissez un agent, un rôle, une arme et/ou une map aléatoirement.")
		.addStringOption((option) =>
			option
				.setName("type")
				.setDescription("Choisissez un agent, un rôle, une arme et/ou une map aléatoirement.")
				.setRequired(true)
		),
	async execute(interaction) {
		if (interaction.options.getString("type") === "agent") {
			interaction.reply({
				content: "**Votre agent sera :** "+agents[Math.floor(Math.random()*agents.length)],
				ephemeral: false,
			});
		} else if (interaction.options.getString("type") === "role") {
			interaction.reply({
				content: "**Votre rôle sera :** "+roles[Math.floor(Math.random()*roles.length)],
				ephemeral: false,
			});
		} else if (interaction.options.getString("type") === "arme") {
			interaction.reply({
				content: "**Votre arme sera :** "+weapons[Math.floor(Math.random()*weapons.length)],
				ephemeral: false,
			});
		} else if (interaction.options.getString("type") === "map") {
			interaction.reply({
				content: "**La map sera :** "+maps[Math.floor(Math.random()*maps.length)],
				ephemeral: false,
			});
		} else {
			interaction.reply({
				content: "Veuillez entrer une valeur correcte.",
				ephemeral: true,
			});
		}
		
	},
};