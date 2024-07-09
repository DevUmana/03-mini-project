let win = [];
let lose = [];
let tie = [];

// Start the game function
function startGame() {
  let startGame = confirm("Are you Ready to play?");

  if (startGame) {
    playGame(userSelection());
  } else {
    alert("You have cancelled the game. Have a nice day!");
  }
}

// Ask user for selection
function userSelection() {
  let userSelected = prompt("Enter R, P, or S");

  if (userSelected === null) {
    alert("You have cancelled the game. Have a nice day!");
    return;
  } else if (
    userSelected !== "R" &&
    userSelected !== "P" &&
    userSelected !== "S"
  ) {
    alert("Invalid selection. Please try again.");
    userSelection();
    return userSelected;
  } else {
    return userSelected;
  }
}

// Get opponent random selection
function getOpponentSelection() {
  let opponentSelection = ["R", "P", "S"];
  return opponentSelection[Math.floor(Math.random() * 3)];
}

// Play the game
function playGame(x) {
  if (x === undefined) {
    return;
  }

  let userSelection = x;
  let opponentSelectionStored = getOpponentSelection();

  console.log("User Selection: " + userSelection);
  console.log("Opponent Selection: " + opponentSelectionStored);

  if (userSelection == opponentSelectionStored) {
    alert("It's a tie!");
    dataCollection("T");
  } else if (userSelection == "R" && opponentSelectionStored == "S") {
    alert("You win!");
    dataCollection("W");
  } else if (userSelection == "P" && opponentSelectionStored == "R") {
    alert("You win!");
    dataCollection("W");
  } else if (userSelection == "S" && opponentSelectionStored == "P") {
    alert("You win!");
    dataCollection("W");
  } else {
    alert("You lose!");
    dataCollection("L");
  }

  console.log(dataCollection());

  playAgain();
}

// Ask user to play again
function playAgain() {
  let playAgain = confirm("Do you want to play again?");
  
  if (playAgain) {
    playGame(userSelection());
  } else {
    alert(
      "Total Wins: " +
        dataCollection().win.length +
        "\nTotal Losses: " +
        dataCollection().lose.length +
        "\nTotal Ties: " +
        dataCollection().tie.length
    );
  }
}

function dataCollection(x) {
  if (x == "W") {
    win.push(x);
  } else if (x == "L") {
    lose.push(x);
  } else if (x == "T") {
    tie.push(x);
  }
  return { win, lose, tie };
}

// Starts the game
startGame();
