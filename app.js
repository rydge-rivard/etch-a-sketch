function createGrid () {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        //div.setAttribute('style', 'border-style: solid; border-color: black;');
        grid.appendChild(div);
    }
}

createGrid();