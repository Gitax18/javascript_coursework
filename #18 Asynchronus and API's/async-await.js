const getLocation = function(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject) 
    })
}

const getWeather = async function(){
    const pos = await getLocation();

    const {latitude: lat, longitude:lng} = pos.coords;
    
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)

    // return await res.json()
    const data = await res.json()
    // console.log(data);
    return data
}


let weather = getWeather().then(res => console.log(res))
// getWeather().then(data => console.log(data))  //.then(data=> console.log(data))

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