'use strict';

// const map container
const mapContainer = document.querySelector('.map-container');

navigator.geolocation.getCurrentPosition(success, failed)

function success(position){
    let {latitude, longitude} = position.coords;
    
    console.log(latitude, longitude)

    const map = L.map('map-container').setView([latitude, longitude], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup(L.popup({
            maxWidth: 300,
            minWidth: 100,
            className: 'marker-red',
            autoClose: false,
            closeOnClick: false,
        }))
        .setPopupContent("Your current location")
        .openPopup();

    map.on('click',(pos)=>{
        const {lat, lng} = pos.latlng;
        L.marker([lat, lng])
        .addTo(map)
        .bindPopup(L.popup({
            maxWidth: 300,
            minWidth: 100,
            className: 'marker-red',
            autoClose: false,
            closeOnClick: false,
        }))
        .setPopupContent("hello")
        .openPopup();
    })

}

function failed(){
    alert("Can't access position")
}          