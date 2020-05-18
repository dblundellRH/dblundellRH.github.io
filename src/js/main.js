import historyTypes from './definitions/historyTypes.js';
import timePeriods from './definitions/timePeriods.js';
import subjects from './definitions/subjects.js';
import locations from './definitions/locations.js';
import frameworks from './definitions/frameworks.js';


const OUTPUT_ELEMENT = 'stringOutput';
const COOKIE_NAME = 'phdCount';
const COUNT_ELEMENT = 'countOutput';

const output = document.getElementById(OUTPUT_ELEMENT);
const countOuput = document.getElementById(COUNT_ELEMENT);

function getRandomNumberBetweenIndexRange(start = 0, end) {
    return Math.floor(Math.random() * end) + start;
}

function getRandomArrayItem(array) {
    return array[getRandomNumberBetweenIndexRange(0, array.length)];
}

const type = getRandomArrayItem(historyTypes);
const timePeriod = getRandomArrayItem(timePeriods);
const subject = getRandomArrayItem(subjects);
const location = getRandomArrayItem(locations);
const framework = getRandomArrayItem(frameworks);

function readCookies() {
    const allCookies = document.cookie.split(';');

    return allCookies.map(cookie => {
        const temp = cookie.split('=');

        return {
            name: temp[0],
            value: temp[1],
        }
    });
}

const cookies = readCookies();
let count = 1;

function writeCookie(value) {
    console.log('write cookie', value);
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);

    document.cookie = `${COOKIE_NAME}=${value};max-age=31536000;secure;expires=${date.toUTCString()}`
}

if (cookies.some((cookie, index) => cookie.name === COOKIE_NAME)) {
    const countCookie = cookies.filter(cookie => cookie.name === COOKIE_NAME);

    console.log(countCookie[0].value);
    count = parseInt(countCookie[0].value) + 1;

    writeCookie(count);
}
else {
    console.log('no cookie set');
    writeCookie(count);
}

output.innerText = `${type} ${timePeriod} ${subject} ${location} ${framework}`;

countOuput.innerText = count > 1 ? `You have created ${count} PhD topics` : '';