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

// ***************** WORKOUT ARCHITECTURE
class Workout{

  date = new Date();
  id = (Date.now() + "").slice(-5);

  constructor(coords, duration, distance){
    this.coords = coords;
    this.duration = duration;
    this.distance = distance;
  }
}

// **************  Child class of Workout (for running)
class Running extends Workout{
  type = 'running';
  constructor(coords, duration, distance, cadence){
    super(coords, duration, distance);
    this.cadence = cadence;
    this._calcPace();
  }
  
  _calcPace(){
    this.pace =  this.duration / this.distance;
    return this.pace;
  }
}

// **************  Child class of Workout (for cycling)
class Cycling extends Workout{
  type = 'cycling';
  constructor(coords, duration, distance, elevGain){
    super(coords, duration, distance);
    this.elevGain = elevGain;
    this._calcSpeed();
  }
  
  _calcSpeed(){
    this.speed =  this.distance / (this.duration / 60);
    return this.speed;
  }
} 




// ******************* APPLICATION ARCHITECHTURE **************************
class App{
  #map;
  #mapEvt;
  #workouts = [];

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
      let workout;
      // get data from form
      const type = inputType.value;
      const distance= inputDistance.value;
      const duration = inputDuration.value;
       

      // check if data is valid
      const isValid = (...inputs) => inputs.every(inp => Number.isFinite(inp) );
      const isPositive = (...inputs) => inputs.every(inp => Number(inp) > 0);

      // if workout is running, create running object
      if (type == 'running'){
        const cadence = inputCadence.value;
        if(isValid(distance, duration, cadence) 
          || !isPositive(distance, duration, cadence))
        { 
            return alert("Please enter positive value")
        }

        workout = new Running([lat, lng], duration, distance, cadence);
      }
      
      // if workout is cycling, create cycling object
      if (type == 'cycling'){
        let elevation = inputElevation.value;
        if(isValid(distance, duration, elevation) 
        || !isPositive(distance, duration)
        || elevation == ""
        || `${Number(elevation)}` == 'NaN')
        {
          return alert("Please enter positive value")
        }
        // console.log(Number(elevation) == NaN)
        workout = new Cycling([lat, lng], duration, distance, elevation);
      }

      // add new object to workout array
      this.#workouts.push(workout);
      // console.log(this.#workouts)

      // render new workout marker
      this._renderWorkoutMarker(workout)

      // render workout on list 

      // emptying all inputs
      inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = "";
      
      // hiding form again after submission
      form.style.display = 'none';
      form.classList.add('hidden');
      setTimeout(()=>{
        form.style.display = 'grid';
      }, 1000)
  }

  _renderWorkoutMarker(workout){
    console.log(workout)

    // render workout on map as a marker
    L.marker(workout.coords) // generating marker on clicked coordinates
    .addTo(this.#map) // adding marker to map
    .bindPopup(L.popup({ // custominzing popup (i.e. marker)
        maxWidth: 380,
        minWidth: 100,
        className: `${workout.type}-popup`,
        autoClose: false,
        closeOnClick: false,
    }))
    .setPopupContent(`${workout.type}`) // setting inner HTML of the marker
    .openPopup();

  }

  
}

const app = new App();




