var bandes = {
	"assassins": "Assassins",
	"bravos": "Bravos",
	"cult": "Cultistes",
	"hawkers": "Colporteurs",
	"shadows": "Ombres",
	"smugglers": "Contrebandiers"
};

var classes = {
	"cutter": "Écorcheur",
	"ghost": "Fantôme",
	"hound": "Limier",
	"hull": "Coquille",
	"leech": "Sangsue",
	"lurk": "Guetteur",
	"slide": "Arlequin",
	"spider": "Araignée",
	"vampire": "Vampire",
	"whisper": "Haruspice"
};

Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'blades-in-the-dark-fr',
			lang: 'fr',
			dir: 'compendium'
		});

		Babele.get().registerConverters({
			"bandes": (bande) => {
				return bandes[bande.toLowerCase()];
			},
			"classes": (className) => {
				return classes[className.toLowerCase()];
			}
		});
	}
});
