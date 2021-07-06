const board = document.querySelector('#board')
const SQUARES_NUMBER = 600
const colors = ['#ab9b90', '#8d3439', '#f5b7b6', '#223a66', '#b48484','#f6d680', '#6c2f49', '#955f42', '#9e787d', '#b4a389', '#b2d76c']

for(let i=0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')


    square.addEventListener('mouseover', () => setColor (square))
    square.addEventListener('mouseleave', () => removeColor (square))

    board.append(square)
}


function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}