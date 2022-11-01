'use strict';

const playBtn = document.querySelector ('.js_play_bt');
const message = document.querySelector ('.js_message');
let badGuys;
let badGuysStrength;
const goodGuys = document.querySelector ('.js_select');
let goodGuysStrength;
const pointsGood = document.querySelector ('.js_good');
const pointsBad = document.querySelector ('.js_bad');



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
    getSelectedGoodGuy();
    getRandomBadGuy();
    if (goodGuysStrength === ''){
        message.innerHTML = 'Selecciona una raza para poder jugar.'
    }else if (goodGuysStrength > badGuysStrength) {
        message.innerHTML = '¡Ha ganado el ejército del bien! Enhorabuena.'
    }else if (goodGuysStrength < badGuysStrength) {
        message.innerHTML = '¡Ha ganado el ejército del mal! Vuelve a intentarlo.'
    } else {
        message.innerHTML = 'Empate.'
    }
    pointsBad.innerHTML = `Fuerza de la raza malvada: ${badGuysStrength}`;
    pointsGood.innerHTML = `Fuerza de la raza bondadosa: ${goodGuysStrength}`;
}

playBtn.addEventListener('click',handlePlayBtn)


