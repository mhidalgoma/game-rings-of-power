'use strict';
//Variables globales
const playBtn = document.querySelector ('.js_play_bt');
const pointsGood = document.querySelector ('.js_good');
const pointsBad = document.querySelector ('.js_bad');
let badGuysStrength;
let goodGuysStrength;




function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function getRandomBadGuy(){
    let badGuys = getRandomNumber(5);
    if (badGuys === 1 || badGuys === 2 || badGuys === 3) { 
    badGuysStrength = 2
    } else if (badGuys === 4) {
    badGuysStrength = 3
    } else {
    badGuysStrength = 5
    }
}

function getSelectedGoodGuy(){
    const goodGuys = document.querySelector ('.js_select');
    goodGuysStrength = goodGuys.value;
    return goodGuysStrength; 
}

function writeMessage (text) {
    const message = document.querySelector ('.js_message');
    message.innerHTML = text;
}

function handlePlayBtn (event){
    event.preventDefault();
    getSelectedGoodGuy();
    getRandomBadGuy();
    if (goodGuysStrength === ''){
        writeMessage ('Selecciona una raza para poder jugar.')
    }else if (goodGuysStrength > badGuysStrength) {
        writeMessage ('¡Ha ganado el ejército del bien! Enhorabuena.')
    }else if (goodGuysStrength < badGuysStrength) {
        writeMessage ('¡Ha ganado el ejército del mal! Vuelve a intentarlo.')
    } else {
        writeMessage ('Empate.')
    }
    pointsBad.innerHTML = `Fuerza de la raza malvada: ${badGuysStrength}`;
    pointsGood.innerHTML = `Fuerza de la raza bondadosa: ${goodGuysStrength}`;
}

playBtn.addEventListener('click',handlePlayBtn)


