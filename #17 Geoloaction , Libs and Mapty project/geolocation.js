'use strict';

navigator.geolocation.getCurrentPosition(success, failed)

function success(position){
    let {latitude, longitude} = position.coords;
    
    console.log(position)
    console.log(latitude, longitude)
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`)

}

function failed(){
    alert("Can't access position")
}          