/* function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update) */

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


"use strict";

let dots = 4;
let sliderElem = document.querySelector('.slider');
let dotElems = sliderElem.querySelectorAll('.slider__dot');
let indicatorElem = sliderElem.querySelector('.slider__indicator');
Array.prototype.forEach.call(dotElems, dotElem => {
  dotElem.addEventListener('click', e => {
    let currentPos = parseInt(sliderElem.getAttribute('data-pos'));
    let newPos = parseInt(dotElem.getAttribute('data-pos'));
    let newDirection = newPos > currentPos ? 'right' : 'left';
    let currentDirection = newPos < currentPos ? 'right' : 'left';
    indicatorElem.classList.remove(`slider__indicator--${currentDirection}`);
    indicatorElem.classList.add(`slider__indicator--${newDirection}`);
    sliderElem.setAttribute('data-pos', newPos);
  });
});
