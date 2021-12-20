export const BLOG_STATUS = {
  0: 'À confirmer',
  1: 'A revoir',
  2: 'En ligne',
}

export const BLOG_STATUS_LABEL = Object.entries(BLOG_STATUS).map((key, value) => ({
  id: value,
  label: BLOG_STATUS[value],
}))
