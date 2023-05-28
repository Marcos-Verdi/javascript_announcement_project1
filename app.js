const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const targetDate = document.querySelector('.counter-info-subtitle');



const startDate = new Date('2026-06-08');
const targetYear = startDate.getFullYear();
const targetHour = startDate.getHours();
const targetMins = startDate.getMinutes();
const targetDay = startDate.getDate();
const targetWeekday = weekdays[ targetDay > 6? targetDay - 6: targetDay];
const targetMonth = months[startDate.getMonth()];

const daysDigit = document.querySelector('.digit-days');
const hoursDigit = document.querySelector('.digit-hours');
const minsDigit = document.querySelector('.digit-mins');
const secsDigit = document.querySelector('.digit-secs');

targetDate.innerHTML = `World Cup Starts on ${targetWeekday} ${targetMonth} ${targetDay}, ${targetYear}` 

const futureTime = startDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const distance = futureTime - today;

    const oneDay = 1000 * 60 * 60 * 24
    const oneHour = 1000 * 60 * 60
    const oneMin = 1000 * 60
    const oneSec = 1000 
    
    let daysLeft = Math.floor(distance / oneDay)
    let hoursLeft = Math.floor((distance - (daysLeft * oneDay))/ oneHour)
    let minsLeft = Math.floor((distance - (daysLeft * oneDay) - (hoursLeft * oneHour))/ oneMin)
    let secsLeft = Math.floor( (distance - (daysLeft * oneDay) - (hoursLeft * oneHour) - (minsLeft * oneMin)) / oneSec)


    daysDigit.textContent = daysLeft
    hoursDigit.textContent = hoursLeft
    minsDigit.textContent = minsLeft
    secsDigit.textContent = secsLeft

};

setInterval(getRemainingTime, 1000);

