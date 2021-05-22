const _debounce = require('lodash.debounce');
import './styles.css';
import maktup from './templates/maktup.hbs';
import card from './templates/card.hbs';
import fetchCountries from './js/fetchCountries.js';
import getRefs from './js/refs.js';
import isHiddenModal from './js/modal-hiden.js';
import {error, broadRequest} from './js/errors.js';
const refs = getRefs();
refs.input.addEventListener('input', _debounce(passingValue, 500));

function passingValue(ev) {
   return fetchCountries(ev.target.value).then(ev =>
    ev.length < 11 && ev.length > 1
    ? makeMaktup(ev) : ev.length < 2
    ? makeCard(ev)
    : broadRequest(ev))
    .catch(error);
};


function makeMaktup(ev) { 
    refs.section.innerHTML = maktup(ev);
    isHiddenModal();
};


function makeCard(ev) {       
    refs.section.innerHTML = card(ev);
    isHiddenModal();
};