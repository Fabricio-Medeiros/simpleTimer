const daysText = document.getElementById("days");
const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");
const myAnniversary = "5 Oct 2022";

//Iniciar contador
countdown();
//Programar para repetir todo segundo
setInterval(countdown, 1000);

function countdown(){
    const myAnniversaryDate = new Date(myAnniversary);
    const currentDate = new Date();

    const totalSeconds = (myAnniversaryDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    daysText.innerHTML = days;
    hoursText.innerHTML = formatTime(hours);
    minutesText.innerHTML = formatTime(minutes);
    secondsText.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}