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
    if(input<=2 || input>100){
        alert('Input must be from 2 to 100');
        return;
    }
     start(input);
}

function changeColor(){
    var select = document.querySelector('#colors');
    var value = select.options[select.selectedIndex].value;
    const gridEl=document.querySelectorAll('.grid-item');
    if(select.options[select.selectedIndex].value==='rgb'){
        gridEl.forEach(gridel=>{
            gridel.addEventListener('mouseover',()=>{
                const arr=[];
                for(let i=0;i<3;i++){
                    arr[i]=Math.floor(Math.random()*256);
                }
                gridel.style.backgroundColor=`rgb(${arr[0]},${arr[1]},${arr[2]})`
            })
        });
    }
    else{
        gridEl.forEach(gridel=>{
            gridel.addEventListener('mouseover',()=>{
                gridel.style.backgroundColor=value;
            })
        });
    }
}

start(16);





