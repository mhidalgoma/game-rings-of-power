'use strict';

const playBtn = document.querySelector ('.js_play_bt');
const message = document.querySelector ('.js_message');
let badGuys;
let badGuysStrength;
const goodGuys = document.querySelector ('.js_select');
let goodGuysStrength;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function getRandomBadGuy(){
    badGuys = getRandomNumber(5);
    badGuys === 1 ? badGuysStrength = 2 : null;
    badGuys === 2 ? badGuysStrength = 2 : null;
    badGuys === 3 ? badGuysStrength = 2 : null;
    badGuys === 4 ? badGuysStrength = 3 : null;
    badGuys === 5 ? badGuysStrength = 5 : null;
}
function getSelectedGoodGuy(){
    goodGuysStrength = goodGuys.value;
    return goodGuysStrength; 
}

function handlePlayBtn (){
    getRandomBadGuy();
    getSelectedGoodGuy();
    if (goodGuysStrength > badGuysStrength) {
        message.innerHTML = '¡Ha ganado el ejército del bien! Enhorabuena.'
    }else if (goodGuysStrength < badGuysStrength) {
        message.innerHTML = '¡Ha ganado el ejército del mal! Vuelve a intentarlo.'
    } else {
        message.innerHTML = 'Empate.'
    }
}

playBtn.addEventListener('click',handlePlayBtn)


