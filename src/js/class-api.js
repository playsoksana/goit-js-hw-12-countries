import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
defaultModules.set(PNotifyMobile, {});
const ref = {
    input: document.querySelector('.js-input'),
    section: document.querySelector('.js-countries-section')
};


export default class Inquiry {
    constructor() { };
    response(val) {
        return fetch(`https://restcountries.eu/rest/v2/name/${val}`)
            .then(res => res.json())
            .then(res => res.length > 10 ? this.clear : res)
            .catch(this.clear);
    };


    clear() {
        alert({ text: 'Notice me, senpai!' });
        ref.section.innerHTML = '';
    };
}
