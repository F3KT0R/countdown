export function getCountdown() {

    const current_date = new Date();
    const end_of_the_year = new Date(current_date.getFullYear(), 11, 31, 23, 59, 59);

    const current_milliseconds = current_date.getTime();
    const end_milliseconds = end_of_the_year.getTime();
    
    let difference = end_milliseconds - current_milliseconds;

    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= days * 24 * 60 * 60 * 1000;

    const hours = Math.floor(difference / 1000 / 60 / 60);
    difference -= hours * 60 * 60 * 1000;

    const minutes = Math.floor(difference / 1000 / 60);
    difference -= minutes * 60 * 1000;
    
    const seconds = Math.floor(difference / 1000);
    difference -= seconds * 1000;
    
    const result = [days, hours, minutes, seconds]

    return result;
}