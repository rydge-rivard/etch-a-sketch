createBaseGrid(16);

function createBaseGrid (gridLength) {
    const grid = document.querySelector('.grid');
    numberOfGridSquares = gridLength ** 2;
    for (let i = 0; i < numberOfGridSquares; i++) {
        const div = document.createElement('div');
        div.style.height = 700/gridLength + "px";
        div.style.width = 700/gridLength + "px";
        div.classList.add('grid-square');
        div.addEventListener('mouseover', () => {
            div.style.background = "blue";
        });
        grid.appendChild(div);
    }
}

let gridSquare = document.querySelectorAll('.grid-square');
const btn = document.querySelector('.select-grid');
btn.addEventListener('click', createNewGrid);

function createNewGrid(gridLength) {
    gridLength = prompt('How many squares per side should the grid be?');
    if (gridLength > 100) {
        alert('Please select a value less than 100.')
        createNewGrid(gridLength);
    } else {
        console.log(gridLength);
        removeOldGrid();
        createBaseGrid(gridLength);
    }
}

function removeOldGrid() {
    gridSquare = document.querySelectorAll('.grid-square');
    gridSquare.forEach((square) => {
        square.remove();
    })
}