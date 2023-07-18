// Given a location (box) and 'X' or 'O' (player), add the appropriate play to the board.
function updateBoard(box, player) {
  if (document.getElementById(box).innerHTML == '') {
    document.getElementById(box).innerHTML = player
  } else {
    MESSAGE.innerHTML = 'Please choose an empty space'
  }

}

let boxes = document.querySelectorAll('.box')
let round = 0
const MESSAGE = document.getElementById('message')
const WIN_CONFIGS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

// Test funtion to ensure boxes can be looped through and updated.
function testBoxes(boxes) {
  boxes.forEach(box => updateBoard(box.id, 'test'));
}

// Add event listeners to boxes.
function listenBox(boxes, round) {
  boxes.forEach(box => box.addEventListener("click", function() {
    player = updatePlayer(round);
    winner = checkWin(boxes);
    if (player && !winner) {
      updateBoard(box.id, player);
      round++;
      checkWin(boxes);
    }
  }));
}

// Determine player based on current round
function updatePlayer(round) {
  if (round % 2 == 0 && round <= 8) {
    return 'X'
  } else if (round % 2 !== 0 && round <= 8) {
    return 'O'
  } else {
    MESSAGE.innerHTML = 'Scratch';
  }
}

// Check board for winner.
function checkWin(boxes) {
  for (const config of WIN_CONFIGS) {
    const [a, b, c] = config;
    const valueA = boxes[a].innerHTML;
    const valueB = boxes[b].innerHTML;
    const valueC = boxes[c].innerHTML;

    if (valueA && valueA === valueB && valueA === valueC) {
      // All three locations in 'boxes' are the same
      document.getElementById('message').innerHTML = 'Winner';
      return true;
    }
  }

  // No winning configuration found
  return false;
}

// Run game.
function game(boxes, round) {
  listenBox(boxes, round);
}

game(boxes, round);
