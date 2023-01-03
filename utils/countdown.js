export function getCountdown() {

    const current_date = new Date();
    const end_of_the_year = new Date(current_date.getFullYear(), 11, 31, 23, 59, 59);

    const current_milliseconds = current_date.getTime();
    const end_milliseconds = end_of_the_year.getTime();
    
    let difference = end_milliseconds - current_milliseconds;

    let days = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= days * 24 * 60 * 60 * 1000;

    let hours = Math.floor(difference / 1000 / 60 / 60);
    difference -= hours * 60 * 60 * 1000;

    let minutes = Math.floor(difference / 1000 / 60);
    difference -= minutes * 60 * 1000;
    
    let seconds = Math.floor(difference / 1000);
    difference -= seconds * 1000;

    10 > days ? days = '0' + days : days;
    10 > hours ? hours = '0' + hours : hours;
    10 > minutes ? minutes = '0' + minutes : minutes;
    10 > seconds ? seconds = '0' + seconds : seconds;
    
    const result = [days, hours, minutes, seconds]

    return result;
}