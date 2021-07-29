'use strict';

const popupClose = document.querySelector('.popup-close'),
popup = document.querySelector('.popup'),
appleImg = document.querySelector('.apple-img'),
hurmaImg = document.querySelector('.hurma-img'),
pearImg = document.querySelector('.pear-img'),
orangeImg = document.querySelector('.orange-img');


popupClose.addEventListener('click', e=>{
    e.preventDefault();
    popup.style.display = 'none';
});
document.body.addEventListener('click', (e)=>{
    let target = e.target;
    if (target.matches('.apple-img')){
        popup.style.display = 'block';
    }
    if (target.matches('.hurma-img')){
        popup.style.display = 'block';
    }
    if (target.matches('.pear-img')){
        popup.style.display = 'block';
    }
    if (target.matches('.orange-img')){
        popup.style.display = 'block';
    }
});