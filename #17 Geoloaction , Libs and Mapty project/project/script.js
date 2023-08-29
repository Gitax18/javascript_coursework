'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map, mapEvt;

class App{
  #map;
  #mapEvt;

  constructor(){
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    // chcnging input field on form according to the user workout.
    inputType.addEventListener('change', this._toggleElevationField)
  }

  _getPosition(){
    // running only if navigator exist 
    if (navigator.geolocation) {
      //   making navigator geolocation object
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), failed);
      
      // call back if the user rejects to give location 
        function failed() {
          alert("Can't access position");
        }
      }
    }

  _loadMap(position){
    // retreiving coordinates for position object
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude]; // converting coords to array

    // loading map on current coords with zoom (here Map zoom is 10)
    this.#map = L.map('map').setView(coords, 10); 

    // adding custom map theme to map, known as tile
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
   
    /**
    Adding event listener to map
    We cannot use default addEventListener bcz it will add event to whole div in which
    map is rendering but we only want to add click event on particular position on the   
    map and for that we using leaflet built in map methong which 
    is `.on(eventType, callback)`
     */
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE){
    this.#mapEvt = mapE;
    form.classList.remove('hidden');
    inputDistance.focus()
  }

  _toggleElevationField(){
    inputElevation.closest('div').classList.toggle('form__row--hidden');
    inputCadence.closest('div').classList.toggle('form__row--hidden');
  }

  _newWorkout(e){
    e.preventDefault(); // preventing form reload
    
      const {lat,lng} = this.#mapEvt.latlng; // getting coords of clicked location
    
      L.marker([lat, lng]) // generating marker on clicked coordinates
                .addTo(this.#map) // adding marker to map
                .bindPopup(L.popup({ // custominzing popup (i.e. marker)
                    maxWidth: 380,
                    minWidth: 100,
                    className: 'running-popup',
                    autoClose: false,
                    closeOnClick: false,
                }))
                .setPopupContent('🏃‍♀️Running🏃‍♂️') // setting inner HTML of the marker
                .openPopup();
    
      // emptying all inputs
      inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = "";
      
      // hiding form again after submission
      this.classList.add('hidden').bind(form);
  }
}

const app = new App();




