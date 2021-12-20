export const convertHourMinutesToTimestamps = (hour: number, minute: number) => {
	return (hour || 1) * 60 * 60000 + (minute || 1) * 60000;
};

export const createDateAsUTC = (date) => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
}

export const convertDateToUTC = (date) => { 
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
}