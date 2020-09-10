const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const hand = document.querySelector('.hand')

function setDate() {

    const now = new Date();
    // Seconds
    const seconds  = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    
    if(secondsDegrees === 90) {
        secondHand.style.transition = 'none'
    } else {
        secondHand.style.transition = ''
    }

    // Minutes
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`
    // Hours
    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    
    console.log(seconds);
}

setInterval(setDate, 1000);