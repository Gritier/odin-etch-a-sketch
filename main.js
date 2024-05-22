const container = document.querySelector('#container');
const newSquarePadButton = document.querySelector('#newSquarePadButton');

function randomColor() {
    const rgb = [];
    for (let color = 0; color < 3; color++) {
        rgb.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function generateSquarePad(dimension){

    for (let row = 0; row < dimension; row++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        for (let square = 0; square < dimension; square++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.style.backgroundColor = randomColor();
            newSquare.style.opacity = 0;
            newSquare.addEventListener('mouseover', () => {
                newSquare.style.opacity < 1 ? newSquare.style.opacity = parseFloat(newSquare.style.opacity) + 0.1 : newSquare.style.opacity = 0;
            })
            newRow.appendChild(newSquare);
        }
        container.appendChild(newRow);
    }
}

function resetSquarePad() {
    container.innerHTML = '';
}

newSquarePadButton.addEventListener('click', () => {
    const dimension = parseInt(prompt('How many squares do you want per side?'));

    if (isNaN(dimension) || dimension % 1 != 0 || dimension <= 0){
        alert('You inserted an invalid value!');
    } else if (dimension>100){
        alert('You inserted a value too high! The maximum is 100!');
    }
    else {
        resetSquarePad();
        generateSquarePad(dimension);
    }
})

generateSquarePad(16);


