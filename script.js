
let size = 8;
const containerWidth = 500;
let gridSize = containerWidth / size;

let select = document.querySelector('.options');
select.onchange = () => {
    size = select.selectedOptions[0].value
    gridSize = containerWidth / size;
    clearGrid();
};

initGrid();
sketch();

let clear_button = document.querySelector('.clear_btn');
clear_button.onclick = () => clearGrid();



function clearGrid()
{
    let parent = document.querySelector('.container');
    let boxes = Array.from(document.querySelectorAll('.box_props'));
    boxes.forEach(function(box)
    {
        parent.removeChild(box);
    });

    initGrid();
    sketch();
}

function sketch()
{
    let boxes = Array.from(document.querySelectorAll('.box_props'));
    boxes.forEach(function(box)
    {
        box.addEventListener('mouseenter', function()
        {
            if (document.querySelector("#black").checked) box.style.background = 'black';
            else
            {
                let letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++)  color += letters[Math.floor(Math.random() * 16)]; 
                box.style.background = color;
            } 
        });
    });
}


function initGrid()
{

    let parent = document.querySelector('.container');
    for (let i = 0; i < (size * size); i++)
    {
        let box = document.createElement('div');
        box.classList.add('box_props');
        box.style.cssText = `width: ${gridSize}px; height: ${gridSize}px`;

        parent.appendChild(box);
    }

    parent.style.cssText = `width: ${containerWidth}px`;

}