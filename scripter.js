const myVar = "Ciao";
console.log('Ciao!')
console.log('Buon Natale!')
// DOM ELEMENTS
const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector('#hours');
const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');
const panelElm = document.querySelector('.panel');
const secondsLabel = document.querySelector('#counter-block-label-seconds')

// Natale
console.log("Da Natale");
const endDate = new Date("December 25 2022");
const endDateInMs = endDate.getTime();
// Oggi
console.log("a oggi");
const nowInMs = new Date().getTime();

// Differenza in ms
console.log('Mancano (in ms):')
const diff = endDateInMs- nowInMs;
console.log(diff);

// Tabella in ms
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

// Matemagica
const counterTimer = setInterval(timer, 1000);

function timer() {
    const nowInMs = new Date().getTime();

    const diff = endDateInMs- nowInMs;

    if ( diff > 0 ) {  
        daysElm.innerHTML = Math.floor( diff / dayInMs );
        hoursElm.innerHTML = Math.floor( (diff % dayInMs) / hourInMs );
        minutesElm.innerHTML = Math.floor( (diff % hourInMs) / minuteInMs );
        secondsElm.innerHTML = Math.floor( (diff % minuteInMs) / secondInMs );
    } else {
        clearInterval(timer);
        panelElm.innterHTML = "<h1>Si aprono i regali!🎅</h1>";
    }
    
}