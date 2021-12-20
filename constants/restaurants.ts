import { sortBy } from 'lodash';

export const RESTAURANT_STATUS = {
	0: 'En attente de validation par deliveetic',
	1: 'Validé',
	2: "Validé (besoin d'une revue par deliveetic)",
	3: 'Refusé'
};

export const RESTAURANT_STATUS_IDS = [ 0, 1, 2, 3 ];

export const RESTAURANT_FOOD_STATUS = {
	0: 'Prêt à cuisiner',
	1: 'Pause indéterminée',
	2: 'Pause pour la journée'
};

export const RESTAURANT_FOOD_STATUS_LABEL = Object.entries(RESTAURANT_FOOD_STATUS).map((key, value) => ({
	id: value,
	label: RESTAURANT_FOOD_STATUS[value]
}));

export const RESTAURANT_TYPE = {
	0: 'Africain',
	1: 'Américain',
	2: 'Asiatique',
	3: 'Pizzeria',
	4: 'Korean',
	6: 'Accords Mets Vins',
	7: 'Argentin',
	8: 'Asiatique',
	9: 'Brésilien',
	10: 'Chinois',
	11: 'Cajun',
	12: 'Coréen',
	13: 'Corse',
	14: 'Créatif',
	15: 'Cuisine Inventive',
	16: 'Cuisine Originale',
	17: 'Danois',
	18: 'Espagnol',
	19: 'Fast Food',
	20: 'Gastronomique',
	21: 'Grec',
	22: 'Italien',
	23: 'Japonais',
	24: 'Français',
	25: 'Fusion',
	26: 'Gourmand',
	27: 'Indien',
	28: 'Libanais',
	29: 'Marocain',
	30: 'Mauricien',
	31: 'Méditerranéen',
	32: 'Mexicain',
	33: 'Suédois',
	34: 'Sud-Ouest',
	35: 'Terroir',
	36: 'Thaïlandais',
	37: 'Tibet',
	38: 'Traditionnel',
	39: 'Vietnamien',
	40: 'Bio',
	41: 'Caviar',
	42: 'Couscous',
	43: 'Diététique',
	44: 'Fruit de mer',
	45: 'Poisson',
	46: 'Végétarien',
	47: 'Viande',
	48: 'Tajines',
	49: 'Tapas',
	50: 'Antillais',
	51: 'Auvergnat',
	52: 'Burger',
	53: 'Barbecue',
	54: 'Bistronomique',
	55: 'Buns',
	56: 'Basque',
	57: 'Brunch',
	58: 'Brasserie',
	59: 'Bar à tapas',
	60: 'Créole',
	61: 'Crêperie',
	62: 'Chocolaterie',
	63: 'Exotique',
	64: 'Europe de l’Est',
	65: 'Français traditionnel',
	66: 'Food truck',
	67: 'Gastronomie',
	68: 'Grec',
	69: 'Hawaïen',
	70: 'Halal',
	71: 'Israélien',
	72: 'Kebab',
	73: 'Moléculaire',
	74: 'Maki',
	75: 'Oriental',
	76: 'Paskistanais',
	77: 'Pizza',
	78: 'Portugais',
	79: 'Poke Bowl',
	80: 'Poulet et Volaille',
	81: 'Pâtisserie Fine',
	82: 'Océan pacifique',
	83: 'Steak house',
	84: 'Sushi',
	85: 'Street food',
	86: 'Sud-américain',
	87: 'Tacos',
	88: 'Traiteur',
	89: 'Turque',
	90: 'Végan'
};

export const RESTAURANT_TYPE_LABEL = sortBy(
	Object.entries(RESTAURANT_TYPE).map((key, value) => ({
		id: value,
		label: RESTAURANT_TYPE[value]
	})),
	[ 'label' ]
);
