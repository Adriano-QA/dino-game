const dino = document.querySelector('.dino');
let isJumping = false;
const background = document.querySelector('.background');

function handleKeyUp (event) {
    if(event.keyCode === 32) {
        if (!isJumping ){
        jump();}
    }

}

function jump () {
    isJumping = true;
    let position = 0;
    let upInterval = setInterval(() => {
        if (position >=150){
        clearInterval(upInterval);
        let downInterval = setInterval(() => {
            if (position <=0){
                clearInterval(downInterval)
                isJumping = false;
            } else {
            position -=20;
            dino.style.bottom = position + 'px';

        }}, 20)
        }
        else{
        position += 20; 
        dino.style.bottom = position + 'px';
    }}, 20);
}

function createCactus () {
    const cactus = document.createElement('div');
    let cactusPosition = 1000; 
    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = 1000 + 'px';
}

createCactus();

document.addEventListener('keyup', handleKeyUp)