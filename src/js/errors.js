import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { alert, defaultModules, defaultStack } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
defaultModules.set(PNotifyMobile, {});
defaults.styling = 'material';


import getRefs from './refs.js';
const refs = getRefs();

export function warningAboutBroadRequest(err) {
    clearDom();
    alert({ text: 'Too many matches found. Please enter a more specific query',   delay: 2000,});
};


export function error(err) {
    clearDom();
    alert({ text: 'Nothing matches the search',   delay: 2000,});     
}



export function clearDom() {
    refs.section.innerHTML = '';
}