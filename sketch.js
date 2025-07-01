const container = document.querySelector(`.container`);

const createGrid =function(number) {
    // container.style.width = `${(number * 25)}px`;
    // container.style.height = `${(number * 25) }px`;
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            const gridSquare = document.createElement(`div`);
            gridSquare.classList.add(`gridSquare`);
            gridSquare.style.width = `${960 / number}px`;
            gridSquare.style.height = `${960 / number}px`;
            container.appendChild(gridSquare);
    }}
};

const colorBlack = function(e) {
    e.preventDefault();
    e.target.style.backgroundColor = `black`;
    
}


container.addEventListener(`mousedown`, (e) => {
    e.preventDefault();
    container.addEventListener(`mouseover`, colorBlack)
    });
    window.addEventListener(`mouseup`, (e) => {
        e.preventDefault();
        container.removeEventListener(`mouseover`, colorBlack)
    });

createGrid(62)




    

