import {error} from './errors.js';
import getRefs from './refs.js';

const refs = getRefs();

export default function fetchCountries(searchQuery) {
        const url = 'https://restcountries.eu/rest/v2/name/';
        return fetch(url+searchQuery)
            .then(res => res.status >= 404 ? error(res) : res.json())
            .catch(error);
    };



