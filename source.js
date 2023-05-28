let RowColumnNumber=parseInt(prompt('Enter number from 2 to 100'));
const grid=document.querySelector('#container');
grid.style.gridTemplateRows = 'repeat(' + RowColumnNumber + ', ' + (400 / RowColumnNumber) + 'px)';
grid.style.gridTemplateColumns = 'repeat(' + RowColumnNumber + ', ' + (400 / RowColumnNumber) + 'px)';
for(let i=0;i<RowColumnNumber*RowColumnNumber;i++){

    const grid_el=document.createElement('div');
    grid_el.classList.add('grid-item');
    grid.appendChild(grid_el);
}





