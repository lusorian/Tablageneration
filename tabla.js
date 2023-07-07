const drawLinesButton = document.getElementById('draw-lines-btn');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

drawLinesButton.addEventListener('click', drawLines);

function drawLines() {
  const numRows = parseInt(document.getElementById('num-rows').value);
  const numCols = parseInt(document.getElementById('num-cols').value);
  const lineColor = document.getElementById('line-color').value;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const rowHeight = canvasHeight / numRows;
  const colWidth = canvasWidth / numCols;

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.strokeStyle = lineColor;

  for (let i = 0; i <= numRows; i++) {
    const y = i * rowHeight;
    drawLine(0, y, canvasWidth, y);
  }

  for (let j = 0; j <= numCols; j++) {
    const x = j * colWidth;
    drawLine(x, 0, x, canvasHeight);
  }
drawLine(0, canvasHeight, canvasWidth, canvasHeight);
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}
