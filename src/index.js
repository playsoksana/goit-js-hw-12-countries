const _debounce = require('lodash.debounce');
import './styles.css';
import maktup from './templates/maktup.hbs';
import card from './templates/card.hbs';
import Inquiry from './js/class-api.js';


const inquiry = new Inquiry();
const refs = {
    input: document.querySelector('.js-input'),
    section: document.querySelector('.js-countries-section')
};
refs.input.addEventListener('input', _debounce(passingValue, 500));


function passingValue(ev) {
    inquiry.response(ev.target.value).then(res => res.length > 1 && res.length < 11 ? makeMaktup(res) : makeCard(res));
};

function makeMaktup(ev) {
    refs.section.innerHTML = maktup(ev);
};

function makeCard(ev) {
    refs.section.innerHTML = card(ev);
    console.log(ev)
};
