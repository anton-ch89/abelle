'use strict';

const popupClose = document.querySelector('.popup-close'),
popup = document.querySelectorAll('.popup'),
appleImg = document.querySelector('.apple-img'),
hurmaImg = document.querySelector('.hurma-img'),
pearImg = document.querySelector('.pear-img'),
orangeImg = document.querySelector('.orange-img');
console.log(popup);

document.body.addEventListener('click', (e) => {
    let target = e.target;

    if (target.matches('.apple-img')) {
        popup[0].style.display = 'block';
    }
    if (target.matches('.hurma-img')) {
        popup[1].style.display = 'block';
    }
    if (target.matches('.pear-img')) {
        popup[2].style.display = 'block';
    }
    if (target.matches('.orange-img')) {
        popup[3].style.display = 'block';
    }
    popup.forEach(elem => {
        if (target.matches('.popup') || target.matches('.popup-close')) {
            elem.style.display = 'none';
        }
    })
});