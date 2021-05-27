const _debounce = require('lodash.debounce');
import { alert, defaultModules, defaultStack } from '@pnotify/core';
import './styles.css';
import maktup from './templates/maktup.hbs';
import card from './templates/card.hbs';
import fetchCountries from './js/fetchCountries.js';
import getRefs from './js/refs.js';
import {error, warningAboutBroadRequest} from './js/errors.js';
const refs = getRefs();
refs.input.addEventListener('input', _debounce(passingValue, 500));

function passingValue(ev) {
    const textOfInput = ev.target.value.trim();
    if (textOfInput.length < 1) {
        return error();
    }
    return fetchCountries(textOfInput).
        then(data => data.length <= 10 && data.length >= 2
            ? makeMaktup(data)
            : data.length < 2
    ? makeCard(data)
    : warningAboutBroadRequest(data))
};


function makeMaktup(mak) { 
    refs.section.innerHTML = maktup(mak);
    defaultStack.close();
};


function makeCard(mak) {       
    refs.section.innerHTML = card(mak);
    defaultStack.close();
    clearInput();
};

function clearInput() {
    refs.input.value = '';
};