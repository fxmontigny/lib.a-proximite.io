export const BOOKING_STATUS = {
  0: 'À confirmer par le restaurateur',
  1: 'Confirmé par le restaurateur',
  2: 'Est venu',
  3: "N'est pas venu",
  4: 'Refusée par le restaurateur',
}

export const BOOKING_STATUS_LABEL = Object.entries(BOOKING_STATUS).map((key, value) => ({
  id: value,
  label: BOOKING_STATUS[value],
}))
