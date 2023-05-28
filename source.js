function start(RowColumnNumber){
    const grid=document.querySelector('#container');
    grid.innerHTML = '';
    grid.style.gridTemplateRows = 'repeat(' + RowColumnNumber + ', ' + (400 / RowColumnNumber) + 'px)';
    grid.style.gridTemplateColumns = 'repeat(' + RowColumnNumber + ', ' + (400 / RowColumnNumber) + 'px)';

    for(let i=0;i<RowColumnNumber*RowColumnNumber;i++){
        const grid_el=document.createElement('div');
        grid_el.classList.add('grid-item');
        grid.appendChild(grid_el);
    }
    changeColor();
}
function changeRowColumnNumber(input){
     start(input);
}

function changeColor(){
    const gridEl=document.querySelectorAll('.grid-item');
    gridEl.forEach(gridel=>{
        gridel.addEventListener('mouseover',()=>{
            gridel.style.backgroundColor='red';
        })
    });
}

start(16);





