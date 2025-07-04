const container = document.querySelector(`.container`);
const generateGrid = document.querySelector(`.generate-grid`);
const clearGrid = document.querySelector(`.clear-grid`);
const userInput = document.querySelector(`.grid-size`);
const sliderOutput = document.querySelector(`.sliderOutputContainer`);


// GRID & CONTROLS

const createGrid = function(number) {
  
    for (let i = 0; i < number * number; i++) {
            const gridSquare = document.createElement(`div`);
            gridSquare.classList.add(`gridSquare`);
            gridSquare.style.width = `calc(100% / ${number})`;
            gridSquare.style.height = `calc(100% / ${number})`;
            container.appendChild(gridSquare);
            
    }};

const clearGrd = function(e) {
    let squares = document.querySelectorAll(`.gridSquare`);
    squares.forEach(square => square.style.backgroundColor = `white`)
};

clearGrid.addEventListener(`click`, () => {
    clearGrd();
    
});

generateGrid.addEventListener(`click`, () => {
    container.innerHTML = '';
    createGrid(userInput.value);
    
});

sliderOutput.innerHTML = userInput.value;
userInput.oninput = function() {
    sliderOutput.innerHTML = this.value;
  }

  userInput.addEventListener('focus', () => console.log('SLIDER: focus'));
userInput.addEventListener('blur', ()  => console.log('SLIDER: blur'));
userInput.addEventListener('change', ()=> console.log('SLIDER: change'));
userInput.addEventListener('mouseup', ()=> console.log('SLIDER: mouseup'));



// COLOR BTNS
const black = document.querySelector(`.black`);
const red = document.querySelector(`.red`);
const blue = document.querySelector(`.blue`);
const green = document.querySelector(`.green`);
const rbw = document.querySelector(`.rbw`);
const white = document.querySelector(`.white`);
let hasColorFn = false;

const colorBlack = function(e) {
    e.preventDefault();
    e.target.style.backgroundColor = `black`
    
    
};

const colorRed= function(e) {
    e.preventDefault();
    e.target.style.backgroundColor = `red`;
    
};

const colorBlue = function(e) {
    e.preventDefault();
    e.target.style.backgroundColor = `blue`;
    
};

const colorGreen = function(e) {
    e.preventDefault();
    e.target.style.backgroundColor = `green`;
    
};

const colorRBW = function(e) {
    e.preventDefault();
    e.target.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    
};

const colorWhite= function(e) {
    e.preventDefault();
    e.target.style.backgroundColor = `white`;
    
};

const draw = function(color){
    if(hasColorFn){
        container.removeEventListener(`mouseover`, hasColorFn);
    }

    hasColorFn = color;

    container.addEventListener(`mousedown`, (e) => {
        e.preventDefault();
        container.addEventListener(`mouseover`, hasColorFn)
    });
    window.addEventListener(`mouseup`, (e) => {
        e.preventDefault();
        container.removeEventListener(`mouseover`, hasColorFn)
    });
};

black.addEventListener(`click`, () => {

    draw(colorBlack);
});

red.addEventListener(`click`, () => {
    draw(colorRed);
});

blue.addEventListener(`click`, () => {
    draw(colorBlue);
});

green.addEventListener(`click`, () => {
    draw(colorGreen);
});

rbw.addEventListener(`click`, () => {
    draw(colorRBW);
});

white.addEventListener(`click`, () => {
    draw(colorWhite);
});

createGrid(42);
draw(colorBlack);




    

