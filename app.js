function createGrid () {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        grid.appendChild(div);
    }
}

createGrid();

const gridSquare = document.querySelectorAll('.grid-square');

/*function colourGridSquare (square) {
    square.setAttribute('style', 'background: blue;');
}
*/

gridSquare.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.setAttribute('style', 'background: blue;');
    });
});