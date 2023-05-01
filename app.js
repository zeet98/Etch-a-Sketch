let gridSize = 24;

const container = document.querySelector('.grid-container');

let bgColor = '#f08080';
container.style.backgroundColor = bgColor;

function createGrid() {
    let gridWidth = container.offsetWidth / gridSize;
    container.style.gridTemplateColumns = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
    if (gridSize < 4) {
      container.style.gridTemplateColumns = `repeat(${gridSize},1fr`;
      container.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;
    }
  
    for (let i = 0; i < gridSize ** 2; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-item');
      square.setAttribute('draggable', 'false');
      square.style.backgroundColor = bgColor;
      container.appendChild(square);
}
const rightItems = document.querySelectorAll(`.grid-item:nth-child(${gridSize}n)`);
for (let i = 0; i < rightItems.length; i++) {
  rightItems[i].setAttribute('data-right', 'true');
  rightItems[i].classList.toggle('border-right');
}

// add a bottom border to the bottom most items
let gridItems = document.querySelectorAll('.grid-item');
const lastItems = Array.from(gridItems).slice(-`${gridSize}`);
for (let i = 0; i < lastItems.length; i++) {
  lastItems[i].setAttribute('data-bottom', 'true');
  lastItems[i].classList.toggle('border-bottom');
}
}

createGrid();