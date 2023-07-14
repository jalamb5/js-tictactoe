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
    player = updatePlayer(round);
    if (player) {
      updateBoard(box.id, player);
      round++;
    }
    checkWinner(boxes);
  }));
}

// Determine player based on current round
function updatePlayer(round) {
  if (round % 2 == 0 && round <= 8) {
    return 'X'
  } else if (round % 2 !== 0 && round <= 8) {
    return 'O'
  } else {
    console.log('game over')
  }
}

// Check board for winner.
function checkWinner(boxes) {
  if (boxes[0].innerHTML == boxes[1].innerHTML && boxes[1].innerHTML == boxes[2].innerHTML) {
    console.log('winner');
  }
}

// Game loop.
function gameLoop(boxes, round) {
  playing = true;
  listenBox(boxes, round);
}

gameLoop(boxes, round);
