// Cria quadro de Pixels

const pixelBoard = document.getElementById('pixel-board');

function criaQuadroPixels(pixels) {
  const quadro = pixels;

  for (let i = 1; i <= quadro * quadro; i++) {
    const blocoPixel = document.createElement('div');

    blocoPixel.className = 'pixel';
    blocoPixel.style.backgroundColor = 'white';
    blocoPixel.style.border = '1px solid black';
    blocoPixel.style.height = '60px';
    blocoPixel.style.width = '60px';
    blocoPixel.style.borderRadius = '5px';
    blocoPixel.style.padding = '3px';
    blocoPixel.style.margin = '3px';

    pixelBoard.appendChild(blocoPixel);
  }
}

// Limpar quadro de Pixels

function limparQuadro() {
  const pixels = document.querySelectorAll('.pixel');

  for (const blocos of pixels) {
    blocos.style.backgroundColor = 'white';
  }
}

const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', limparQuadro);

// Dimensionar Tabela

const tableSize = document.querySelector('#board-size');
const createButton = document.querySelector('#generate-board');

createButton.addEventListener('click', () => {
  const tamBoard = tableSize.value;

  if (tableSize.value === '') {
    alert('Board inválido');
  } else {
    criaQuadroPixels(tamBoard);
  }
});

// Adiciona evento a paleta de cores

function pixelSelected(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

const paletaDeCores = document.querySelectorAll('.color');

for (let x = 0; x < paletaDeCores.length; x += 1) {
  paletaDeCores[x].addEventListener('click', pixelSelected);
}

// Pintar blocos de pixels

function backgroundPixel() {
  const selectedPixel = document.querySelector('.selected');
  const theCSSprop = window

    .getComputedStyle(selectedPixel, null)
    .getPropertyValue('background-color');

  return theCSSprop;
}

pixelBoard.addEventListener('click', (event) => {
  if (event.target.id !== 'pixel-board') {
    event.target.style.backgroundColor = backgroundPixel();
  }
});

criaQuadroPixels(4.9);
