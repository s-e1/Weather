export const convertToCelsius = (farenheit) => {
    const celsius = (farenheit - 32) * 5 / 9;
    return Math.round(celsius ) ;
}

export const convertToDayName = (date) => {
    const date1 = new Date(date);
    const options = { weekday: 'long' };
    const dayName = new Intl.DateTimeFormat('en-US', options).format(date1);
    return dayName;
}