const container = document.querySelector(`.container`);

const createGrid =function(number) {
    // container.style.width = `${(number * 25)}px`;
    // container.style.height = `${(number * 25) }px`;
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            const gridSquare = document.createElement(`div`);
            gridSquare.classList.add(`gridSquare`);
            gridSquare.style.width = `${600 / number}px`;
            gridSquare.style.height = `${600 / number}px`;
            container.appendChild(gridSquare);
    }}
};

createGrid(60)
