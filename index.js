
function oroz(color) {
  const square = document.createElement('div');
  square.classList.add('square', color);
  return square;
}

function createChessboard(rows, cols) {
  const chessboard = document.getElementById('chessboard');
  chessboard.innerHTML = '';
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const color = (i + j) % 2 === 0 ? 'white' : 'black';
      const square = oroz(color);
      chessboard.appendChild(square);
    }
    chessboard.appendChild(document.createElement('br')); 
  }
}

createChessboard(8, 8);
