// Given a location (box) and 'X' or 'O' (player), add the appropriate play to the board.
function updateBoard(box, player) {
  document.getElementById(box).innerHTML = player
}

let boxes = document.querySelectorAll('.box')
let round = 0

// Test funtion to ensure boxes can be looped through and updated.
function testBoxes(boxes) {
  boxes.forEach(box => updateBoard(box.id, 'test'));
}

// Add event listeners to boxes.
function listenBox(boxes, round) {
  boxes.forEach(box => box.addEventListener("click", function() {
    if (round % 2 == 0 && round <= 9) {
      player = 'X'
    } else if (round % 2 !== 0 && round <= 9) {
      player = 'O'
    } else {
      console.log('game over')
    }
    updateBoard(box.id, player);
    round++;
  }));
}

// Game loop.
function gameLoop(boxes, round) {
  playing = true;
  listenBox(boxes, round);
}

gameLoop(boxes, round);
