// Given a location (box) and 'X' or 'O' (player), add the appropriate play to the board.
function updateBoard(box, player) {
  document.getElementById(box).innerHTML = player
}

let boxes = document.querySelectorAll('.box')

// Test funtion to ensure boxes can be looped through and updated.
function testBoxes(boxes) {
  boxes.forEach(box => updateBoard(box.id, 'test'));
}

// Add event listeners to boxes.
function listenBox(boxes, player) {
  boxes.forEach(box => box.addEventListener("click", function() {
    updateBoard(box.id, player);
  }));
}


