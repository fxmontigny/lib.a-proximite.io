export const transformToFloat = (item) => {
	if (typeof item === 'string') {
		return parseFloat(item.replace(',', '.'));
	}

	return item;
};

export function fixDecimal (value, plus = 100) {
  return Math.round(value * plus) / plus
}