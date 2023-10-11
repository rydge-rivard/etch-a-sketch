function createGrid () {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        grid.appendChild(div);
    }
}

createGrid();