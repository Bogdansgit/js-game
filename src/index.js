const figures = ['circle', 'square', 'triangle'];

let couneter = document.querySelector('.game-box__controller__counter span');
const addButton = document.querySelector('.add');
const minusButton = document.querySelector('.remove');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

const randomFigurs = (arr) => arr[Math.floor(Math.random() * figures.length)];
const rendomColors = () => Math.floor(Math.random() * 16777215).toString(16);
const randomSize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateRandomFigures = () => {
    const randomShape = document.createElement('div');
    const randomShapeSize = `${randomSize(20, 50)}px`;
    const randomFigures = randomFigurs(figures);
    
    randomShape.classList.add('shape', `shape--${randomFigures}`);
    randomShape.setAttribute("style", `width:${randomShapeSize};height:${randomShapeSize};background-color:#${rendomColors()}`);
    randomShape.style.left = `${randomSize(0, 90)}%`;

    let screen = document.querySelector('.game-box__screen');
    screen.appendChild(randomShape);

    randomShape.addEventListener('click', function(event) {
        event.target.remove();
        figureCount();
    });
    
    return randomShape;
}



let moveShape = (shape) => {
    let position = 0;
    let id = setInterval(frame, 45);
    function frame() {
        if (position === (400 - shape.offsetHeight)) {
            clearInterval(id);
            shape.remove();
            figureCount()
        } else {
            position++;
            shape.style.bottom = position + 'px';
        }
    }
}

const addNewShape = () => {
    moveShape(generateRandomFigures());
    figureCount()
}

let removeShape = () => {
    let screen = document.querySelector('.game-box__screen');
    screen.removeChild(screen.lastChild);
    figureCount();
}

const figureCount = () => {
    let screen = document.querySelector('.game-box__screen');
    couneter.innerHTML = screen.childElementCount;
}

const anableButton = (button) => {
    button.removeAttribute("disabled", "disabled");
}

const disableButton = (button) => {
    button.setAttribute("disabled", "disabled");
}

const activate = () => {
    anableButton(minusButton);
    anableButton(addButton);
}

const disable = () => {
    disableButton(minusButton);
    disableButton(addButton);
    let screen = document.querySelector('.game-box__screen');
    screen.innerHTML = '';
}
