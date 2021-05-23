const _debounce = require('lodash.debounce');
import './styles.css';
import maktup from './templates/maktup.hbs';
import card from './templates/card.hbs';
import fetchCountries from './js/fetchCountries.js';
import getRefs from './js/refs.js';
import isHiddenModal from './js/modal-hiden.js';
import {error, warningAboutBroadRequest} from './js/errors.js';
const refs = getRefs();
refs.input.addEventListener('input', _debounce(passingValue, 500));

function passingValue(ev) {
   return fetchCountries(ev.target.value).then(data =>
    data.length < 11 && data.length > 1
    ? makeMaktup(data) : data.length < 2
    ? makeCard(data)
    : warningAboutBroadRequest(data))
    .catch(error);
};


function makeMaktup(mak) { 
    refs.section.innerHTML = maktup(mak);
    isHiddenModal();
};


function makeCard(mak) {       
    refs.section.innerHTML = card(mak);
    isHiddenModal();
};

