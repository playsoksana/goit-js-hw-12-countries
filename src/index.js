import './styles.css';
import maktup from './templates/maktup.hbs';
const _debounce = require('lodash.debounce');

const refs = {
    input: document.querySelector('.js-input'),
    section: document.querySelector('.js-countries-section')
};
refs.input.addEventListener('input', _debounce(fun, 500));

//console.log(maktup)
function fun(ev){
  console.log(ev.target.value);
  response(ev.target.value)

};

function makeMaktup (ev){
   refs.section.innerHTML = maktup(ev);
    console.log(maktup(ev));
    
};
function response (val) {
  return  fetch(`https://restcountries.eu/rest/v2/name/${val}`)
    .then(res=>res.json().then(makeMaktup)//.catch(err=>{}
    )

  };

