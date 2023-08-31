'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// https://countries-api-836d.onrender.com/countries/

// https://restcountries.com/v3.1/all
// https://restcountries.com/v3.1/name/{name}

function requestCountryData(country){
    const request = new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
    request.send();
    
    request.addEventListener('load', function(){
        const [data] = JSON.parse(request.responseText);
        console.log(data);
    
        const html = `
        <article class="country">
            <img class="country__img" src="${data.flags['png']}" />
            <div class="country__data">
                <h3 class="country__name">${data.name["common"]}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(2)} Mn people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
                <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
            </div>
        </article>
        `
        console.log(Object.values(data.currencies)[0].symbol)
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = '1';
    })
}

requestCountryData('india')
requestCountryData('usa')
requestCountryData('germany')
