import historyTypes from './definitions/historyTypes.js';
import timePeriods from './definitions/timePeriods.js';
import subjects from './definitions/subjects.js';
import locations from './definitions/locations.js';
import frameworks from './definitions/frameworks.js';


const OUTPUT_ELEMENT = 'stringOutput';

const output = document.getElementById(OUTPUT_ELEMENT);

function getRandomNumberBetweenIndexRange(start = 0, end) {
    console.log(Math.floor(Math.random() * end) + start);
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

output.innerText = `${type} ${timePeriod} ${subject} ${location} ${framework}`;