const clock = document.getElementById('tik')

function tikTik(){
    const time = new Date()
    const hour = `${time.getHours()}`.padStart(2, 0)
    const min = `${time.getMinutes()}`.padStart(2,0) 
    const sec = `${time.getSeconds()}`.padStart(2, 0)

    clock.innerHTML = `${hour}:${min}:${sec}`
}

setInterval(tikTik, 1000)