export const ORDER_STATUS = {
  0: 'Non confirmée',
  1: 'En attente de paiement',

  50: 'En attente de confirmation réstaurateur',

  100: 'En attente de préparation',
  110: 'En cours de préparation',

  200: 'En attente de récuparation livreur',
  201: 'En cours de livraison',

  250: 'Commande à retirer',

  300: 'Terminée',

  400: 'Annulée',
}

export const ORDER_STATUS_LABEL = Object.entries(ORDER_STATUS).map((key, value) => ({
  id: +key[0],
  label: key[1],
}))
