/*
  script.js - JavaScript functionality for Light Bulb Switch project
  Toggles the light bulb image and button text between ON and OFF states
*/

const button = document.getElementById('buttonON');
const bulb = document.getElementById('bulbON');

button.addEventListener('click', function(){
    if(bulb.src.includes('buldOn.png')) {
        bulb.src = 'buldOff.png';
        button.textContent = 'OFF';
    }
    else {
        bulb.src = 'buldOn.png';
        button.textContent = 'ON';
    }

});

