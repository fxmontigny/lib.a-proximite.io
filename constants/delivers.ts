export const DELIVER_STATUS = {
	0: 'Profil à compléter',
	1: 'En validation par Delivreetic',
	2: 'Prêt à livrer',
	3: 'Profil rejeté'
};

export const DELIVER_STATUS_LABEL = Object.entries(DELIVER_STATUS).map((key, value) => ({
	id: value,
	label: DELIVER_STATUS[value]
}));

export const DELIVER_WAY = {
	bike: 'Vélo',
	'cargo-bike': 'Vélo cargo',
	'electric-bike': 'Vélo électrique',
	scooter: 'Scooter',
	'electric-scooter': 'Scooter électrique',
	car: 'Voiture',
	'electric-car': 'Voiture électrique',
	rent: 'Je loue',
	other: 'Autre'
};

export const DELIVER_WAY_LABEL = Object.entries(DELIVER_WAY).map((key, value) => ({
	id: key[0],
	label: key[1]
}));

export const DELIVER_DEPARTEMENT = {
	'95': "Val-d'Oise",
	'78': 'Yvelines',
	'91': 'Essonne',
	'77': 'Seine-et-Marne',
	'92': 'Hauts-de-Seine',
	'75': 'Paris',
	'93': 'Seine-St-Denis',
	'94': 'Val-de-Marne',
	'0': 'Autre'
};

export const DELIVER_DEPARTEMENT_LABEL = Object.entries(DELIVER_DEPARTEMENT).map((key, value) => ({
	id: key[0],
	label: key[1]
}));
