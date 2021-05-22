import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
defaultModules.set(PNotifyMobile, {});
defaults.styling = 'material';


import getRefs from './refs.js';
const refs = getRefs();

export function broadRequest(err) {
    clearDom();
    alert({ text: 'Too many matches found. Please enter a more specific query'});
};


export function error(err) {
    clearDom();
    alert({ text: 'Nothing matches the search'});     
}



export function clearDom() {
    refs.section.innerHTML = '';
}