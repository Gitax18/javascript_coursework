'use strict';

const country = prompt("Enter your country: ").toLowerCase();
const countriesContainer = document.querySelector('.countries');
   


fetch(`https://restcountries.com/v3.1/name/${country}`)
                .then(res => {
                    if(!res.ok) throw new Error("Country not found  🔴🗺️🔴")
                    return res.json();
                })
                .then(dt => {
                    console.log(dt[0])

                    const data = dt[0];
                    // console.log(data)
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
                })
                .catch(err => console.error(`New Error Encounter, ${err}, try again`))
                .finally(countriesContainer.style.opacity = '1');
