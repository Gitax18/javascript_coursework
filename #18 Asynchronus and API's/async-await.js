// function to promisifying geolocation api and return promise of user position
const getLocation = function(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject) 
    })
}

// async functions return promise as a value;
const getWeather = async function(){
    const pos = await getLocation();

    const {latitude: lat, longitude:lng} = pos.coords;
    
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)

    const data = await res.json()
    return data
}


let weather = getWeather().then(res => console.log(res))

/**
 * My solution for the lecture question
 (async function (){
     try{
        const res = await whereAmI()
        console.log(res);
    } catch (err){
        console.log(`${err.message}`)
    } finally{
        console.log('3. finished getting location')
    }
 })()
 */